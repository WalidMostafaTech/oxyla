import { IoChevronBackOutline } from "react-icons/io5";

const AuthCard = ({ children, title, backBtn = false, onBack }) => {
  return (
    <div className="w-full h-full max-w-lg mx-auto rounded-xl shadow-lg bg-white p-4">
      <hgroup className="flex items-center gap-3 mb-4">
        {backBtn && (
          <button onClick={onBack} className="text-2xl cursor-pointer">
            <IoChevronBackOutline />
          </button>
        )}
        <h2 className="text-2xl font-semibold capitalize">{title}</h2>
      </hgroup>

      {children}
    </div>
  );
};

export default AuthCard;
