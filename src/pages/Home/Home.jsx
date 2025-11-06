import { useState } from "react";
import HeroSection from "./sections/HeroSection";
import LoadingHome from "../../components/Loading/LoadingHome";
import { AnimatePresence, motion } from "framer-motion";
import WhyChooseUS from "./sections/WhyChooseUS";
import TopBookNow from "./sections/TopBookNow";
import RelaxationJourney from "./sections/RelaxationJourney";
import Features from "./sections/Features";
import Testimonials from "./sections/Testimonials";
import HomeBanner from "./sections/HomeBanner";
import Partners from "./sections/Partners";

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <article>
      {/* صفحة التحميل */}
      {/* <LoadingHome show={show} onFinish={() => setShow(false)} /> */}

      {/* المحتوى الرئيسي */}
      {/* <AnimatePresence>
        {!show && (
          <motion.div
            key="home-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <HeroSection />
          </motion.div>
        )}
      </AnimatePresence> */}

      <WhyChooseUS />
      <TopBookNow />
      <RelaxationJourney />
      <Features />
      <Testimonials />
      <HomeBanner />
      <Partners />
    </article>
  );
};

export default Home;
