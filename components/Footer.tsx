import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-footer-bg pt-16 text-zinc-400">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid gap-12 pb-16 lg:grid-cols-3">
          {/* Column 1: About */}
          <div>
            <h4 className="mb-8 text-xl font-bold text-white border-b-2 border-primary pb-2 inline-block">
              VỀ CHÚNG TÔI
            </h4>
            <p className="mb-6 leading-relaxed">
              Với hơn 15 năm kinh nghiệm trong lĩnh vực cho thuê xe và vận
              chuyển hàng hóa. Đội ngũ nhân viên và lượng xe tải chất lượng.
              Chúng tôi cam kết có thể xử lý mọi đơn hàng trong thời gian nhanh
              nhất.
            </p>
            <div className="flex space-x-4">
              {/* Placeholder social icons */}
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-white">f</span>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="text-white">z</span>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="mb-8 text-xl font-bold text-white border-b-2 border-primary pb-2 inline-block">
              THÔNG TIN VĂN PHÒNG
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 shrink-0 text-primary" size={18} />
                <span>
                  118B Đường số 2, KP9, P. Trường Thọ, TP. Thủ Đức, TP.HCM
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="shrink-0 text-primary" size={18} />
                <a
                  href="tel:0907181567"
                  className="hover:text-primary transition-colors"
                >
                  0907.181.567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="shrink-0 text-primary" size={18} />
                <a
                  href="mailto:vthuyhoang2009@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  vthuyhoang2009@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe className="shrink-0 text-primary" size={18} />
                <Link href="/" className="hover:text-primary transition-colors">
                  vantaihuyhoang.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Map */}
          <div>
            <h4 className="mb-8 text-xl font-bold text-white border-b-2 border-primary pb-2 inline-block">
              BẢN ĐỒ
            </h4>
            <div className="overflow-hidden rounded-xl bg-zinc-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125430.55890305256!2d106.92325770650446!3d10.757206189666109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31751e8c5f246c97%3A0x79418087c9b69466!2zTG9uZyBUaMOgbmgsIMSQ4buTbmcgTmFpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1755259291505!5m2!1svi!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/50 py-6">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 text-xs font-semibold lg:flex-row">
          <p>© 2025 Bản quyền thuộc về HUY HOÀNG THỊNH</p>
          <p className="mt-2 lg:mt-0">
            Thiết kế bởi{" "}
            <a
              href="https://vinadigtech.vn"
              target="_blank"
              className="text-primary hover:underline"
            >
              VINADIGTECH.VN
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
