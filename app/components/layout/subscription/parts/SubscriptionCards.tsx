import { useState } from "react";
import { subscriptionPlans } from "./subscriptionPlans";
import type { ISubscriptionPlans } from "./subscriptionPlans";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";

const SubscriptionCard = () => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(1);
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-wrap mt-[160px] gap-4 mb-5 justify-between items-center">
        <div className="flex flex-col">
          <p className="text-[#282828] text-[22px] font-medium">
            Billing & Subscription
          </p>
          <p className="text-[#71717a] text-[15px] font-normal">
            Keep track of your subscription details, updates your billing
            information and control your payment
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

      <div className="mt-[10px] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-[30px] lg:gap-[40px]">
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
                    ? "bg-[#1E42FF] text-white transition-all duration-100 scale-[1.01]"
                    : "border-[#E0E0E0]"
                }`}
              >
                <p className="text-[24px] font-bold">{item.name}</p>
                <p
                  className={`text-[13px] mt-2 mb-5 font-medium  ${
                    selectedPlan === CardIndex ? "text-white" : "text-[#86868E]"
                  }`}
                >
                  {surveysPerUser} Surveys/ Per User
                </p>
                <p
                  className={`text-[20px] mb-[26px] font-bold  ${
                    selectedPlan === CardIndex
                      ? "text-[#FFFFFFB2]"
                      : "text-[#1A1A1AB2]"
                  }`}
                >
                  ${price}
                  <span className="font-normal">.00</span>
                </p>
                <p
                  className={`text-[13px] font-medium ${
                    selectedPlan === CardIndex
                      ? "text-[#FFFFFF]"
                      : "text-[#86868E]"
                  }`}
                >
                  (Per Survey)
                </p>
                <p
                  className={`text-[13px] mb-[26px] font-medium ${
                    selectedPlan === CardIndex
                      ? "text-[#FFFFFF]"
                      : "text-[#86868E]"
                  }`}
                >
                  {responseCheck} Responses check
                </p>
                <p
                  className={`text-[16px] mb-[25px] font-semimedium ${
                    selectedPlan === CardIndex
                      ? "text-[#FFFFFF]"
                      : "text-[#252525]"
                  }`}
                >
                  Trusted by 1,000+
                </p>

                <Button
                  onClick={() => {
                    navigate("/payment");
                  }}
                  className={`${
                    item.isCurrent
                      ? " hover:bg-gray-200 text-[14px] bg-[#F4F4F5] font-normal  rounded-[5px] py-[10px]"
                      : "text-white py-[10px] text-[14px] hover:bg-blue-500 bg-[#415FFF] font-normal"
                  } w-full cursor-pointer  ${
                    selectedPlan === CardIndex
                      ? "text-[#1E42FF] bg-[white] hover:bg-[#f7f6f6ec]"
                      : ""
                  }
                  ${item.isCurrent && "text-[#3D3D3D]"}
                    `}
                >
                  {item.isCurrent ? "Current Plan" : "Upgrade Plan"}
                </Button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default SubscriptionCard;
