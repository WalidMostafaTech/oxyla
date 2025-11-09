import { CiGlobe } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

const HeaderAction = ({ setActiveNav }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2">
      <button
        className="text-2xl text-myPurple cursor-pointer"
        onClick={() => setActiveNav(true)}
      >
        <CiGlobe />
      </button>
      <button
        className="text-2xl text-myPurple cursor-pointer"
        onClick={() => setActiveNav(true)}
      >
        <FiUser />
      </button>
      <button
        className="text-2xl text-myPurple cursor-pointer"
        onClick={() => setActiveNav(true)}
      >
        <IoCartOutline />
      </button>
    </div>
  );
};

export default HeaderAction;
