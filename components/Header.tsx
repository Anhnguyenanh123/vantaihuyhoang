import Link from "next/link";
import Image from "next/image";
import { Search, Phone, ChevronDown, Menu } from "lucide-react";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  {
    label: "Dịch vụ vận chuyển",
    href: "#",
    children: [
      {
        label: "Dịch vụ chuyển nhà trọn gói",
        href: "/dich-vu-chuyen-nha-tron-goi",
      },
      { label: "Dịch vụ chuyển văn phòng", href: "/dich-vu-chuyen-van-phong" },
      {
        label: "Dịch vụ chuyển nhà bắc nam",
        href: "/dich-vu-chuyen-nha-bac-nam",
      },
      { label: "Taxi tải", href: "/taxi-tai" },
      { label: "Chuyển nhà giá rẻ", href: "/chuyen-nha-gia-re" },
    ],
  },
  { label: "Tin tức & sự kiện", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top Bar */}
      <div className="bg-accent py-2 text-white">
        <div className="container mx-auto flex justify-end px-4 text-xs font-bold uppercase tracking-wider">
          <Link href="#" className="hover:text-secondary">
            Hotline: 0907.181.567
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4 lg:py-6">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="https://taxitailongthanh.com/wp-content/uploads/2025/08/Thiet-ke-chua-co-ten-1400x788.png"
              alt="Taxi Tải Long Thành"
              width={208}
              height={112}
              className="h-12 w-auto lg:h-20"
              priority
            />
          </Link>

          {/* Search & Hotline (Desktop) */}
          <div className="hidden flex-1 items-center justify-center space-x-8 lg:flex">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full rounded-full border border-zinc-200 bg-zinc-50 px-6 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-primary p-1.5 text-white hover:bg-accent transition-colors">
                <Search size={16} />
              </button>
            </div>
            <div className="flex items-center space-x-2 text-lg font-bold text-zinc-900">
              <Phone size={20} className="text-primary" />
              <span>Hotline: 0907.181.567</span>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-4 lg:hidden">
            <Link
              href="tel:0848848000"
              className="rounded-full border border-primary px-4 py-1.5 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all"
            >
              0848.848.000
            </Link>
            <button className="text-zinc-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="hidden bg-secondary lg:block">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8 py-3">
            {navItems.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-sm font-bold uppercase text-zinc-900 hover:text-primary transition-colors"
                >
                  <span>{item.label}</span>
                  {item.children && <ChevronDown size={14} />}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-2 bg-white p-2 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
