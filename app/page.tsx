import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Criterion } from "@/components/Criterion";
import { Projects } from "@/components/Projects";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";
import { getLatestNews } from "@/lib/rss";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 1800;

export default async function Home() {
  const newsItems = await getLatestNews(8);

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />

      <main>
        <Hero />

        <Services />

        <Criterion />

        <Projects />

        {/* RSS News Section */}
        <section className="bg-zinc-50 py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-accent lg:text-4xl uppercase">
                TIN TỨC HỮU ÍCH
              </h2>
              <div className="mx-auto h-1 w-24 bg-secondary" />
            </div>

            <div className="overflow-hidden pb-4">
              <div className="flex w-max gap-6 animate-carousel-scroll">
                {[...newsItems, ...newsItems].map((item, index) => (
                  <Link
                    key={`${item.link}-${index}`}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group w-[320px] shrink-0 overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all hover:shadow-xl"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={
                          item.image ||
                          "https://taxitailongthanh.com/wp-content/uploads/2025/08/bgduan.jpg"
                        }
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="line-clamp-2 text-base font-bold text-zinc-900 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-zinc-400">
                        {item.pubDate}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <QuoteForm />
      </main>

      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-6 z-50 flex flex-col items-end space-y-4">
        {/* Zalo Button */}
        <a
          href="https://zalo.me/0907181567"
          target="_blank"
          className="group flex items-center space-x-3"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-white px-0 py-2 text-xs font-bold text-primary shadow-lg transition-all duration-300 group-hover:max-w-xs group-hover:px-4">
            Chat Zalo
          </span>
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0068ff] shadow-xl transition-transform hover:scale-110">
            <div className="absolute inset-0 animate-ping rounded-full bg-[#0068ff]/40" />
            <Image
              src="https://taxitailongthanh.com/wp-content/plugins/button-contact-vr/legacy/img/zalo.png"
              alt="Zalo"
              width={32}
              height={32}
              className="relative z-10"
            />
          </div>
        </a>

        {/* Phone Button */}
        <a href="tel:0907181567" className="group flex items-center space-x-3">
          <span className="max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-white px-0 py-2 text-xs font-bold text-primary shadow-lg transition-all duration-300 group-hover:max-w-xs group-hover:px-4">
            0907.181.567
          </span>
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary shadow-xl transition-transform hover:scale-110">
            <div className="absolute inset-0 animate-ping rounded-full bg-primary/40" />
            <PhoneIcon className="relative z-10 text-white" />
          </div>
        </a>
      </div>
    </div>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-6 w-6 ${className}`}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
