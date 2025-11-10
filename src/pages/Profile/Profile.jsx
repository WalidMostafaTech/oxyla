import { Outlet } from "react-router-dom";
import { useState } from "react";
import ProfileSideBar from "./sections/ProfileSideBar";
import { HiMenuAlt2 } from "react-icons/hi";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <section className="container pagePadding flex h-full relative">
      {/* زرار الفتح (بيظهر في الموبايل فقط) */}
      {/* <button
        className="md:hidden fixed top-20 left-4 z-50 bg-myPurple text-white p-2 rounded-md shadow-md"
        onClick={handleToggle}
      >
        <HiMenuAlt2 size={24} />
      </button> */}

      {/* السايدبار */}
      <ProfileSideBar isOpen={isOpen} handleClose={handleClose} />

      {/* محتوى الصفحة */}
      <main className="flex-1 md:p-6">
        <Outlet />
      </main>
    </section>
  );
};

export default Profile;
