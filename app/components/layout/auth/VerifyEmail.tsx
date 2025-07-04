import { AuthLayout } from "./signin/components/auth-layout";
import { MailOpen } from "lucide-react";

const VerifyEmail = () => {
  return (
    <div>
      <AuthLayout>
        <div className="flex flex-col gap-[25px] text-center justify-center items-center">
          <MailOpen size={24} color="#171717" />
          <p className="text-[#171717] text-[34px] font-bold">
            Check your inbox, please!
          </p>
          <p className="text-[#71717A] text-[14px] font-normal">
            Hey john miles, to start using surveyy.ai, we need to verify your
            email. We&nbsp;ve already sent out the verification link. Pease
            check it and confirm it&nbsp;s really you.
          </p>
          <p className="text-[#686868] text-[13px] font-medium">
            Did&nbsp;t get e-mail?{" "}
            <span className="text-[#1E42FF] cursor-pointer hover:underline text-[13px] font-medium">
              Send it again
            </span>
          </p>
        </div>
      </AuthLayout>
    </div>
  );
};

export default VerifyEmail;
