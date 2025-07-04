import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthLayout } from "./components/auth-layout";
import { GoogleButton } from "./components/google-button";
import { AuthDivider } from "./components/auth-divider";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "~/components/ui/input";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";
import { useNavigate } from "react-router";

const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type SignInFormData = z.infer<typeof signInSchema>;

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const [email, password] = watch(["email", "password"]);

  useEffect(() => {
    if (email) trigger("email");
  }, [email, trigger]);

  useEffect(() => {
    if (password) trigger("password");
  }, [password, trigger]);

  const onSubmit = (data: SignInFormData) => {
    console.log("Form submitted:", data);
    navigate("/lets-start");
  };

  const InputStyles =
    "h-[44px] placeholder:text-[#71717A] text-black !text-[16px] font-normal ring-0 outline-none shadow-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0";
  return (
    <AuthLayout>
      <div className="sm:px-4 ">
        <div className="text-center">
          <img
            src="/LogoBlue.svg"
            alt="Logo Blue"
            className="lg:hidden m-auto mb-[32px]"
          />
          <h1 className="text-[34px] font-bold text-[#171717]">Login</h1>
          <p className="text-[#71717A] mt-[10px] mb-5 text-[14px] font-normal">
            Welcome back! Please enter your details below.
          </p>
        </div>

        <GoogleButton text="Continue with Google" />

        <AuthDivider text="Login with email" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-[9px]">
              <label
                htmlFor="email"
                className="text-[#09090B] !text-[14px] font-medium"
              >
                Email
              </label>
              <div className="flex border border-[#E4E4E7] focus-within:border-[#A1A1AA] rounded-[6px] items-center">
                <div className="pl-[13px]">
                  <FiMail className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type="text"
                  id="email"
                  placeholder="johnmiles@example.com"
                  {...register("email")}
                  className={InputStyles}
                />
              </div>
              {errors.email && (
                <span className="text-red-500 font-medium text-[12px]">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-[9px]">
              <label
                htmlFor="password"
                className="text-[#09090B] !text-[14px] font-medium"
              >
                Password
              </label>
              <div className="flex border border-[#E4E4E7] focus-within:border-[#A1A1AA] rounded-[6px] items-center">
                <div className="pl-[13px]">
                  <FiLock className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="*********"
                  {...register("password")}
                  className={InputStyles}
                />
                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  variant={"ghost"}
                  className="bg-none cursor-pointer border-none shadow-none"
                >
                  {showPassword ? (
                    <FiEyeOff className="h-5 w-5" color="#71717A" />
                  ) : (
                    <FiEye className="h-5 w-5" color="#71717A" />
                  )}
                </Button>
              </div>
              {errors.password && (
                <span className="text-red-500 font-medium text-[12px]">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2 items-center">
              <Checkbox
                id="remember"
                className="data-[state=checked]:bg-[var(--primary)] text-white data-[state=checked]:border-[var(--primary)]"
              />
              <label
                htmlFor="remember"
                className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <a
              href="/forgot-password"
              className="text-[11px] underline font-medium text-[var(--primary)] hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            className="w-full h-10 text-sm cursor-pointer text-white bg-[var(--primary)] hover:bg-[var(--primary)]/90"
          >
            Login
          </Button>
        </form>

        <div className="text-center mt-5 text-[#71717A] text-[12px] font-medium">
          Not registered yet?{" "}
          <a href="/sign-up" className="text-[var(--primary)] hover:underline">
            Create an Account
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
