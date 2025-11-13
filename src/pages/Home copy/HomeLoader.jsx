import logo1 from "../../assets/images/oxela-home-logo/1.png";
import logo2 from "../../assets/images/oxela-home-logo/2.png";
import logo3 from "../../assets/images/oxela-home-logo/3.png";
import logo4 from "../../assets/images/oxela-home-logo/4.png";
import logo5 from "../../assets/images/oxela-home-logo/5.png";

const HomeLoader = () => {
  return (
    <section className="fixed inset-0 z-[1111] bg-white flex flex-col items-center justify-center gap-4">
      <div className="h-[200px] w-[200px] bg-amber-300 relative overflow-hidden">
        <img src={logo5} alt="logo" className="w-full" />
      </div>

      <h3>Breath . Renew . Heal</h3>
    </section>
  );
};

export default HomeLoader;
