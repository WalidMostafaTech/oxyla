import { useMutation } from "@tanstack/react-query";
import AuthCard from "../../../components/form/AuthCard";
import FormBtn from "../../../components/form/FormBtn";
import FormError from "../../../components/form/FormError";
import { useEffect, useRef, useState } from "react";
import { verifyOtp, reSendOtp } from "../../../services/forgotPasswordServices";

const OTP = ({ goNext, parentData, setParentData }) => {
  const length = 6;
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(60); // ✅ عداد 60 ثانية
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputsRef = useRef([]);

  // ✅ Mutation للتحقق من OTP
  const {
    mutate: verifyOtpMutation,
    isPending,
    isError,
    error: apiError,
  } = useMutation({
    mutationFn: ({ code, email }) => verifyOtp({ code, email }),
    onSuccess: (res, variables) => {
      setParentData((prev) => ({
        ...prev,
        otp: variables.code,
        reset_token: res.data.reset_token,
      }));
      console.log("✅ OTP verified successfully:", res);
      goNext();
    },
    onError: (err) => {
      console.error("❌ Error verifying OTP:", err);
    },
  });

  // ✅ Mutation لإعادة إرسال OTP
  const {
    mutate: resendOtpMutation,
    isPending: isResending,
    isSuccess: resendSuccess,
  } = useMutation({
    mutationFn: (email) => reSendOtp(email),
    onSuccess: () => {
      console.log("✅ OTP resent successfully");
      setTimer(60);
      setIsResendDisabled(true);
    },
    onError: (err) => {
      console.error("❌ Error resending OTP:", err);
      setError("Failed to resend OTP. Please try again.");
    },
  });

  // ✅ مؤقت العد التنازلي
  useEffect(() => {
    let interval;
    if (isResendDisabled) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsResendDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isResendDisabled]);

  // ✅ handle input change
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

  // ✅ handle submit (verify OTP)
  const handleSubmit = (e) => {
    e.preventDefault();
    const joinedOtp = otp.join("");

    if (joinedOtp.length !== length) {
      setError("Please enter all digits of the OTP.");
      return;
    }

    verifyOtpMutation({ code: joinedOtp, email: parentData.email });
  };

  // ✅ handle resend OTP
  const handleResend = () => {
    resendOtpMutation(parentData.email);
  };

  return (
    <AuthCard title={"Forgot Password"} backBtn>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-center text-xl font-semibold capitalize">
          Check your email
        </h2>
        <p className="text-center text-sm text-gray-500">
          We sent a reset code to {parentData.email}. Enter the {length}-digit
          code mentioned in the email.
        </p>

        {/* ✅ OTP Inputs */}
        <div className="flex justify-center max-w-sm mx-auto gap-2">
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
              className="w-10 h-10 text-center font-medium border border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 focus:ring-myGreen focus:border-myBlue-2 transition-all"
            />
          ))}
        </div>

        {/* ✅ عرض الخطأ */}
        <FormError
          errorMsg={
            error ||
            (isError
              ? apiError?.response?.data?.message ||
                "Invalid OTP, please try again."
              : "")
          }
        />

        {/* ✅ زر التحقق */}
        <FormBtn title={"Check"} loading={isPending} />

        {/* ✅ زر إعادة الإرسال */}
        <p className="text-sm text-gray-600 text-center">
          Haven’t got the email yet?{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={isResendDisabled || isResending}
            className={`text-blue-600 text-sm hover:underline inline-block cursor-pointer ${
              (isResendDisabled || isResending) &&
              "opacity-50 cursor-not-allowed"
            }`}
          >
            {isResending
              ? "Resending..."
              : isResendDisabled
              ? `Resend in ${timer}s`
              : "Resend email"}
          </button>
        </p>

        {/* ✅ عند النجاح في إعادة الإرسال */}
        {resendSuccess && (
          <p className="text-center text-green-600 text-sm">
            New OTP has been sent successfully!
          </p>
        )}
      </form>
    </AuthCard>
  );
};

export default OTP;
