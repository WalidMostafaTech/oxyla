import AuthCard from "../../components/form/AuthCard";
import MainInput from "../../components/form/MainInput";
import FormBtn from "../../components/form/FormBtn";
import FormError from "../../components/form/FormError";
import googleIcon from "../../assets/icons/google-icon.png";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <section className="container pagePadding">
      <AuthCard title={"sign in"}>
        <form className="space-y-4">
          <MainInput
            id={"email_phone"}
            label={"Email / Phone"}
            placeholder="Email / Phone"
          />

          <MainInput
            id={"password"}
            label={"Password"}
            type="password"
            placeholder="Password"
          />

          <Link
            to="/forgot-password"
            className="text-blue-600 text-sm hover:underline inline-block"
          >
            Forgot Password?
          </Link>

          <FormBtn title="Sign in" />

          <div className="divider">OR</div>

          <button className="w-full border border-gray-300 rounded-lg flex items-center justify-center gap-4 py-2 cursor-pointer hover:bg-gray-100 transition">
            <img src={googleIcon} alt="google icon" />
            <span>Sign in with Google</span>
          </button>

          <p className="text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 text-sm hover:underline inline-block"
            >
              Sign up
            </Link>
          </p>

          <FormError errorMsg="" />
        </form>
      </AuthCard>
    </section>
  );
};

export default Signin;
