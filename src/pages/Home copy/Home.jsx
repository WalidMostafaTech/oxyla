import WhyChooseUS from "./sections/WhyChooseUS";
import TopBookNow from "./sections/TopBookNow";
import RelaxationJourney from "./sections/RelaxationJourney";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import HomeBanner from "./sections/HomeBanner";
import Partners from "./sections/Partners";
import EmptySection from "../../components/sections/EmptySection";
import HomeLoader from "./HomeLoader";

const Home = () => {
  return (
    <article>
      <HomeLoader />
      {/* <EmptySection />
      <WhyChooseUS />
      <TopBookNow />
      <RelaxationJourney />
      <Features />
      <Testimonials />
      <HomeBanner />
      <Partners /> */}
    </article>
  );
};

export default Home;
