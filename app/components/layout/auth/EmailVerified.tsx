import { CircleCheckBig } from "lucide-react";
import { AuthLayout } from "./signin/components/auth-layout";
import { Button } from "~/components/ui/button";
import { useNavigate } from "react-router";

const EmailVerified = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AuthLayout>
        <div className="flex flex-col text-center justify-center items-center gap-[18px]">
          <CircleCheckBig size={22} color="#171717" />
          <p className="text-[#171717] text-[34px] font-bold">
            Email is Verified!{" "}
          </p>
          <p className="text-[#71717A] text-[14px] font-normal">
            Your email johnmiles@example.com has been successfully verified. you
            can now go back to the login page to access the platform{" "}
          </p>
          <Button onClick={() => navigate("/lets-start")} className="w-full">
            Let&apos;s Started
          </Button>
        </div>
      </AuthLayout>
    </div>
  );
};

export default EmailVerified;
