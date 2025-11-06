import img1 from "../../../assets/icons/1dad7fb40cead714202b8ca1734ff07031f0a8fc.png";
import img2 from "../../../assets/icons/597bc5382a1c958552957fd179751f3f3afa3d16.png";
import img3 from "../../../assets/icons/b56644e443c4f8e5c1e06b2e346c9981a95b3cb9.png";
import GradientTitle from "../../../components/common/GradientTitle";

const items = [
  {
    icon: img3,
    title: "Rejuvenate Your Skin",
    paragraph:
      "Experience deep relaxation and skin revitalization with every oxygen session — feel the glow from within.",
  },
  {
    icon: img2,
    title: "Pure Natural Essence",
    paragraph:
      "We combine pure oxygen therapy with nature-inspired care to enhance your body’s natural healing power.",
  },
  {
    icon: img1,
    title: "Oxyla Drink",
    paragraph:
      "Refresh your energy with the Oxyla oxygen-infused drink — a perfect boost for clarity, focus, and vitality",
  },
];

const WhyChooseUS = () => {
  return (
    <section className="sectionPadding container">
      <GradientTitle title="Why Choose Us" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div className="flex flex-col items-center gap-1 group">
            <span className="h-18 overflow-hidden mb-4">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </span>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-gray-500 text-center max-w-md">
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUS;
