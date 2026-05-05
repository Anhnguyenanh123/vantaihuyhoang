interface RssNewsItem {
  title: string;
  link: string;
  pubDate: string;
  image: string;
}

function decodeXml(value: string): string {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&#038;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function extractTagContent(block: string, tag: string): string {
  const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match?.[1]?.trim() ?? "";
}

function extractImageUrl(block: string): string {
  const enclosureMatch = block.match(/<enclosure[^>]*url="([^"]+)"/i);
  if (enclosureMatch?.[1]) {
    return decodeXml(enclosureMatch[1]);
  }

  const description = extractTagContent(block, "description");
  const imageMatch = description.match(/<img[^>]*src="([^"]+)"/i);
  if (imageMatch?.[1]) {
    return decodeXml(imageMatch[1]);
  }

  return "";
}

function parseRss(xml: string, limit: number): RssNewsItem[] {
  const itemBlocks = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];
  const result: RssNewsItem[] = [];

  for (const block of itemBlocks) {
    const title = decodeXml(
      extractTagContent(block, "title")
        .replace("<![CDATA[", "")
        .replace("]]>", ""),
    );
    const link = decodeXml(extractTagContent(block, "link"));
    const pubDate = decodeXml(extractTagContent(block, "pubDate"));
    const image = extractImageUrl(block);

    if (!title || !link) {
      continue;
    }

    result.push({ title, link, pubDate, image });

    if (result.length >= limit) {
      break;
    }
  }

  return result;
}

export async function getLatestNews(limit = 6): Promise<RssNewsItem[]> {
  try {
    const response = await fetch("https://vnexpress.net/rss/tin-moi-nhat.rss", {
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      return [];
    }

    const xml = await response.text();
    return parseRss(xml, limit);
  } catch {
    return [];
  }
}
