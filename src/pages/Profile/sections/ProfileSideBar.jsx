import { BsBell } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { PiCalendarMinus } from "react-icons/pi";
import { RiEdit2Line } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const ProfileSideBar = () => {
  const profileList = [
    { name: "edit profile", url: "", icon: <RiEdit2Line /> },
    { name: "notifications", url: "notifications", icon: <BsBell /> },
    { name: "appointment", url: "appointment", icon: <PiCalendarMinus /> },
    { name: "wishlist", url: "wishlist", icon: <FiHeart /> },
    { name: "logout", url: "logout", icon: <TbLogout2 /> },
  ];

  return (
    <aside className={`h-full w-64 bg-white border-e border-gray-200`}>
      {/* زرار الإغلاق في الموبايل */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 md:hidden">
        <h3 className="text-xl font-bold text-myPurple">Profile</h3>
        {/* <button onClick={handleClose}>
          <IoClose size={24} className="text-gray-500 hover:text-myPurple" />
        </button> */}
      </div>

      {/* العنوان في الديسكتوب */}
      <h3 className="hidden md:block text-2xl font-bold text-myPurple pb-2 mb-4 border-b border-gray-300 px-4 pt-4">
        Profile
      </h3>

      {/* الروابط */}
      <nav className="flex flex-col gap-2 px-4">
        {profileList.map((item) => (
          <NavLink
            key={item.name}
            to={`/profile/${item.url}`}
            end
            // onClick={handleClose}
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
  );
};

export default ProfileSideBar;
