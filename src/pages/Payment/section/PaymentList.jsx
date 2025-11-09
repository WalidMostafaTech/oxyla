import { useState } from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const paymentMethods = [
  { id: 1, type: "Visa", last4: "6754", expiry: "06/2021" },
  { id: 2, type: "MasterCard", last4: "5643", expiry: "11/2025" },
];

const offlineMethods = [
  { id: 3, name: "Cash on Delivery" },
  { id: 4, name: "Bank Transfer" },
];

const PaymentList = () => {
  const [selected, setSelected] = useState(paymentMethods[0].id);

  return (
    <section className="md:col-span-2 space-y-4">
      <div className="flex items-center gap-4 text-2xl">
        <h3 className="text-gray-400">Review</h3>
        <span>{">"}</span>
        <h3 className="font-bold">Payment</h3>
      </div>

      {/* Online Payment Methods */}
      <div>
        <h2 className="text-xl font-bold mb-1">Payment Method</h2>
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`flex items-center justify-between p-3 border rounded-md ${
                selected === method.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200"
              }`}
            >
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={selected === method.id}
                  onChange={() => setSelected(method.id)}
                  className="form-radio text-blue-500"
                />
                {method.type === "Visa" ? (
                  <FaCcVisa className="text-2xl" />
                ) : (
                  <FaCcMastercard className="text-2xl" />
                )}
                <span>•••• {method.last4}</span>
                <span className="text-gray-400">Expires {method.expiry}</span>
              </label>
              <button className="text-red-500 hover:underline cursor-pointer">
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Offline Payment Methods */}
      <div>
        <h2 className="text-xl font-bold mb-1">Offline Method</h2>
        <div className="space-y-3">
          {offlineMethods.map((method) => (
            <div
              key={method.id}
              className={`flex items-center justify-between p-3 border rounded-md ${
                selected === method.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200"
              }`}
            >
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={selected === method.id}
                  onChange={() => setSelected(method.id)}
                  className="form-radio text-blue-500"
                />
                <span className="font-medium">{method.name}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentList;
