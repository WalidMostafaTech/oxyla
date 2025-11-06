import Marquee from "react-fast-marquee";
import MarqueeImg from "../../../assets/images/Frame 1161.png";

const partners = [
  {
    id: 1,
    logo: MarqueeImg,
    url: "https://www.google.com/",
  },
  {
    id: 2,
    logo: MarqueeImg,
    url: "https://www.google.com/",
  },
  {
    id: 3,
    logo: MarqueeImg,
    url: "https://www.google.com/",
  },
  {
    id: 4,
    logo: MarqueeImg,
    url: "https://www.google.com/",
  },
  {
    id: 5,
    logo: MarqueeImg,
    url: "https://www.google.com/",
  },
  {
    id: 6,
    logo: MarqueeImg,
    url: "https://www.google.com/",
  },
  {
    id: 7,
    logo: MarqueeImg,
    url: "https://www.google.com/",
  },
  {
    id: 8,
    logo: MarqueeImg,
    url: "https://www.google.com/",
  },
];

const Partners = () => {
  return (
    <section className="sectionPadding my-8">
      <h2 className="text-myGreen text-3xl lg:text-4xl font-bold text-center mb-10 lg:mb-14 uppercase">
        Our Partners
      </h2>

      <Marquee speed={200} gradient={false}>
        {partners?.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            className="h-24 w-32 lg:w-52 overflow-hidden flex items-center justify-center mx-4 lg:mx-10"
          >
            <img
              src={item.logo}
              alt={`partner-${item.id}`}
              className="w-full h-full object-contain"
            />
          </a>
        ))}
      </Marquee>
    </section>
  );
};

export default Partners;
