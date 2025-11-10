import AboutBanner from "./sections/AboutBanner";
import AboutBottomSection from "./sections/AboutBottomSection";
import AboutMiddleSection from "./sections/AboutMiddleSection";
import AboutTopSection from "./sections/AboutTopSection";

const AboutUS = () => {
  return (
    <section className="space-y-8">
      <AboutBanner />
      <AboutTopSection />
      <AboutMiddleSection />
      <AboutBottomSection />
    </section>
  );
};

export default AboutUS;
