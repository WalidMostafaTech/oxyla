import { useState } from "react";
import { Outlet } from "react-router-dom";
import ProfileSideBar from "./sections/ProfileSideBar";
import { HiMenuAlt2 } from "react-icons/hi";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <section className="container pagePadding">
      {/* 🔹 زر الفتح في الموبايل */}
      <button
        onClick={handleToggle}
        className="md:hidden bg-myPurple text-white text-xl p-1 rounded shadow-lg"
      >
        <HiMenuAlt2 />
      </button>

      <div className="flex h-full relative">
        {/* 🔹 السايدبار */}
        <ProfileSideBar isOpen={isOpen} handleClose={handleClose} />

        {/* 🔹 المحتوى */}
        <main className="flex-1 md:p-6 w-full overflow-hidden">
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default Profile;
