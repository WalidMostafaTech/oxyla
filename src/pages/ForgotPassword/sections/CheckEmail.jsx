import AuthCard from "../../../components/form/AuthCard";
import MainInput from "../../../components/form/MainInput";
import FormBtn from "../../../components/form/FormBtn";
import FormError from "../../../components/form/FormError";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendOtp } from "../../../services/forgotPasswordServices";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

const CheckEmail = ({ goNext, setParentData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ Mutation to send OTP
  const { mutate, isPending, error } = useMutation({
    mutationFn: (email) => sendOtp(email),
    onSuccess: (res, email) => {
      // ✅ حفظ الإيميل من الـ input نفسه
      setParentData((prev) => ({ ...prev, email }));
      console.log("✅ OTP sent successfully:", res);
      goNext();
    },
    onError: (err) => {
      console.error("❌ Error sending OTP:", err);
    },
  });

  // ✅ Handle form submit
  const onSubmit = (data) => {
    mutate(data.email); // هنا بنمرر الإيميل للميوتشن
  };

  return (
    <AuthCard title={"Forgot Password"}>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <MainInput
          id={"email"}
          label={"Email / Phone"}
          placeholder="Email / Phone"
          register={register("email")}
          error={errors.email?.message}
        />

        <FormError errorMsg={error?.response?.data?.message} />

        <FormBtn title={"Continue"} loading={isPending} />
      </form>
    </AuthCard>
  );
};

export default CheckEmail;
