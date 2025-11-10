import { RiLogoutCircleLine } from "react-icons/ri";

const Logout = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-myPurple mb-4">Logout</h2>

      <div className="flex flex-col items-center gap-4 h-full">
        <span className="text-5xl text-white bg-myGreen p-2 rounded-full">
          <RiLogoutCircleLine />
        </span>

        <h1 className="text-2xl font-bold">
          Are you sure you want to logout ?
        </h1>

        <button className="mainBtn">Logout</button>
      </div>
    </section>
  );
};

export default Logout;
