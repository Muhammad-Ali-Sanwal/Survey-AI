import { FiMail } from "react-icons/fi";
import { AuthLayout } from "../signin/components/auth-layout";
import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Submitted with values:", data);
    navigate("/verify-code");
  };

  const InputStyles =
    "h-[44px] placeholder:text-[#71717A] text-black !text-[16px] font-normal ring-0 outline-none shadow-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0";
  const navigate = useNavigate();
  return (
    <div>
      <AuthLayout>
        <div className="flex max-w-[320px] flex-col">
          <p className="text-[34px] text-center font-bold text-[#171717]">
            Forget Password
          </p>
          <p className="text-[14px] text-center font-normal text-[#71717A] mt-4 mb-[28px]">
            Enter your email address
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-[9px]">
              <label
                htmlFor="email"
                className="text-[#09090B] text-left !text-[14px] font-medium"
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

            <div className="flex gap-[24px] mt-[27px] items-center">
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
        </div>
      </AuthLayout>
    </div>
  );
};

export default ForgotPassword;
