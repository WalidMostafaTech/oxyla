import AuthCard from "../../../components/form/AuthCard";
import MainInput from "../../../components/form/MainInput";
import FormBtn from "../../../components/form/FormBtn";
import FormError from "../../../components/form/FormError";
import { useRef, useState } from "react";

const OTP = ({ goNext, parentData, setParentData }) => {
  const length = 6;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [error, setError] = useState("");
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.slice(-1);
      setOtp(newOtp);
      setError("");

      if (value && index < length - 1) {
        setTimeout(() => {
          inputsRef.current[index + 1]?.focus();
        }, 0);
      }
    }
  };

  // ✅ handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputsRef.current[index - 1].focus();
    }
  };

  // ✅ handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(pasted)) {
      setError("OTP must contain only numbers");
      return;
    }
    const newOtp = pasted.split("").slice(0, length);
    while (newOtp.length < length) newOtp.push("");
    setOtp(newOtp);
  };

  // ✅ handle focus
  const handleFocus = (index) => {
    const firstEmptyIndex = otp.findIndex((val) => val === "");
    if (firstEmptyIndex === -1) return;
    if (index > firstEmptyIndex) {
      inputsRef.current[firstEmptyIndex].focus();
    }
  };

  return (
    <AuthCard title={"Forgot Password"}>
      <form className="space-y-4">
        <div className="flex justify-between max-w-sm mx-auto gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              onFocus={() => handleFocus(index)}
              className="w-12 h-12 text-center text-lg font-medium border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-myBlue-2 focus:border-myBlue-2 transition-all"
            />
          ))}
        </div>

        <FormBtn title="Send OTP" />

        <FormError errorMsg={error} />
      </form>
    </AuthCard>
  );
};

export default OTP;
