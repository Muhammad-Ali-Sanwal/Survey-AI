import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";

import { ArrowLeft, ArrowRight, CreditCard, Shield, Zap } from "lucide-react";
import SurveyBuilderLayout from "./Layout";
import {
  subscriptionPlans,
  type ISubscriptionPlans,
} from "../../subscription/parts/subscriptionPlans";
import { useForm } from "react-hook-form";

const StepFive = ({ nextStep, prevStep, step }: any) => {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(1);
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const HandleSubmitStepFive = () => {
    const selectedPlanData = subscriptionPlans[selectedPlan!];
    console.log("Selected Subscription Plan:", selectedPlanData);
    navigate("/payment");
  };
  return (
    <SurveyBuilderLayout
      title="Activate Your Survey"
      description="Choose a plan to activate your survey and start collecting responses. Your survey link will be generated after payment."
      imgSrc="/images/ActivateSurvey.svg"
      ExcludeSkipButton
      currentStep={step}
    >
      <div className="pt-4 md:mt-[90px] px-4 sm:px-12 lg:px-0 lg:pr-4 lg:w-[80%]">
        <form onSubmit={handleSubmit(HandleSubmitStepFive)}>
          <div className="flex justify-between max-sm:flex-wrap gap-8 mb-[39px] items-center">
            <div>
              <h1 className="text-[#252525] text-[24px] font-semibold">
                Activate Your Survey
              </h1>
              <p className="text-[#565656] text-[14px]  font-normal">
                Choose a plan to activate your survey and start collecting
                responses. Your survey link will be generated after payment.
              </p>
            </div>
            <div className="border border-[#E4E4E7] rounded-[6px] py-[2px] px-[4px] flex gap-[5px]">
              <Button
                type="button"
                variant="ghost"
                className={`${
                  !isYearly ? "bg-[#F4F4F5]" : "text-[#334155]"
                } cursor-pointer px-[14px] py-[6px]`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </Button>
              <Button
                type="button"
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

          <div className="grid mb-[42px] grid-cols-1 md:grid-cols-2  2xl:grid-cols-4 gap-[18px]">
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
                        ? "bg-[#F8F8F8] border-2 border-[#1E42FF] rounded-[10px] transition-all duration-100"
                        : " border border-[#E0E0E0] rounded-[10px]"
                    }
`}
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
          <div className="flex gap-5 lg:gap-[80px] flex-wrap py-[17px] bg-[#F8F7FC] rounded-[10px] px-[43px] items-center">
            <div className="flex gap-2 items-center">
              <Shield color="#0B957E" size={20} />
              <p className="text-[#86868E] text-[11px] font-medium">
                SSL Encrypted
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <CreditCard color="#0B957E" size={20} />
              <p className="text-[#86868E] text-[11px] font-medium">
                Secure payment
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Zap color="#0B957E" size={20} />
              <p className="text-[#86868E] text-[11px] font-medium">
                Instant Activation
              </p>
            </div>
          </div>
          <div className="mt-[42px] bg-[#ECFDF5] rounded-[8px] py-[22px] px-[33px]">
            <p className="text-[#0B957E] text-[16px] font-semibold mb-[25px]">
              Order Summary
            </p>
            {selectedPlan !== null && (
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                  <p className="text-[#1E293B] text-[16px] font-semibold">
                    {subscriptionPlans[selectedPlan].name}
                  </p>
                  <p className="text-[#86868E] text-[11px] font-medium">
                    {isYearly
                      ? subscriptionPlans[selectedPlan].yearlyResponsesCheck
                      : subscriptionPlans[selectedPlan]
                          .monthlyResponsesCheck}{" "}
                    responses included
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#0B9481] text-[16px] font-semibold">
                    $
                    {isYearly
                      ? subscriptionPlans[selectedPlan].yearlyPrice
                      : subscriptionPlans[selectedPlan].monthlyPrice}
                    .00
                  </p>
                  <p className="text-[#86868E] text-[11px] font-medium">
                    one-time payment
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="flex mt-[61px] gap-[18px] flex-col md:flex-row justify-between items-center">
            <Button
              type="button"
              onClick={prevStep}
              variant={"ghost"}
              className="w-full md:w-[165px] bg-[#F8F8F8] h-[40px] text-[14px] font-normal order-2 md:order-1"
            >
              <ArrowLeft /> Back
            </Button>
            {selectedPlan !== null && (
              <Button
                type="submit"
                className="w-full md:w-[300px] lg:w-[370px] h-[40px] text-[14px] font-normal order-1 md:order-3"
                disabled={
                  (isYearly
                    ? subscriptionPlans[selectedPlan].yearlyPrice
                    : subscriptionPlans[selectedPlan].monthlyPrice) === 0
                }
              >
                Activate Survey - $
                {isYearly
                  ? subscriptionPlans[selectedPlan].yearlyPrice
                  : subscriptionPlans[selectedPlan].monthlyPrice}
                .00
                <ArrowRight />
              </Button>
            )}
          </div>
        </form>
      </div>
    </SurveyBuilderLayout>
  );
};

export default StepFive;
