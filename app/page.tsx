import Image from "next/image";
import Link from "next/link";
import { getLatestNews } from "@/lib/rss";

interface ServiceItem {
  readonly title: string;
  readonly description: string;
}

interface TestimonialItem {
  readonly quote: string;
  readonly customer: string;
}

const companyInfo = {
  company: "CÔNG TY TNHH VẬN TẢI HUY HOÀNG",
  brand: "Vận tải Huy Hoàng",
  phone: "0903 319 638",
  phoneHref: "tel:0903319638",
  email: "vthuyhoang2009@gmail.com",
  address: "118B Đường số 2, KP9, P. Trường Thọ, TP. Thủ Đức, TP.HCM",
  website: "vantaihuyhoang.com",
} as const;

const navItems: ReadonlyArray<{ label: string; href: string }> = [
  { label: "Trang chủ", href: "#" },
  { label: "Giới thiệu", href: "#gioi-thieu" },
  { label: "Dịch vụ vận chuyển", href: "#dich-vu" },
  { label: "Tin tức hữu ích", href: "#tin-tuc" },
  { label: "Liên hệ", href: "#lien-he" },
];

const serviceItems: ServiceItem[] = [
  {
    title: "Vận tải nội địa",
    description:
      "Vận chuyển đường bộ hàng lẻ, hàng nguyên container từ Hà Nội đi các tỉnh lân cận.",
  },
  {
    title: "Vận tải đường sắt",
    description:
      "Nhận hàng lẻ, hàng nguyên toa, hàng nguyên container từ Bắc vào Nam và ngược lại.",
  },
  {
    title: "Dịch vụ liên quan",
    description:
      "Các dịch vụ hỗ trợ đóng gói, bốc xếp và phối hợp vận chuyển theo đặc thù từng mặt hàng.",
  },
];

const testimonials: TestimonialItem[] = [
  {
    customer: "Khách hàng doanh nghiệp",
    quote:
      "Công ty hỗ trợ rất nhanh, giá vận chuyển ổn định và quy trình làm việc rõ ràng.",
  },
  {
    customer: "Khách hàng cá nhân",
    quote:
      "Nhân sự nhiệt tình, tư vấn kỹ trước khi chạy hàng nên tôi rất yên tâm khi gửi hàng.",
  },
  {
    customer: "Đối tác vận chuyển",
    quote:
      "Đội xe và điều phối chuyên nghiệp, phối hợp tốt trong các chuyến đi liên tỉnh.",
  },
];

const businessFields: readonly string[] = [
  "Vận chuyển đường bộ: hàng lẻ, hàng nguyên container (tại Hà Nội đi các tỉnh/thành phố lân cận).",
  "Vận chuyển đường sắt: hàng lẻ, hàng nguyên toa, hàng nguyên container (từ Bắc vào Nam và ngược lại).",
  "Các hoạt động dịch vụ khác liên quan đến vận chuyển.",
];

const transportGoods: readonly string[] = [
  "Hàng tiêu dùng, hàng điện tử, máy móc thiết bị, vật tư, ô tô, xe máy.",
  "Với mặt hàng riêng biệt, công ty thỏa thuận phương án đóng gói và vận chuyển phù hợp.",
];

const receiveMethods: readonly string[] = ["Kho đến Kho", "Ga đến Ga"];

export const revalidate = 1800;

export default async function Home() {
  const newsItems = await getLatestNews(6);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Logo Vận tải Huy Hoàng"
              width={54}
              height={54}
              className="rounded-md"
            />
            <div>
              <p className="text-xl font-extrabold tracking-tight text-red-700">
                {companyInfo.brand}
              </p>
              <p className="text-xs text-zinc-500">{companyInfo.company}</p>
            </div>
          </div>
          <nav className="hidden items-center gap-5 text-sm font-semibold lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-red-700"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={companyInfo.phoneHref}
            className="rounded-full bg-red-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-800"
          >
            {companyInfo.phone}
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-zinc-900">
          <Image
            src="/banner.jpg"
            alt="Banner vận tải Huy Hoàng"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-linear-to-r from-zinc-950/80 via-zinc-900/45 to-transparent" />
          <div className="relative mx-auto flex h-[52vh] w-full max-w-6xl items-center px-4 sm:h-[62vh] sm:px-6">
            <div className="max-w-2xl">
              <p className="mb-3 inline-block rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold uppercase text-zinc-900">
                Thành lập năm 2009
              </p>
              <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
                Dịch vụ vận chuyển hàng hóa nội địa uy tín, chi phí tối ưu
              </h1>
              <p className="mt-4 text-sm text-zinc-200 sm:text-base">
                Đồng hành cùng doanh nghiệp và khách hàng trên các tuyến đường bộ,
                đường sắt toàn quốc.
              </p>
            </div>
          </div>
        </section>

        <section
          className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6"
          id="gioi-thieu"
        >
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-extrabold text-red-700">
              {companyInfo.company}
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-700">
              CÔNG TY TNHH Vận tải Huy Hoàng được thành lập năm 2009, với bề dày
              kinh nghiệm trong ngành vận chuyển hàng hóa nội địa. Chúng tôi đã
              tích lũy kinh nghiệm từ sự tin cậy của khách hàng và đối tác trong
              ngành, với mục tiêu luôn giữ mức chi phí phù hợp cho nhiều đối tượng
              khách hàng/ngành nghề.
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-700">
              Với chiến lược kinh doanh phát triển vì khách hàng, chúng tôi tập
              trung vào sự hài lòng, tin cậy và đồng hành bền vững trong hoạt động
              kinh doanh, sản xuất.
            </p>
          </div>
        </section>

        <section
          id="dich-vu"
          className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6"
        >
          <div className="mb-8 text-center">
            <h2 className="mt-2 text-3xl font-extrabold text-red-700">
              DỊCH VỤ CỦA CHÚNG TÔI
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {serviceItems.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm"
              >
                <h3 className="text-lg font-bold text-zinc-900">{service.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-zinc-100 py-14">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-red-700">
                  Lĩnh vực kinh doanh
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {businessFields.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-red-700">
                  Mặt hàng vận chuyển
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {transportGoods.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-red-700">
                  Phương thức nhận hàng
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {receiveMethods.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-red-700">
              KHÁCH HÀNG NÓI VỀ CHÚNG TÔI
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.customer}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h4 className="text-center text-lg font-bold text-zinc-900">
                  {item.customer}
                </h4>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  &quot;{item.quote}&quot;
                </p>
              </blockquote>
            ))}
          </div>
        </section>

        <section
          id="tin-tuc"
          className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6"
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-extrabold text-red-700">TIN MỚI NHẤT</h2>
            <p className="mx-auto mt-2 max-w-3xl text-sm text-zinc-600">
              Cập nhật tự động từ VNExpress RSS.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {newsItems.length > 0 ? (
              newsItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
                >
                  <Image
                    src={item.image || "/banner.jpg"}
                    alt={item.title}
                    width={800}
                    height={500}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-xs text-zinc-500">{item.pubDate}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-sm text-zinc-600">
                Chưa tải được dữ liệu RSS, vui lòng thử lại sau.
              </p>
            )}
          </div>
        </section>
      </main>

      <footer id="lien-he" className="bg-zinc-900 py-10 text-zinc-100">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3">
          <div>
            <h4 className="text-lg font-bold">{companyInfo.company}</h4>
            <p className="mt-3 text-sm leading-6">
              Chúng tôi hy vọng và luôn nỗ lực cố gắng để trở thành một trong
              những đơn vị vận chuyển hàng hóa nội địa đáng tin cậy nhất tại Việt
              Nam.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Thông tin văn phòng</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Địa chỉ: {companyInfo.address}</li>
              <li>Điện thoại: {companyInfo.phone}</li>
              <li>Email: {companyInfo.email}</li>
              <li>Website: {companyInfo.website}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold">Bản đồ</h4>
            <iframe
              title="Google Map 118B Đường số 2 Trường Thọ"
              src="https://www.google.com/maps?q=118B%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%202%2C%20Ph%C6%B0%E1%BB%9Dng%20Tr%C6%B0%E1%BB%9Dng%20Th%E1%BB%8D%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c%2C%20TPHCM&z=16&output=embed"
              className="mt-3 h-44 w-full rounded-xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
