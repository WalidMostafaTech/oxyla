import mapImg from "../../../assets/images/map (2).png";

const ContactMap = () => {
  return (
    <section>
      <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
        <img src={mapImg} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default ContactMap;
