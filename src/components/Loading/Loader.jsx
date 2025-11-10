import logoImg from "../../assets/images/logo/logo.png";

const Loader = () => {
  return (
    <div className="flex flex-col items-center">
      <img src={logoImg} alt="Logo" className="w-16 lg:w-22 animate-bounce" />

      <h2 className="text-xl font-bold text-myBlue-2 mt-4">Loading ...</h2>
    </div>
  );
};

export default Loader;
