import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import userImg from "../../../assets/images/man.png";
import { renderStars } from "../../../utils/renderStars";

const items = [
  {
    id: 1,
    image: userImg,
    name: "John Doe",
    job: "Designer",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rate: 5,
  },
  {
    id: 2,
    image: userImg,
    name: "Jane Smith",
    job: "Developer",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rate: 4.5,
  },
  {
    id: 3,
    image: userImg,
    name: "Ahmed Ali",
    job: "Manager",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rate: 4,
  },
  {
    id: 4,
    image: userImg,
    name: "Sara Mohamed",
    job: "Artist",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rate: 3.5,
  },
  {
    id: 6,
    image: userImg,
    name: "Sara Mohamed",
    job: "Artist",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rate: 3.5,
  },
  {
    id: 7,
    image: userImg,
    name: "Sara Mohamed",
    job: "Artist",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rate: 3.5,
  },
];

const ServiceTestimonials = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: (index, className) => {
            return `<span class="${className} w-6 h-1 rounded-full inline-block mx-1"></span>`;
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-12"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="flex items-center gap-2 bg-stone-200 p-4 pb-6">
                <span className="h-18 w-18 overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </span>

                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.job}</p>
                </div>
              </div>

              <div className="p-4 pt-6 relative">
                <div className="flex gap-1 bg-white py-1 px-2 rounded absolute start-1/2 -top-3 -translate-x-1/2">
                  {renderStars(item.rate)}
                </div>

                <p className="text-sm text-gray-500 text-center max-w-md mx-auto">
                  {item.paragraph}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* ✅ Custom pagination */}
        <div className="custom-pagination flex justify-center items-center mt-6"></div>
      </Swiper>

      {/* ✅ Tailwind inline style */}
      <style>
        {`
          .swiper-pagination-bullet {
            background: #ccc;
            opacity: 1;
            transition: all 0.3s ease;
            width: 10px;
            height: 5px;
            border-radius: 5px;
          }
          .swiper-pagination-bullet-active {
            background: var(--color-myGreen); 
            width: 20px;
          }
        `}
      </style>
    </section>
  );
};

export default ServiceTestimonials;
