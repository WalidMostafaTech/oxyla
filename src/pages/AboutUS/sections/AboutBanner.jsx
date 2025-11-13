const AboutBanner = ({ data }) => {
  return (
    <section
      className="w-full h-[400px] bg-no-repeat bg-center bg-cover relative"
      style={{
        backgroundImage: `url(${data?.banner_image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 container pagePadding text-white">
        {data?.head_text}
      </div>
    </section>
  );
};

export default AboutBanner;
