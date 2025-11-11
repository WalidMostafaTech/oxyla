import AuthCard from "../../../components/form/AuthCard";
import MainInput from "../../../components/form/MainInput";
import FormBtn from "../../../components/form/FormBtn";
import FormError from "../../../components/form/FormError";

const CheckEmail = ({ goNext, setParentData }) => {
  return (
    <AuthCard title={"Forgot Password"}>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          goNext();
        }}
      >
        <MainInput
          id={"email_phone"}
          label={"Email / Phone"}
          placeholder="Email / Phone"
        />

        <FormBtn title="Send OTP" />

        <FormError errorMsg="" />
      </form>
    </AuthCard>
  );
};

export default CheckEmail;
