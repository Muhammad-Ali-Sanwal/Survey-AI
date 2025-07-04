import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";

const CreateSurveyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full relative h-[95vh] flex flex-col">
      <div className="h-[80px] flex items-center border-b border-b-[#E0E0E0] justify-between px-4 sm:px-8 md:px-[60px] relative">
        <div className="absolute max-lg:hidden left-1/2 transform -translate-x-1/2">
          <img
            src="/images/GoogleIcon.svg"
            alt="GoogleIcon"
            className="w-[70px] sm:w-[90px] md:w-[100px] h-auto"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <p className="text-[22px] text-[#71717A] font-semibold mb-5">
          Welcome👋🏻
        </p>
        <p className="text-[40px] text-center text-[#252525] font-semibold mb-[6px]">
          Pricing Satisfaction Survey
        </p>
        <p className="text-[14px] text-[#252525] font-normal mb-[24px]">
          🚀 Quick, Easy & 100% Secure
        </p>
        <p className="text-[12px] text-[#565656] font-normal my-[25px]">
          How would you like to complete this survey?
        </p>

        <Button
          className="mb-[23px] w-[290px] h-[48px] font-semibold border border-[#415FFF] text-[#415FFF] hover:text-[#415FFF] cursor-pointer"
          variant={"outline"}
          onClick={() => navigate("/survey/chat")}
        >
          Fill Out via Chat
        </Button>
        <Button
          className="w-[290px] h-[48px] font-semibold cursor-pointer"
          onClick={() => navigate("/survey/call")}
        >
          Take Survey by Call
        </Button>
      </div>
      <p className="text-[14px] absolute bottom-8 left-8 text-[#252525] text-normal">
        Powered by survey.ai
      </p>
    </div>
  );
};

export default CreateSurveyPage;
