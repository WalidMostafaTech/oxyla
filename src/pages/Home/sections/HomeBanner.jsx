import img from "../../../assets/images/book-img.jpg";

const HomeBanner = () => {
  return (
    <section className="my-10 container">
      <div className="bg-stone-200 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 lg:w-1/3 h-[300px]">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="p-4 lg:p-8 flex-1 content-center">
          <p className="text-2xl lg:text-4xl font-bold text-center mb-4 lg:mb-8">
            Get special offers on oxygen rooms.
          </p>

          <div className="bg-white p-2 rounded-full flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-2 outline-0 border-0"
            />

            <button className="bg-myGreen text-white px-4 py-2 rounded-full hover:brightness-90 transition cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
