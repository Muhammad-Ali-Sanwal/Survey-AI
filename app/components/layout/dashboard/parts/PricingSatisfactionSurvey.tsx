import {
  Activity,
  ArrowLeft,
  Clock9,
  File,
  MessageSquare,
  TrendingUp,
  Users,
} from "lucide-react";
import Tabs from "./Tabs";
import SearchBar from "~/components/SearchBar";
import FilterDropdown from "./FilterDropDown";
import { useNavigate } from "react-router";
import Responses from "./Responses";
import AIInsights from "./AIInsights";
import { useState } from "react";
import TopBarMenu from "./TopBarMenu";

const PricingSatisfactionSurvey = () => {
  const [activeTab, setActiveTab] = useState("Responses");
  const navigate = useNavigate();

  const renderTabContent = () => {
    switch (activeTab) {
      case "Responses":
        return <Responses />;
      case "Key Insights":
        return <AIInsights />;
      default:
        return <Responses />;
    }
  };
  return (
    <div>
      <TopBarMenu />
      <div className="max-w-[1300px] mt-[150px] m-auto px-4 ">
        <div className="flex items-center gap-4 w-full">
          <ArrowLeft
            onClick={() => {
              navigate(-1);
            }}
          />
          <div className="flex flex-col gap-[6px] w-full">
            <p className="text-[20px] font-semibold ">
              Pricing Satisfaction Survey
            </p>

            <div className="flex justify-between flex-wrap gap-2 items-center w-full">
              <p className="text-[12px] font-medium text-[#797979]">
                Gathering insights on our latest product features and user
                experience.
              </p>
              <p
                className="text-[#1E42FF] gap-[2px] hover:underline cursor-pointer flex items-center text-[14px] font-medium"
                onClick={() =>
                  navigate("/all-surveys/pricingSurvay/detailed-report")
                }
              >
                <File height={14} width={14} /> Survey Detailed Report
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[40px] grid grid-cols-1 gap-[25px] min-sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="bg-[#F8F7FC] flex flex-col gap-[14px] rounded-[10px] p-[15px]">
            <div className="flex justify-between">
              <p className="text-xs font-normal text-[#252525]">Total Sent </p>
              <MessageSquare
                strokeWidth={2}
                color="white"
                className="bg-[#415FFF] rounded-full py-[6px]"
              />
            </div>
            <p className="text-[#252525] text-[18px] font-semibold">187</p>
          </div>
          <div className="bg-[#F8F7FC] flex flex-col gap-[14px] rounded-[10px] p-[15px]">
            <div className="flex justify-between">
              <p className="text-xs font-normal text-[#252525]">
                Total Responses{" "}
              </p>
              <Users
                strokeWidth={2}
                color="white"
                className="bg-[#3CD856] rounded-full py-[6px]"
              />
            </div>
            <p className="text-[#252525] text-[18px] font-semibold">142</p>
          </div>
          <div className="bg-[#F8F7FC] flex flex-col gap-[14px] rounded-[10px] p-[15px]">
            <div className="flex justify-between">
              <p className="text-xs font-normal text-[#252525]">
                Completion Rate
              </p>
              <TrendingUp
                strokeWidth={2}
                color="white"
                className="bg-[#FA5A7D] rounded-full py-[6px]"
              />
            </div>
            <p className="text-[#252525] text-[18px] font-semibold">89%</p>
          </div>
          <div className="bg-[#F8F7FC] flex flex-col gap-[14px] rounded-[10px] p-[15px]">
            <div className="flex justify-between">
              <p className="text-xs font-normal text-[#252525]">
                Avg. Completion Time
              </p>
              <Clock9
                strokeWidth={2}
                color="white"
                className="bg-[#FF947A] rounded-full py-[6px]"
              />
            </div>
            <p className="text-[#252525] text-[18px] font-semibold">4m 32s</p>
          </div>
          <div className="bg-[#F8F7FC] flex flex-col gap-[14px] rounded-[10px] p-[15px]">
            <div className="flex justify-between">
              <p className="text-xs font-normal text-[#252525]">
                Response Rate
              </p>
              <Activity
                strokeWidth={2}
                color="white"
                className="bg-[#BF83FF] rounded-full py-[6px]"
              />
            </div>
            <p className="text-[#252525] text-[18px] font-semibold">76%</p>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap my-[36px] justify-between items-center gap-[32px]">
            <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex items-center gap-[32px]">
              <SearchBar />
              <FilterDropdown />
            </div>
          </div>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default PricingSatisfactionSurvey;
