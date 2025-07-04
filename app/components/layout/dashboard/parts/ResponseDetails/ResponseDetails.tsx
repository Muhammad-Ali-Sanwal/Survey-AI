import {
  ArrowLeft,
  MessageSquareIcon,
  SparklesIcon,
  TrendingUp,
  User,
} from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import ChatDetails from "./ChatDetails";

const ResponseDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row max-lg:gap-5 w-full">
      <div className="flex flex-col flex-1">
        <div className="border-b border-b-[#E0E0E0] flex gap-2 items-center py-[21px] pl-5 md:pl-[40px] lg:pl-[70px]">
          <ArrowLeft onClick={() => navigate(-1)} className="cursor-pointer" />
          <p className="text-[16px] font-semibold">Response Details</p>
        </div>
        <div className="mt-[45px] rounded-[10px] bg-[#F8F7FC] py-[28px] px-4 mx-5 md:mx-[40px] lg:mx-[70px]">
          <div className="flex items-center gap-1">
            <User color="#000000" width={20} height={20} />
            <p className="text-[16px] font-semibold">
              Respondent Information{" "}
              <span className="text-[12px] text-[#415FFF]">(John Smith)</span>
            </p>
          </div>
          <div className="mt-[40px] flex justify-between gap-4 flex-wrap">
            <div className="flex flex-col gap-2">
              <p className="text-[12px] font-semibold text-[#797979]">
                Date /Time
              </p>
              <p className="text-[12px] font-semibold text-[#252525]">
                12 May, 2025 - 14:32
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[12px] font-semibold text-[#797979]">
                Duration
              </p>
              <p className="text-[12px] font-semibold text-[#252525]">3m 45s</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[12px] font-semibold text-[#797979]">
                Completion
              </p>
              <p className="text-[12px] flex gap-1 items-center font-semibold text-[#252525]">
                <Progress value={100} className="w-[88px]" /> 100%
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[12px] font-semibold text-[#797979]">
                Sentiment
              </p>
              <p className="text-[12px] font-semibold text-[#176A43] bg-[#DCFCE7] px-[10px] py-[2px] rounded-[100px]">
                Positive
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[12px] font-semibold text-[#797979]">Type </p>
              <p className="text-[12px] flex items-center gap-2 font-semibold text-[#252525]">
                <MessageSquareIcon color="#2A2828" height={20} width={20} />
                Chat
              </p>
            </div>
          </div>
        </div>
        <div className="px-5 md:px-[40px] lg:px-[70px] mt-[27px] mb-5 flex justify-between items-center flex-wrap gap-2">
          <p className="text-[#3D3D3D] text-[16px] font-bold">
            Conversation Transcript
          </p>
          <div className="flex items-center hover:underline cursor-pointer text-[12px] text-[#1E42FF] gap-1">
            <p>View Analytics</p>
            <TrendingUp width={12} height={12} />
          </div>
        </div>
        <ChatDetails />
      </div>
      <div className="w-full lg:w-[350px] 2xl:w-[420px] border-l px-2 lg:px-[22px] py-[12px] flex flex-col items-center border-l-[#E0E0E0] bg-[#F7F7F7] min-h-screen">
        <Button className="mt-4">
          <SparklesIcon fill="#FDFDFD" /> AI-Powered Insights Panel
        </Button>
        <div className=" rounded-[10px] bg-[#F7F7F7] px-[28px] py-[23px]">
          <p className="my-[48px] text-[18px] max-lg:text-center font-bold">
            Pricing Satisfaction Survey
          </p>
          <div className="text-xs font-medium py-[24px]">
            🛑 Top 3 Complaints:
          </div>
          <ul className="text-xs text-[#797979]  bg-white mb-3 p-[22px] rounded-[10px]  space-y-6">
            <li>
              1. 38% of users feel pricing is not justified for the features
              offered.
            </li>
            <li>2. 26% mentioned slow page load times during peak hours.</li>
            <li>3. 19% faced issues navigating the account settings area.</li>
          </ul>

          <div className="text-xs  font-medium py-[24px]">
            ✅ Top 3 Liked Things:
          </div>
          <ul className="text-xs text-[#797979] rounded-[10px] bg-[white] p-[22px] space-y-6">
            <li>1. 52% praised the clean and modern user interface.</li>
            <li>2. 45% appreciated the easy onboarding process.</li>
            <li>3. 33% loved the AI assistance in form filling.</li>
          </ul>

          <div className="text-xs py-[24px] font-medium">
            ⚙️ Suggested Action:
          </div>
          <ul className="text-xs bg-[white] rounded-[10px] p-[22px] text-[#797979] list-disc space-y-6">
            <li>Reevaluate pricing structure or offer a basic free tier.</li>
            <li>Optimize performance during high-traffic times.</li>
            <li>Simplify navigation in the account settings area.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponseDetails;
