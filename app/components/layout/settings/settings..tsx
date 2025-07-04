import { useState } from "react";
import ProfilePicture from "./parts/ProfilePic.svg";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import Model from "./parts/changePassword/Model";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import TopBarMenu from "../dashboard/parts/TopBarMenu";

interface TSettings {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const SettingsPage = () => {
  const LabelStyles = "text-[#09090B] mb-1 !text-[14px] font-medium";
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSettings>({
    mode: "onSubmit",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data: TSettings) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <div>
        <TopBarMenu />
      </div>
      <div className="max-w-[900px] mt-[150px] px-4 m-auto">
        <div className="flex  flex-col text-black border border-[#E0E0E0] rounded-md p-4 sm:p-6 mt-[70px]">
          <p className="text-[20px] font-semibold">Account</p>
          <p className="text-[#8E919F] text-[16px] font-normal mt-[8px]">
            Real-time information and activities of your account.
          </p>
          <span className="border-t border-t-[#E4E4E7] my-[24px]" />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between flex-wrap gap-8 items-center">
              <div className="flex gap-[24px] items-center">
                <img
                  src={ProfilePicture}
                  alt="Profile Pic "
                  height={90}
                  width={90}
                  className="w-[90px] h-[90px]"
                />
                <div className="flex flex-col">
                  <p className="text-[16px] font-medium">Profile picture</p>
                  <p className="text-[#00000080] text-[16px] font-normal">
                    PNG, JPEG under 1MB
                  </p>
                </div>
              </div>
              <div className="flex gap-[15px]">
                <div>
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-[#8E919F] p-[10px] text-[13px] cursor-pointer font-semibold rounded-[6px] border border-[#EBEBEB] hover:bg-gray-100 transition-all duration-200"
                    onClick={() =>
                      document.getElementById("imageInput")?.click()
                    }
                  >
                    Upload new picture
                  </Button>

                  <input
                    type="file"
                    id="imageInput"
                    accept="image/png, image/jpeg"
                    style={{ display: "none" }}
                  />
                </div>
                <Button
                  type="submit"
                  className="text-white px-[10px] text-[13px] cursor-pointer bg-[#415FFF] font-semibold rounded-[6px]  hover:bg-blue-700 transition-all duration-200"
                >
                  Save
                </Button>
              </div>
            </div>

            <div className="flex flex-col mt-[10px] gap-[20px] flex-wrap">
              <div className="flex gap-[30px] flex-col md:flex-row flex-wrap">
                <div className="flex gap-[25px]">
                  <div className="flex flex-1 flex-col">
                    <label htmlFor="firstName" className={LabelStyles}>
                      First Name
                    </label>
                    <Input
                      placeholder="John"
                      type="text"
                      id="firstName"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                      className="h-[44px] border placeholder:text-[#71717A] text-black border-[#E4E4E7] !text-[16px] font-normal ring-0 outline-none shadow-none focus:border-[#A1A1AA] focus:ring-0 focus:outline-none focus-visible:ring-0"
                    />
                    {errors.firstName?.message && (
                      <span className="text-red-500 font-medium text-[10px]">
                        {errors.firstName.message as string}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label htmlFor="lastName" className={LabelStyles}>
                      Last Name
                    </label>
                    <Input
                      placeholder="Miles"
                      type="text"
                      id="lastName"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                      className="h-[44px] border placeholder:text-[#71717A] text-black border-[#E4E4E7] !text-[16px] font-normal ring-0 outline-none shadow-none focus:border-[#A1A1AA] focus:ring-0 focus:outline-none focus-visible:ring-0"
                    />
                    {errors.lastName?.message && (
                      <span className="text-red-500 font-medium text-[10px]">
                        {errors.lastName.message as string}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <label htmlFor="Password" className={`${LabelStyles}`}>
                    Password
                  </label>
                  <div className="flex focus-within:border-[#A1A1AA] border pr-[12px] border-[#E4E4E7] items-center rounded-md">
                    <Input
                      placeholder="*********"
                      type={showPassword ? "text" : "password"}
                      id="Password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="h-[40px] border-none placeholder:text-[#71717A] text-black !text-[16px] font-normal ring-0 outline-none shadow-none focus:ring-0 focus:outline-none focus-visible:ring-0"
                    />
                    <button
                      type="button"
                      className="cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <VscEyeClosed color="#A1A1AA" />
                      ) : (
                        <VscEye color="#A1A1AA" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <span className="text-red-500 font-medium text-[10px]">
                      {errors.password.message as string}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <p className="text-[20px] font-semibold">Contact Email</p>
                <p className="text-[#8E919F] text-[16px] font-normal">
                  Manage your accounts email address for the invoices.
                </p>
              </div>

              <div className="max-w-[320px]">
                <label htmlFor="email" className={LabelStyles}>
                  Email
                </label>
                <div className="flex border border-[#E4E4E7] focus-within:border-[#A1A1AA] rounded-[6px] items-center">
                  <div className="pl-[13px]">
                    <Mail color="#71717A" />
                  </div>
                  <Input
                    type="email"
                    id="email"
                    placeholder="gergphilip@outlook.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className="h-[44px] placeholder:text-[#71717A] text-black !text-[16px] font-normal ring-0 outline-none shadow-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0"
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 font-medium text-[10px]">
                    {errors.email.message as string}
                  </span>
                )}
              </div>
            </div>
          </form>
        </div>
        <Model />
      </div>
    </div>
  );
};

export default SettingsPage;
