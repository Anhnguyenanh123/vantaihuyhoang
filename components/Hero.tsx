import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden lg:h-[60vh]">
      {/* Background Image with Dynamic Gradient */}
      <Image
        src="/banner.jpg"
        alt="Vận tải Huy Hoàng"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="container relative mx-auto flex h-full items-center px-4">
        <div className="max-w-2xl text-white">
          <h1 className="mb-6 text-3xl font-extrabold leading-tight lg:text-6xl">
            Vận tải Huy Hoàng <br />
            <span className="text-secondary tracking-tight">
              Uy Tín - Chuyên Nghiệp
            </span>
          </h1>
          <p className="mb-8 max-w-lg text-sm font-medium leading-relaxed text-zinc-100 lg:text-lg">
            Công ty Vận tải Huy Hoàng (2009) chuyên vận chuyển hàng hóa nội địa,
            chi phí hợp lý, dịch vụ linh hoạt, cam kết uy tín.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-accent transition-all transform hover:scale-105">
              Liên hệ ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
