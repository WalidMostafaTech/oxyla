import { useState } from "react";
import HeroSection from "./sections/HeroSection";
import LoadingHome from "../../components/Loading/LoadingHome";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <article>
      {/* صفحة التحميل */}
      <LoadingHome show={show} onFinish={() => setShow(false)} />

      {/* المحتوى الرئيسي */}
      <AnimatePresence>
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
      </AnimatePresence>

      {!show && (
        <>
          {/* <HeroSection /> */}

          {/* <Features />
          <MainCategories />
          <Services />
          <HomeVideo />
          <MissionVisionSolution />
          <Process />
          <Partners /> */}
        </>
      )}
    </article>
  );
};

export default Home;
