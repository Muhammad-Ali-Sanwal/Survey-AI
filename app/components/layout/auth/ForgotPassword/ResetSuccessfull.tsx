import { AuthLayout } from "../signin/components/auth-layout";
import { Check } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
const ResetSuccessfull = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AuthLayout>
        <div className="bg-[#415FFF0D] px-[70px] py-[100px] rounded-md flex flex-col justify-center items-center">
          <Check
            scale={25}
            color="white"
            strokeWidth={3}
            className="bg-[#1E42FF] p-3 h-[72px] w-[72px] rounded-full"
          />
          <p className="mt-[30px] text-[#808080] text-[16px] font-normal">
            Your Password has been reset
          </p>
          <p className="text-[#2A2020] -mt-2 text-[34px] font-semibold">
            Successfully
          </p>
          <Button
            className="h-[40px] w-[165px] mt-[35px]"
            onClick={() => navigate("/sign-in")}
          >
            Go to Login
          </Button>
        </div>
      </AuthLayout>
    </div>
  );
};

export default ResetSuccessfull;
