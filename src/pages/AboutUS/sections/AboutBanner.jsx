import bannerImg from "../../../assets/images/book-img.jpg";

const AboutBanner = () => {
  return (
    <section
      className="w-full h-[400px] bg-no-repeat bg-center bg-cover relative"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container pagePadding">AboutBanner</div>
    </section>
  );
};

export default AboutBanner;
