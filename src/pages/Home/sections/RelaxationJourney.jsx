import { HiMiniArrowLongRight } from "react-icons/hi2";
import sectionBg from "../../../assets/images/section-bg.jpg";
import bookImg from "../../../assets/images/book-img.jpg";

const items = [
  {
    id: 1,
    title: "Azure Haven",
    image: bookImg,
  },
  {
    id: 2,
    title: "Serene Sanctuary",
    image: bookImg,
  },
  {
    id: 3,
    title: "Verdant Vista",
    image: bookImg,
  },
];

const RelaxationJourney = () => {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat my-10 text-white relative overflow-hidden"
      style={{ backgroundImage: `url(${sectionBg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="container relative z-10 space-y-6 lg:space-y-10">
        <h1 className="text-3xl md:text-5xl lg:text-[70px] font-bold text-shadow text-center">
          Start Your Relaxation Journey
        </h1>

        <hr className="my-4 mb-8 border-t-2" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <p className="text-lg mb-4 max-w-md text-center lg:text-start ms-auto me-auto lg:ms-0">
              Oxygen therapy supports your health by increasing energy, reducing
              stress, and enhancing overall well-being — all in a calm and
              comfortable environment.
            </p>

            <button className="mainBtn light rounded-full! hidden! lg:flex!">
              See All <HiMiniArrowLongRight />
            </button>
          </div>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col gap-2">
                  <div className="h-60 rounded-2xl overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-center">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="mainBtn light rounded-full! lg:hidden! mx-auto">
          See All <HiMiniArrowLongRight />
        </button>
      </div>
    </section>
  );
};

export default RelaxationJourney;
