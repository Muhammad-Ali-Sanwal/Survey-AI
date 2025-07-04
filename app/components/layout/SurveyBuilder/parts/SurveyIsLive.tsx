import { Button } from "~/components/ui/button";
import SurveyBuilderLayout from "./Layout";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const SurveyIsLive = () => {
  const surveyLink = "https://surveyai.app/s/4pm08irugv3";
  const navigate = useNavigate();
  return (
    <div>
      <SurveyBuilderLayout
        title="Your Survey is Live!"
        description="Payment successful! Your survey has been activated and is ready to collect responses. A test response has been sent to verify everything is working perfectly."
        imgSrc="/images/SurveyIsLive.svg"
        ExcludeSkipButton
      >
        <div className="pt-4 md:mt-[90px] px-4 sm:px-12 lg:pl-[360px]">
          <div className="flex justify-between mb-[39px] items-center">
            <div>
              <h1 className="text-[#252525] text-[24px] font-semibold">
                🎉 Your Survey is Live!
              </h1>
              <p className="text-[#565656] text-[14px]  font-normal">
                Payment successful! Your survey has been activated and is ready
                to collect responses. A test response has been sent to verify
                everything is working perfectly.
              </p>
            </div>
          </div>
          <div className="mt-[35px] bg-[#F8F7FC] rounded-[10px] px-[65px] flex justify-between items-center py-[20px] border border-[#E4E4E7]">
            <div className="flex flex-col items-center">
              <p className="text-[#71717A] text-[15px] font-medium">
                Questions
              </p>
              <p className="text-[#3CAA98] text-[20px] font-extrabold">2</p>
            </div>
            <div className="border-l h-[50px] border-l-[#E4E4E7]" />
            <div className="flex flex-col items-center">
              <p className="text-[#71717A] text-[15px] font-medium">
                Estimated Time
              </p>
              <p className="text-[#3CAA98] text-[20px] font-extrabold">1 min</p>
            </div>
            <div className="border-l h-[50px] border-l-[#E4E4E7]" />

            <div className="flex flex-col items-center">
              <p className="text-[#71717A] text-[15px] font-medium">Status</p>
              <p className="text-white bg-[#0B957E] mt-1 rounded-[20px] inline-flex px-3 py-1 text-[11px] font-normal">
                Active
              </p>
            </div>
          </div>
          <div className="mt-[27px] border border-[#E4E4E7] rounded-[10px] py-[36px] px-[46px]">
            <p className="text-black text-[17px] font-semibold">
              Your Survey Link
            </p>
            <p className="text-[#797979] text-[13px] font-medium mt-1">
              You can share the direct link to your survey.
            </p>
            <div className="flex gap-4 mt-[15px] items-center">
              <a
                href="surveyLink"
                target="_blank"
                className="bg-[#F8F7FC] flex-1 text-[#1E42FF] text-[12px] font-medium py-3 px-5 rounded-[8px]"
              >
                {surveyLink}
              </a>
              <Button
                variant={"ghost"}
                className="text-[#415FFF] cursor-pointer text-[12px] font-medium py-[12px] px-[21px] border border-[#00000014] rounded-[8px]"
                onClick={() => {
                  if (surveyLink) {
                    navigator.clipboard.writeText(surveyLink);
                    toast.success("Survey link copied to clipboard!", {
                      position: "top-center",
                    });
                  }
                }}
              >
                Copy
              </Button>
            </div>
          </div>
        </div>
      </SurveyBuilderLayout>
    </div>
  );
};

export default SurveyIsLive;
