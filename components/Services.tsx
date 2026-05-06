import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Warehouse,
  Container,
  ArrowRight,
  MoveHorizontal,
} from "lucide-react";

const services = [
  {
    title: "Vận Tải Nội Địa",
    excerpt:
      "Dịch vụ vận chuyển hàng hóa đa dạng bằng đường bộ, đường sắt trên toàn quốc với chi phí cạnh tranh.",
    image:
      "https://taxitailongthanh.com/wp-content/uploads/2019/04/86610552_285667385746404_3767600012754681856_o-800x360.jpg",
    href: "/van-tai-noi-dia",
    icon: <Truck size={48} className="text-secondary" />,
  },
  {
    title: "Cho Thuê Kho Bãi",
    excerpt:
      "Hệ thống kho bãi hiện đại, an toàn, vị trí thuận tiện giúp tối ưu hóa quy trình lưu kho và phân phối.",
    image:
      "https://taxitailongthanh.com/wp-content/uploads/2019/04/86382553_283221999324276_5052199283307053056_n-711x400.jpg",
    href: "/cho-thue-kho-bai",
    icon: <Warehouse size={48} className="text-secondary" />,
  },
  {
    title: "Cho Thuê Xe Đầu Kéo",
    excerpt:
      "Đội xe đầu kéo mạnh mẽ, đời mới, đáp ứng mọi nhu cầu vận chuyển container và hàng hóa nặng.",
    image:
      "https://taxitailongthanh.com/wp-content/uploads/2019/04/87253766_285667565746386_8123793686761832448_o-800x360.jpg",
    href: "/cho-thue-xe-dau-keo",
    icon: <MoveHorizontal size={48} className="text-secondary" />,
  },
  {
    title: "Mua Bán Container",
    excerpt:
      "Cung cấp các loại container văn phòng, container kho chất lượng cao với giá thành hợp lý nhất.",
    image: "https://taxitailongthanh.com/wp-content/uploads/2025/08/bgduan.jpg",
    href: "/mua-ban-container",
    icon: <Container size={48} className="text-secondary" />,
  },
];

export function Services() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section from Image Style */}
        <div className="mb-16 text-center">
          <div className="mb-6 flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-1 w-1 rounded-full bg-secondary" />
            ))}
          </div>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase">
            <span className="text-secondary">DỊCH VỤ</span>{" "}
            <span className="text-zinc-800">CỦA CHÚNG TÔI</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-zinc-500 font-medium leading-relaxed">
            Từ khâu đặt hàng đến vận chuyển và thanh toán: Huy Hoàng giúp bạn
            vận chuyển hàng hóa nhanh hơn, rẻ hơn, an toàn hơn và dễ dàng hơn,
            để bạn có thể tập trung vào công việc kinh doanh của mình.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative h-[380px] overflow-hidden bg-zinc-900 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-30"
              />

              {/* Overlay Content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white">
                <div>
                  <h3 className="mb-3 text-2xl font-bold uppercase tracking-wide">
                    {service.title}
                  </h3>
                  {/* Dotted Line */}
                  <div className="mb-6 flex space-x-1">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-0.5 w-1 bg-secondary" />
                    ))}
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-zinc-300 line-clamp-4">
                    {service.excerpt}
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-secondary transition-colors">
                    <span>Đọc thêm</span>
                    <ArrowRight size={14} />
                  </div>

                  {/* Icon on bottom right */}
                  <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Bottom Border Glow */}
              <div className="absolute inset-x-0 bottom-0 h-1 translate-y-1 bg-secondary transition-transform group-hover:translate-y-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
