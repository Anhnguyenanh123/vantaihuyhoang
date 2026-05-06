import Image from "next/image";

export function QuoteForm() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://taxitailongthanh.com/wp-content/uploads/2025/08/bgduan.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side: Image/Visual */}
          <div className="hidden overflow-hidden rounded-2xl shadow-2xl lg:block">
            <Image
              src="https://taxitailongthanh.com/wp-content/uploads/2019/04/87253766_285667565746386_8123793686761832448_o-1400x630.jpg"
              alt="Vận tải Huy Hoàng"
              width={1400}
              height={630}
              className="object-cover"
            />
          </div>

          {/* Right Side: Form */}
          <div className="rounded-3xl bg-white/10 p-8 shadow-2xl backdrop-blur-xl lg:p-12">
            <div className="mb-8 text-center lg:text-left">
              <h2 className="mb-4 text-3xl font-extrabold text-white lg:text-4xl uppercase">
                Đăng ký nhận báo giá
              </h2>
              <p className="text-zinc-100">
                Vui lòng điền thông tin vào form bên dưới để nhận được báo giá
                chính xác nhất từ chúng tôi.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Họ và tên..."
                  className="w-full rounded-xl border-none bg-white/95 px-6 py-3.5 text-zinc-900 placeholder-zinc-400 focus:ring-2 focus:ring-secondary"
                  required
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại..."
                  className="w-full rounded-xl border-none bg-white/95 px-6 py-3.5 text-zinc-900 placeholder-zinc-400 focus:ring-2 focus:ring-secondary"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Địa chỉ..."
                className="w-full rounded-xl border-none bg-white/95 px-6 py-3.5 text-zinc-900 placeholder-zinc-400 focus:ring-2 focus:ring-secondary"
                required
              />
              <textarea
                placeholder="Ghi chú thêm..."
                rows={4}
                className="w-full rounded-xl border-none bg-white/95 px-6 py-3.5 text-zinc-900 placeholder-zinc-400 focus:ring-2 focus:ring-secondary"
              ></textarea>
              <button
                type="submit"
                className="w-full rounded-full bg-secondary py-4 text-sm font-bold uppercase tracking-widest text-zinc-900 transition-all hover:bg-white hover:text-primary active:scale-95"
              >
                Gửi yêu cầu ngay
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
