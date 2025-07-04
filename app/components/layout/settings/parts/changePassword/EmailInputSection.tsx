import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
});

type EmailInputSectionProps = {
  onSubmit: (data: { email: string }) => void;
};

const EmailInputSection = ({ onSubmit }: EmailInputSectionProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: zodResolver(formSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex max-w-[320px] md:w-[320px] m-auto flex-col"
    >
      <div>
        <label
          htmlFor="email"
          className="text-[#09090B] mb-[6px] !text-[14px] font-medium"
        >
          Email
        </label>
        <div className="flex border border-[#E4E4E7] focus-within:border-[#A1A1AA] rounded-[6px] items-center">
          <div className="pl-[13px]">
            <Mail color="#71717A" />
          </div>
          <Input
            type="text"
            id="email"
            placeholder="gergphilip@outlook.com"
            {...register("email")}
            className="h-[44px] placeholder:text-[#71717A] text-black !text-[16px] font-normal ring-0 outline-none shadow-none border-none focus:ring-0 focus:outline-none focus-visible:ring-0"
          />
        </div>
        {errors.email && (
          <span className="text-red-500 font-medium text-[12px]">
            {errors.email.message as string}
          </span>
        )}
      </div>

      <Button
        type="submit"
        className="text-white mt-[50px] text-[14px] cursor-pointer bg-[#415FFF] font-medium rounded-[6px] hover:bg-blue-700 transition-all duration-200"
      >
        Get Code
      </Button>
    </form>
  );
};

export default EmailInputSection;
