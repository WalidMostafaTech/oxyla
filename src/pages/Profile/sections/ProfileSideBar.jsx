import { BsBell } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { PiCalendarMinus } from "react-icons/pi";
import { RiEdit2Line } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const ProfileSideBar = ({ isOpen, handleClose }) => {
  const profileList = [
    { name: "edit profile", url: "", icon: <RiEdit2Line /> },
    { name: "notifications", url: "notifications", icon: <BsBell /> },
    { name: "appointment", url: "appointment", icon: <PiCalendarMinus /> },
    { name: "wishlist", url: "wishlist", icon: <FiHeart /> },
    { name: "logout", url: "logout", icon: <TbLogout2 /> },
  ];

  return (
    <>
      {/* 🔹 الخلفية الشفافة عند الفتح */}
      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black/40 z-[1000] md:hidden"
        ></div>
      )}

      {/* 🔹 السايدبار */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white border-e border-gray-200 z-[1001] transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* 🔹 العنوان في الموبايل */}
        <div className="flex items-center justify-between p-4 border-b mb-4 border-gray-200">
          <h3 className="text-xl font-bold text-myPurple">Profile</h3>
          <button onClick={handleClose} className="text-gray-600 text-2xl md:hidden">
            <IoClose />
          </button>
        </div>

        {/* 🔹 العنوان في الديسكتوب */}
        {/* <h3 className="hidden md:block text-2xl font-bold text-myPurple pb-2 mb-4 border-b border-gray-300 px-4 pt-4">
          Profile
        </h3> */}

        {/* 🔹 الروابط */}
        <nav className="flex flex-col gap-2 px-4">
          {profileList.map((item) => (
            <NavLink
              key={item.name}
              to={`/profile/${item.url}`}
              end
              onClick={handleClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition ${
                  isActive
                    ? "bg-myPurple text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              <p className="capitalize">{item.name}</p>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default ProfileSideBar;
