import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import EmailInputSection from "./EmailInputSection";
import CodeVerificationSection from "./CodeVerificationSection";
import NewPassword from "./NewPassword";
import { ChevronRight } from "lucide-react";

const Model = () => {
  const [step, setStep] = useState<"email" | "code" | "password">("email");
  const [open, setOpen] = useState(false);

  const SubmitEmail = (data: { email: string }) => {
    console.log(data);
    setStep("code");
  };

  const SubmitCode = (data: { code: string }) => {
    console.log(data);
    setStep("password");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex mb-12 w-full justify-between cursor-pointer m-auto mt-[10px] border border-[#E0E0E0] rounded-[10px] p-4">
          <span className="text-[16px] font-semibold ">Change Password</span>
          <ChevronRight />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white px-0">
        <DialogHeader className="pl-[34px]">
          <DialogTitle className="text-[18px] font-medium text-[#292D32]">
            {step === "email" && "Change Password"}
            {step === "code" && "Check your email"}
            {step === "password" && "Change Password"}
          </DialogTitle>
          <p className="text-[#A9ACB4] -mt-2 font-medium text-[15px]">
            {step === "email" && "Please enter your email"}
            {step === "code" &&
              "Please enter the code that we sent to your email"}
            {step === "password" &&
              "Protect your account with a strong password"}
          </p>
        </DialogHeader>
        <div className="border-t border-t-[#CBD0DC] w-full mt-[14px]" />
        <div className="mt-[30px] mb-[40px]">
          {step === "email" && <EmailInputSection onSubmit={SubmitEmail} />}
          {step === "code" && <CodeVerificationSection onSubmit={SubmitCode} />}
          {step === "password" && (
            <NewPassword closeModal={() => setOpen(false)} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Model;
