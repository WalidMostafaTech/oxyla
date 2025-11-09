import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import userImg from "../../../assets/images/man.png";
import sectionBg from "../../../assets/images/section-bg.jpg";
import { renderStars } from "../../../utils/renderStars";

const items = [
  {
    id: 1,
    image: userImg,
    name: "John Doe",
    job: "Designer",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rate: 5,
  },
  {
    id: 2,
    image: userImg,
    name: "Jane Smith",
    job: "Developer",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rate: 4.5,
  },
  {
    id: 3,
    image: userImg,
    name: "Ahmed Ali",
    job: "Manager",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rate: 4,
  },
  {
    id: 4,
    image: userImg,
    name: "Sara Mohamed",
    job: "Artist",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rate: 3.5,
  },
  {
    id: 5,
    image: userImg,
    name: "John Doe",
    job: "Designer",
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    rate: 5,
  },
];

const Testimonials = () => {
  return (
    <article
      className="bg-cover bg-center bg-no-repeat my-10 relative overflow-hidden"
      style={{ backgroundImage: `url(${sectionBg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <section className="sectionPadding container relative z-10">
        <div className="flex items-center justify-between gap-4 mb-8 text-white">
          <h3 className="text-3xl font-bold">Testimonials</h3>

          <div className="flex items-center gap-3">
            <button className="swiper-button-prev-custom-testimonials text-2xl border border-gray-300 hover:bg-gray-800/10 p-2 rounded-lg transition cursor-pointer">
              <IoIosArrowBack />
            </button>
            <button className="swiper-button-next-custom-testimonials text-2xl border border-gray-300 hover:bg-gray-800/10 p-2 rounded-lg transition cursor-pointer">
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* 🧩 Swiper slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next-custom-testimonials",
            prevEl: ".swiper-button-prev-custom-testimonials",
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white !opacity-60",
            bulletActiveClass: "!opacity-100",
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            560: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="relative"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-2xl shadow-lg bg-white p-4 relative pt-8 mt-12">
                <div className="w-16 h-16 bg-white overflow-hidden rounded-full absolute -top-10 start-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-between gap-2 items-start">
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-xs text-gray-700">{item.job}</p>
                  </div>

                  {/* ⭐ النجوم */}
                  <div className="flex gap-1">{renderStars(item.rate)}</div>
                </div>

                <p className="text-sm line-clamp-3 mt-2">{item.paragraph}</p>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination-custom !bottom-[-10px] !relative mt-10"></div>
        </Swiper>
      </section>
    </article>
  );
};

export default Testimonials;
