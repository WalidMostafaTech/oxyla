import { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../../assets/images/logo/logo.png";
import NavBar from "./NavBar/NavBar";
import HeaderAction from "./HeaderAction";
import NavBarMobile from "./NavBar/NavBarMobile";

const Header = () => {
  const [activeNav, setActiveNav] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linksList = [
    { name: "home", path: "/" },
    { name: "about Us", path: "/about-us" },
    { name: "Products", path: "/Products" },
    { name: "contact", path: "/contact-us" },
  ];

  return (
    <motion.header
      ref={headerRef}
      className="container fixed left-1/2 -translate-x-1/2 top-4 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 5.2,
      }}
    >
      <div className="flex flex-col py-2 px-4 xl:py-4 xl:px-10 bg-white/90 backdrop-blur shadow-md rounded-3xl">
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="flex items-center gap-1">
            <span
              className="text-3xl text-myPurple cursor-pointer xl:hidden"
              onClick={() => {
                setActiveNav((prev) => !prev);
              }}
            >
              {activeNav ? <IoClose /> : <HiMenu />}
            </span>

            <Link
              to="/"
              onClick={() => setActiveNav(false)}
              className="flex items-center gap-2 group"
            >
              <img
                loading="lazy"
                src={logo}
                alt="Logo"
                className="w-14 xl:w-20"
              />
            </Link>
          </div>

          <div className="flex items-center gap-10">
            <NavBar setActiveNav={setActiveNav} links={linksList} />
            <HeaderAction setActiveNav={setActiveNav} />
          </div>
        </div>

        <NavBarMobile
          setActiveNav={setActiveNav}
          activeNav={activeNav}
          links={linksList}
        />
      </div>
    </motion.header>
  );
};

export default Header;
