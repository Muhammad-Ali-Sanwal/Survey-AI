import { useForm } from "react-hook-form";
import { AuthLayout } from "../signin/components/auth-layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { z } from "zod";
import { Input } from "~/components/ui/input";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Lock } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useNavigate } from "react-router";
const formSchema = z
  .object({
    NewPassword: z.string().min(1, "New Password is required"),
    ConfirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.NewPassword === data.ConfirmPassword, {
    message: "Passwords do not match",
    path: ["ConfirmPassword"],
  });

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/reset-successfull");
  };
  const navigate = useNavigate();
  return (
    <div>
      <AuthLayout>
        <p className="text-[34px] text-center font-bold text-[#171717]">
          Reset Password
        </p>
        <p className="text-[14px] text-center font-normal text-[#71717A] mt-4 mb-[28px]">
          Create a new password
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex max-w-[320px] gap-5 md:w-[320px] m-auto flex-col"
        >
          <div className="flex flex-col gap-[8px]">
            <label
              htmlFor="NewPassword"
              className="text-[#09090B] !text-[14px] font-medium"
            >
              New Password
            </label>
            <div className="flex border border-[#E4E4E7] focus-within:border-[#A1A1AA] rounded-[6px] items-center">
              <div className="pl-[13px]">
                <Lock color="#71717A" height={20} width={20} />
              </div>
              <Input
                type={showPassword ? "text" : "password"}
                id="NewPassword"
                placeholder="*********"
                {...register("NewPassword")}
                className="h-[44px] placeholder:text-[#71717A] text-black !text-[16px] font-normal ring-0 outline-none shadow-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="pr-[15px]"
              >
                {showPassword ? (
                  <VscEyeClosed color="#71717A" />
                ) : (
                  <VscEye color="#71717A" />
                )}
              </button>
            </div>
            {errors.NewPassword && (
              <span className="text-red-500 font-medium text-[12px]">
                {errors.NewPassword.message as string}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-[8px]">
            <label
              htmlFor="ConfirmPassword"
              className="text-[#09090B] !text-[14px] font-medium"
            >
              Confirm Password
            </label>
            <div className="flex border border-[#E4E4E7] focus-within:border-[#A1A1AA] rounded-[6px] items-center">
              <div className="pl-[13px]">
                <Lock color="#71717A" height={20} width={20} />
              </div>
              <Input
                type={showPassword ? "text" : "password"}
                id="ConfirmPassword"
                placeholder="*********"
                {...register("ConfirmPassword")}
                className="h-[44px] placeholder:text-[#71717A] text-black !text-[16px] font-normal ring-0 outline-none shadow-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="pr-[15px]"
              >
                {showPassword ? (
                  <VscEyeClosed color="#71717A" />
                ) : (
                  <VscEye color="#71717A" />
                )}
              </button>
            </div>
            {errors.ConfirmPassword && (
              <span className="text-red-500 font-medium text-[12px]">
                {errors.ConfirmPassword.message as string}
              </span>
            )}
          </div>
          <div className="flex gap-[24px] mt-[7px] items-center">
            <Button
              onClick={() => navigate("/sign-in")}
              type="button"
              variant={"ghost"}
              className="bg-white h-[40px] w-[150px] shadow-sm"
            >
              Cancel
            </Button>
            <Button type="submit" className="w-[150px] h-[40px]">
              Submit
            </Button>
          </div>
        </form>
      </AuthLayout>
    </div>
  );
};

export default NewPassword;
