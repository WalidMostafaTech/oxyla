import { useState } from "react";
import CheckEmail from "./sections/CheckEmail";
import ResetPassword from "./sections/ResetPassword";
import StepProgress from "../../components/form/StepProgress";
import OTP from "./sections/OTP";

const ForgotPassword = () => {
  const steps = [
    {
      title: "Check Email",
      subtitle: "We have sent a password reset link to your email address.",
    },
    {
      title: "Enter OTP",
      subtitle: "We have sent a One-Time Password (OTP) to your email address.",
    },
    {
      title: "Reset Password",
      subtitle: "Please enter your new password below.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [parentData, setParentData] = useState({
    email: "",
    otp: "",
    password: "",
  });

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section className="container pagePadding space-y-4">
      <StepProgress steps={steps} currentIndex={currentIndex} />

      {currentIndex === 0 && (
        <CheckEmail goNext={handleNext} setParentData={setParentData} />
      )}
      {currentIndex === 1 && (
        <OTP
          goNext={handleNext}
          parentData={parentData}
          setParentData={setParentData}
        />
      )}
      {currentIndex === 2 && (
        <ResetPassword parentData={parentData} setParentData={setParentData} />
      )}
    </section>
  );
};

export default ForgotPassword;
