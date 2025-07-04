import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthLayout } from "./signin/components/auth-layout";
import { GoogleButton } from "./signin/components/google-button";
import { AuthDivider } from "./signin/components/auth-divider";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { FiEye, FiEyeOff, FiLock, FiMail, FiUser } from "react-icons/fi";

// Define Zod schema for form validation
const signUpSchema = z
  .object({
    FirstName: z.string().min(1, "First name is required"),
    LastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    Password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    ConfirmPassword: z.string(),
    // terms: z.literal(true, {
    //   errorMap: () => ({ message: "You must accept the terms and conditions" }),
    // }),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    message: "Passwords don't match",
    path: ["ConfirmPassword"],
  });

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
    navigate("/verify-email");
  };

  const InputStyles =
    "h-[44px] placeholder:text-[#71717A] text-black !text-[16px] font-normal ring-0 outline-none shadow-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0";
  const ErrorStyles = "text-red-500 font-medium text-[12px]";
  return (
    <AuthLayout>
      <div className="space-y-6 sm:px-4">
        <div className="space-y-2 text-center">
          <img
            src="/LogoBlue.svg"
            alt="Logo Blue"
            className="lg:hidden m-auto mb-[32px]"
          />
          <h1 className="text-[34px] text-[#171717] font-bold">
            Create an account 👋
          </h1>
          <p className="text-[#71717A] text-[14px] font-normal">
            Please create using the form below.
          </p>
        </div>

        <GoogleButton text="Continue with Google" />

        <AuthDivider text="Create account with" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-[9px]">
              <label
                htmlFor="FirstName"
                className="text-[#09090B] !text-[14px] font-medium"
              >
                First Name
              </label>
              <div className="flex border border-[#E4E4E7] focus-within:border-[#A1A1AA] rounded-[6px] items-center">
                <div className="pl-[13px]">
                  <FiUser className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type="text"
                  id="FirstName"
                  placeholder="John"
                  {...register("FirstName")}
                  className={InputStyles}
                />
              </div>
              {errors.FirstName && (
                <span className={ErrorStyles}>{errors.FirstName.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-[9px]">
              <label
                htmlFor="LastName"
                className="text-[#09090B] !text-[14px] font-medium"
              >
                Last Name
              </label>
              <div className="flex border border-[#E4E4E7] focus-within:border-[#A1A1AA] rounded-[6px] items-center">
                <div className="pl-[13px]">
                  <FiUser className="h-5 w-5 text-muted-foreground" />
                </div>
                <Input
                  type="text"
                  id="LastName"
                  placeholder="Miles"
                  {...register("LastName")}
                  className={InputStyles}
                />
              </div>
              {errors.LastName && (
                <span className={ErrorStyles}>{errors.LastName.message}</span>
              )}
            </div>
          </div>

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
              <span className={ErrorStyles}>{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-[9px]">
            <label
              htmlFor="Password"
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
                id="Password"
                placeholder="*********"
                {...register("Password")}
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
            {errors.Password && (
              <span className={ErrorStyles}>{errors.Password.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-[9px]">
            <label
              htmlFor="ConfirmPassword"
              className="text-[#09090B] !text-[14px] font-medium"
            >
              Confirm Password
            </label>
            <div className="flex border border-[#E4E4E7] focus-within:border-[#A1A1AA] rounded-[6px] items-center">
              <div className="pl-[13px]">
                <FiLock className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                id="ConfirmPassword"
                placeholder="*********"
                {...register("ConfirmPassword")}
                className={InputStyles}
              />
              <Button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                variant={"ghost"}
                className="bg-none cursor-pointer border-none shadow-none"
              >
                {showConfirmPassword ? (
                  <FiEyeOff className="h-5 w-5" color="#71717A" />
                ) : (
                  <FiEye className="h-5 w-5" color="#71717A" />
                )}
              </Button>
            </div>
            {errors.ConfirmPassword && (
              <span className={ErrorStyles}>
                {errors.ConfirmPassword.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                // {...register("terms")}
                className="data-[state=checked]:bg-[var(--primary)] text-white data-[state=checked]:border-[var(--primary)]"
              />
              <label
                htmlFor="terms"
                className="text-[12px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Terms and Conditions.
              </label>
            </div>
            {/* {errors.terms && (
              <span className="text-red-500 font-medium text-[12px]">
                {errors.terms.message}
              </span>
            )} */}
          </div>

          <Button
            onClick={() => {}}
            type="submit"
            disabled={isLoading}
            className="w-full h-10 cursor-pointer bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90"
          >
            {isLoading ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <div className="text-center text-[#71717A] text-[12px] font-medium">
          Already have an account?{" "}
          <a href="/sign-in" className="text-[var(--primary)] hover:underline">
            Sign in
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
