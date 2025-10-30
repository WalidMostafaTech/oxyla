import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { IoArrowDown } from "react-icons/io5";
import { motion } from "framer-motion";
import bgImg from "../../../assets/images/0ae562ffe1ce014d83f47d93132c056a256ad484.jpg";
import bgVideo from "../../../assets/videos/3115738-hd_1280_720_24fps.mp4";

export default function HeroSection() {
  const swiperRef = useRef(null);

  const sliders = [
    {
      id: 1,
      title: "Competitive Prices",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      desktop_image: bgImg,
      mobile_image: bgImg,
    },
  ];

  // أنيميشن خفيفة وسلسة
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[EffectFade, Autoplay]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-full"
      >
        {sliders.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-full relative p-4">
              {/* الفيديو الخلفي */}
              <video
                src={bgVideo}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 z-[-1] w-full h-full object-cover"
              />

              {/* تظليل */}
              <div className="absolute inset-0 bg-black/40" />

              {/* المحتوى */}
              <div className="relative z-10 flex flex-col gap-4 items-center justify-center h-full text-center text-white">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={5.2}
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  className="text-lg md:text-2xl max-w-lg"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={5.5}
                >
                  {slide.subtitle}
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={5.8}
                >
                  <Link to="/products" className="mainBtn lg:min-w-64 mt-8">
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* الشكل الأبيض */}
      <div
        className="absolute bottom-0 left-0 w-full h-[80px] lg:h-[130px] bg-white z-10"
        style={{
          clipPath: "polygon(50% 40%, 100% 100%, 0% 100%)",
        }}
      />

      {/* السهم */}
      <IoArrowDown
        className="text-3xl lg:text-5xl text-white 
        absolute bottom-20 lg:bottom-25 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer"
      />
    </section>
  );
}
