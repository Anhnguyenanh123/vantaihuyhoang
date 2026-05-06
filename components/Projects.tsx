import Image from "next/image";

const projects = [
  {
    title: "Chuyển nhà chị Lan - Thủ Đức",
    image:
      "https://taxitailongthanh.com/wp-content/uploads/2019/04/86610552_285667385746404_3767600012754681856_o-800x360.jpg",
  },
  {
    title: "Chuyển văn phòng Techcombank",
    image:
      "https://taxitailongthanh.com/wp-content/uploads/2019/04/87253766_285667565746386_8123793686761832448_o-800x360.jpg",
  },
  {
    title: "Vận chuyển máy móc KCN Amata",
    image:
      "https://taxitailongthanh.com/wp-content/uploads/2019/04/86382553_283221999324276_5052199283307053056_n-711x400.jpg",
  },
];

export function Projects() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-accent lg:text-4xl uppercase">
            DỰ ÁN ĐÃ THỰC HIỆN
          </h2>
          <div className="mx-auto h-1 w-24 bg-secondary" />
        </div>

        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar lg:grid lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="group min-w-[300px] overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl lg:min-w-0"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
