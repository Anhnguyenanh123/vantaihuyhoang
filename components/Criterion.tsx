import Image from "next/image";

const criteria = [
  {
    title: "Khảo sát báo giá",
    description:
      "Tiếp nhận yêu cầu, khảo sát thực tế tận nơi, tư vấn và báo giá hoàn toàn miễn phí cho khách hàng.",
    icon: "https://taxitailongthanh.com/wp-content/uploads/2025/05/icon-01.png",
  },
  {
    title: "Điều phối xe nhanh",
    description:
      "Đội ngũ xe đông đảo với hơn 30 đầu xe đa dạng trọng tải, đáp ứng nhanh nhất nhu cầu của bạn.",
    icon: "https://taxitailongthanh.com/wp-content/uploads/2025/05/icon-06.png",
  },
  {
    title: "Giá cước rẻ nhất",
    description:
      "Tự tin mang đến mức giá cước cạnh tranh nhất thị trường, linh hoạt theo lộ trình và nhu cầu.",
    icon: "https://taxitailongthanh.com/wp-content/uploads/2025/05/icon-04.png",
  },
  {
    title: "Bảo hiểm hàng hóa",
    description:
      "Cam kết bảo hiểm hàng hóa 100%, biên lai rõ ràng giúp khách hàng tuyệt đối an tâm khi gửi gắm.",
    icon: "https://taxitailongthanh.com/wp-content/uploads/2025/05/icon-03.png",
  },
];

export function Criterion() {
  return (
    <section className="bg-zinc-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-primary lg:text-4xl">
            TIÊU CHÍ HOẠT ĐỘNG CỦA CHÚNG TÔI
          </h2>
          <div className="mx-auto h-1 w-24 bg-secondary" />
          <p className="mx-auto mt-6 max-w-2xl text-zinc-600">
            Dịch vụ của chúng tôi đem đến quy trình chuẩn nhằm tối ưu thời gian,
            giảm giá thành và nâng cao chất lượng vận chuyển.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {criteria.map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-50 transition-colors group-hover:bg-primary/5">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mb-4 text-xl font-bold text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                {item.description}
              </p>

              {/* Subtle accent border */}
              <div className="absolute inset-x-0 bottom-0 h-1 rounded-b-2xl bg-secondary opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
