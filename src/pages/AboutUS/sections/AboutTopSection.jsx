import Img from "../../../assets/images/book-img.jpg";
import { AiOutlineLike } from "react-icons/ai";

const list = [
  {
    id: 1,
    text: "Specialized medical care",
  },
  {
    id: 2,
    text: "Specialized medical care",
  },
  {
    id: 3,
    text: "Specialized medical care",
  },
  {
    id: 4,
    text: "Specialized medical care",
  },
  {
    id: 5,
    text: "Specialized medical care",
  },
  {
    id: 6,
    text: "Specialized medical care",
  },
];

const AboutTopSection = () => {
  return (
    <section className="sectionPadding w-full max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
      <div className="rounded-2xl overflow-hidden border-8 border-myPurple h-[300px]">
        <img src={Img} alt="book" className="w-full h-full object-cover" />
      </div>

      <article className="md:col-span-2">
        <p className="text-gray-500 mb-4 lg:mb-8">
          Oxela Center is a specialized center for hyperbaric oxygen therapy
          (HBOT), the first of its kind in Egypt and the Middle East. It
          combines medical expertise with the latest global technologies in a
          safe and comfortable therapeutic environment.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {list.map((item) => (
            <li key={item.id} className="flex items-center gap-2 group">
              <span
                className="bg-black text-myPurple text-xl rounded-full w-8 h-8 flex items-center justify-center 
              border border-black group-hover:bg-white group-hover:border-myPurple duration-300"
              >
                <AiOutlineLike />
              </span>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default AboutTopSection;
