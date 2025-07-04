import { Input } from "~/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Button } from "~/components/ui/button";
import { DialogClose } from "~/components/ui/dialog";

const formSchema = z
  .object({
    CurrentPassword: z.string().min(1, "Current Password is required"),
    NewPassword: z.string().min(1, "New Password is required"),
    ConfirmPassword: z.string().min(1, "Confirm Password is required"),
  })
  .refine((data) => data.NewPassword === data.ConfirmPassword, {
    message: "Passwords do not match",
    path: ["ConfirmPassword"],
  });

const NewPassword = ({ closeModal }: { closeModal: () => void }) => {
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
    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex max-w-[320px] gap-5 md:w-[320px] m-auto flex-col"
    >
      <div>
        <label
          htmlFor="CurrentPassword"
          className="text-[#09090B] mb-[6px] !text-[14px] font-medium"
        >
          Current Password
        </label>
        <div className="flex border border-[#E4E4E7] focus-within:border-[#A1A1AA] rounded-[6px] items-center">
          <div className="pl-[13px]">
            <Lock color="#71717A" height={20} width={20} />
          </div>
          <Input
            type={showPassword ? "text" : "password"}
            id="CurrentPassword"
            placeholder="*********"
            {...register("CurrentPassword")}
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
        {errors.CurrentPassword && (
          <span className="text-red-500 font-medium text-[12px]">
            {errors.CurrentPassword.message as string}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="NewPassword"
          className="text-[#09090B] mb-[6px] !text-[14px] font-medium"
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

      <div>
        <label
          htmlFor="ConfirmPassword"
          className="text-[#09090B] mb-[6px] !text-[14px] font-medium"
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
      <Button
        type="submit"
        className="text-white mt-[25px] text-[14px] cursor-pointer bg-[#415FFF] font-medium rounded-[6px] hover:bg-blue-700 transition-all duration-200"
      >
        Change Password
      </Button>
    </form>
  );
};

export default NewPassword;
