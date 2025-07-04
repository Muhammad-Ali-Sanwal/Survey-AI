import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import SurveyByText from "~/components/layout/CreateSurveyByTextAndVoice/SurveyByText";

const SurveyViaChat = () => {
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => setShowLoader(false), 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (showLoader) {
  //   return (
  //     <div className="h-screen flex justify-center items-center flex-col">
  //       <p className="text-[#252525] font-normal text-[16px] mb-3">
  //         Powered by survey.ai
  //       </p>
  //       <div className="w-[235px] h-[13px] bg-[#D9D9D9] rounded-full relative overflow-hidden">
  //         <div className="h-full bg-[#415FFF] rounded-full animate-fillBar"></div>
  //       </div>
  //     </div>
  //   );
  // }

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
      <div className="flex justify-center items-center h-[calc(100vh-80px)]">
        <SurveyByText />
      </div>
    </div>
  );
};

export default SurveyViaChat;
