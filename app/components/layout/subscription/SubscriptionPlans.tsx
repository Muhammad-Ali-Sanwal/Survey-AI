import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";
import {
  subscriptionPlans,
  type ISubscriptionPlans,
} from "./parts/subscriptionPlans";
import TopBarMenu from "../dashboard/parts/TopBarMenu";

const SubscriptionPalnsPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(1);
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full">
      <TopBarMenu />
      <div className="flex flex-col px-[80px] gap-[90px] mt-[145px]">
        <div className="flex flex-wrap  gap-4 mb-5 justify-between items-center">
          <div className="flex flex-col">
            <p className="text-[#252525] text-[32px] font-semibold">
              You&apos;re Almost There! 🚀
            </p>
            <p className="text-[#565656] mt-3 text-[15px] font-normal">
              Choose a plan to start creating smarter, faster — powered by AI.
            </p>
          </div>
          <div className="border border-[#E4E4E7] rounded-[6px] py-[2px] px-[4px] flex gap-[5px]">
            <Button
              variant="ghost"
              className={`${
                !isYearly ? "bg-[#F4F4F5]" : "text-[#334155]"
              } cursor-pointer px-[14px] py-[6px]`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </Button>
            <Button
              variant="ghost"
              className={`${
                isYearly ? "bg-[#F4F4F5]" : "text-[#334155]"
              } cursor-pointer px-[14px] py-[6px]`}
              onClick={() => setIsYearly(true)}
            >
              Yearly
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[32px] lg:gap-[40px]">
          {subscriptionPlans.map(
            (item: ISubscriptionPlans, CardIndex: number) => {
              const price = isYearly ? item.yearlyPrice : item.monthlyPrice;
              const surveysPerUser = isYearly
                ? item.yearlySurveysPerUser
                : item.monthlySurveysPerUser;
              const responseCheck = isYearly
                ? item.yearlyResponsesCheck
                : item.monthlyResponsesCheck;

              return (
                <div
                  key={CardIndex}
                  onClick={() => setSelectedPlan(CardIndex)}
                  className={`flex-1 cursor-pointer border flex flex-col justify-center items-center rounded-[10px] pt-[32px] px-[24px] pb-[17px] ${
                    selectedPlan === CardIndex
                      ? "bg-[#F8F8F8] border-2 border-[#1E42FF] rounded-[10px] transition-all duration-100 scale-[1.01]"
                      : " border border-[#E0E0E0] rounded-[10px]"
                  }`}
                >
                  <p className="text-[24px] font-bold">{item.name}</p>
                  <p
                    className={`text-[15px] mt-2 mb-5 font-medium text-[#86868E]`}
                  >
                    {surveysPerUser} Surveys/ Per User
                  </p>
                  <p
                    className={`text-[20px] mb-[26px] font-bold text-[#1A1A1AB2]`}
                  >
                    ${price}
                    <span className="font-normal">.00</span>
                  </p>
                  <p className={`text-[13px] font-medium text-[#86868E]`}>
                    (Per Survey)
                  </p>
                  <p
                    className={`text-[13px] mb-[26px] font-medium text-[#86868E]`}
                  >
                    {responseCheck} Responses check
                  </p>
                  <p
                    className={`text-[16px] mb-[25px] font-semimedium text-[#252525]`}
                  >
                    Trusted by 1,000+
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div className="flex justify-center md:px-[50px] my-[32px] md:justify-between items-center flex-wrap gap-4">
        <p className="text-[#252525] max-md:hidden text-[14px] font-normal">
          Powered by survey.ai
        </p>
        <Button
          className="w-[200px] h-[48px] "
          onClick={() => {
            navigate("/payment");
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionPalnsPage;
