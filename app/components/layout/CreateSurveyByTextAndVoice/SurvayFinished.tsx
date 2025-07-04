import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

const SurvayFinished = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[80px] fixed top-0 left-0 right-0 flex items-center border-b border-b-[#E0E0E0] justify-between px-4 sm:px-8 md:px-[60px]">
        <div className="flex gap-2 sm:gap-4 items-center">
          <ChevronLeft
            color="#71717A"
            size={20}
            className="cursor-pointer sm:size-[25px]"
            onClick={() => navigate(-1)}
          />
          <p className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#252525]">
            Customer Satisfaction Survey
          </p>
        </div>

        <div className="absolute max-lg:hidden left-1/2 transform -translate-x-1/2">
          <img
            src="/images/GoogleIcon.svg"
            alt="GoogleIcon"
            className="w-[70px] sm:w-[90px] md:w-[100px] h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[calc(100vh-80px)]">
        <p className="text-[15px] text-center md:text-[22px] text-[#71717A] font-semibold">
          Thank you 🎉
        </p>
        <p className="text-[40px] text-center text-[#252525] mt-[22px] font-semibold">
          Your input is valuable to us
        </p>
        <p className="text-[15px] text-center text-[#565656] mt-[22px] font-normal">
          Thanks for sharing your thoughts. It really helps!
        </p>
      </div>
    </div>
  );
};

export default SurvayFinished;
