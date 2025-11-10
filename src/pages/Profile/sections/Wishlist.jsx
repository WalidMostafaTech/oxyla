import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";

import img from "../../../assets/images/book-img.jpg";

const cartList = [
  {
    id: 1,
    title: "oxygen room",
    address: "Riyadh-King Fahd Branch",
    date: "15/03/2023",
    time: "10:00 AM",
    price: 100,
    quantity: 1,
    total: 100,
    image: img,
  },
  {
    id: 2,
    title: "oxygen room",
    address: "Riyadh-King Fahd Branch",
    date: "15/03/2023",
    time: "10:00 AM",
    price: 100,
    quantity: 1,
    total: 100,
    image: img,
  },
  {
    id: 3,
    title: "oxygen room",
    address: "Riyadh-King Fahd Branch",
    date: "15/03/2023",
    time: "10:00 AM",
    price: 100,
    quantity: 1,
    total: 100,
    image: img,
  },
];

const Wishlist = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-myPurple mb-4">
        Wishlist{" "}
        <span className="text-gray-400 text-sm font-normal">(2 items)</span>
      </h2>

      <div>
        {cartList.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 py-4 not-last:border-b border-gray-200"
          >
            <div className="w-26 h-26 sm:w-32 sm:h-32 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2 flex-1">
              <div className="text-lg font-semibold flex justify-between gap-4 w-full">
                <h3 className="flex-1">{item.title}</h3>
                <p>{item.price} $</p>
              </div>

              <p className="text-xs text-gray-500 flex items-center gap-1">
                <CiLocationOn className="text-myGreen text-lg" />
                {item.address}
              </p>

              <div className="flex items-center gap-4">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <LuCalendarDays className="text-myGreen text-sm" />
                  {item.date}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <IoMdTime className="text-myGreen text-sm" />
                  {item.time}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button className="mainBtn text-sm!">Change</button>
                <button className="text-red-500 hover:underline cursor-pointer">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
