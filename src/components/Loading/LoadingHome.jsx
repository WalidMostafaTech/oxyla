import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo/logo.png";

const LoadingHome = () => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let interval;
    let timeout;

    interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);

    timeout = setTimeout(() => {
      clearInterval(interval);
      setShow(false);
    }, 5300);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const [logoSize, setLogoSize] = useState(120); // الحجم الافتراضي للموبايل

  useEffect(() => {
    // ⬇️ تحديد حجم الصورة حسب حجم الشاشة
    const updateLogoSize = () => {
      const width = window.innerWidth;
      if (width < 640) setLogoSize(100); // موبايل
      else if (width < 768) setLogoSize(150); // small tablet
      else if (width < 1024) setLogoSize(200); // tablet
      else setLogoSize(250); // شاشات كبيرة
    };

    updateLogoSize();
    window.addEventListener("resize", updateLogoSize);
    return () => window.removeEventListener("resize", updateLogoSize);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 7, delay: 1, type: "spring" }}
          >
            {/* الدائرة الأساسية */}
            <motion.div className="w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full border-2 lg:border-4 border-dashed border-myPurple" />

            {/* المدار اللي بيلف عليه الرقم */}
            <motion.div
              className="absolute w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 5, ease: "linear" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-[170px] lg:-translate-x-[325px] -translate-y-1/2">
                <motion.div
                  className="relative text-myPurple text-2xl lg:text-3xl font-bold flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 5, ease: "linear" }}
                >
                  <span
                    className="absolute inset-0 rounded-full bg-white/90 backdrop-blur-sm"
                    style={{
                      boxShadow: "0 0 10px rgba(255,255,255,0.5)",
                    }}
                  ></span>
                  <span className="relative z-10">{progress}%</span>
                </motion.div>
              </div>

              <div className="absolute top-1/2 right-1/2 translate-x-[170px] lg:translate-x-[325px] -translate-y-1/2">
                <motion.div
                  className="relative text-myPurple text-2xl lg:text-3xl font-bold flex items-center justify-center"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 5, ease: "linear" }}
                >
                  <span
                    className="absolute inset-0 rounded-full bg-white/90 backdrop-blur-sm"
                    style={{
                      boxShadow: "0 0 10px rgba(255,255,255,0.5)",
                    }}
                  ></span>
                  <span className="relative z-10">{progress}%</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* أنيميشن LOGO */}
          {/* <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            initial={{ clipPath: "inset(0 100% 0 0)", x: "50%", opacity: 0 }} // مغطية الصورة بالكامل من الشمال
            animate={{ clipPath: "inset(0 0 0 0)", x: 0, opacity: 1 }} // بتتفتح من اليمين للشمال
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          >
            <img src={logo} alt="logo" style={{ width: logoSize }} />
          </motion.div> */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
            initial={{ scale: 0, opacity: 0 }} // مغطية الصورة بالكامل من الشمال
            animate={{ scale: 1, opacity: 1 }} // بتتفتح من اليمين للشمال
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          >
            <img src={logo} alt="logo" style={{ width: logoSize }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingHome;
