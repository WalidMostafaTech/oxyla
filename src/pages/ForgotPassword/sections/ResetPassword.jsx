import AuthCard from "../../../components/form/AuthCard";
import MainInput from "../../../components/form/MainInput";
import FormBtn from "../../../components/form/FormBtn";
import FormError from "../../../components/form/FormError";

const ResetPassword = () => {
  return (
    <AuthCard title={"Forgot Password"}>
      <form className="space-y-4">
        <MainInput id={"password"} label={"Password"} placeholder="Password" />

        <MainInput
          id={"confirm_password"}
          label={"Confirm Password"}
          type="password"
          placeholder="Confirm Password"
        />

        <FormBtn title="Send OTP" />

        <FormError errorMsg="" />
      </form>
    </AuthCard>
  );
};

export default ResetPassword;
