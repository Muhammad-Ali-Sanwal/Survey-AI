import { useForm, Controller } from "react-hook-form";
import SurveyBuilderLayout from "./Layout";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import CustomRadioButton from "./subparts/CustomRadioButton";
import QuestionCountSelector from "./subparts/QuestionCountSelector";
import { Switch } from "~/components/ui/switch";
import LanguageSelector from "./subparts/LanguageSelector";
import { ArrowRight } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z
  .object({
    surveyTitle: z.string().min(1, "Survey Title is required"),
    surveyAim: z.string().min(1, "Survey Aim is required"),
    targetAudience: z.string().min(1, "Target Audience is required"),
    audienceType: z.string(),
    questionCount: z.string(),
    language: z.string(),
    voiceResponses: z.boolean(),
    userInfo: z.boolean(),
    userInfoText: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.userInfo && data.userInfoText.trim() === "") {
      ctx.addIssue({
        code: "custom",
        path: ["userInfoText"],
        message: "User information is required",
      });
    }
  });

const StepOne = ({ nextStep, skipStep, step }: any) => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      surveyTitle: "",
      surveyAim: "",
      targetAudience: "",
      audienceType: "Employees",
      questionCount: "Balanced",
      language: "English",
      voiceResponses: false,
      userInfo: false,
      userInfoText: "",
    },
  });

  const values = watch();

  const handleFormSubmit = (data: any) => {
    console.log("Form Submitted with values:", data);
    nextStep();
  };
  const LabelStyles = "text-[#000000] mb-1 !text-[14px] font-medium";
  const InputStyles =
    "h-[44px] placeholder:text-[#71717A] text-black !text-[16px] font-normal ring-0 outline-none shadow-none border-[#E4E4E7] focus:ring-0 focus:outline-none focus-visible:ring-0";

  return (
    <SurveyBuilderLayout
      imgSrc="/images/CreateSurveyStructure.svg"
      title="Create Survey Structure"
      description="Create a structure for the Survey. Explain about all the information regarding your survey. Select relevant options according your situation."
      OnSkip={skipStep}
      currentStep={step}
    >
      <div className="pt-4 md:mt-[90px] px-4 max-md:px-12 ">
        <h1 className="text-[#252525] text-[24px] font-semibold">
          Create Survey Structure
        </h1>
        <p className="text-[#565656] text-[14px] font-normal">
          Create a structure for the Survey. Explain about all the information
          regarding your survey. Select relevant options according your
          situation.
        </p>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mt-[57px] max-w-[645px] lg:w-[645px]">
            <div className="flex max-md:flex-wrap gap-[25px] lg:gap-[60px]">
              <div className="flex w-full lg:w-[400px] flex-col">
                <label htmlFor="surveyTitle" className={LabelStyles}>
                  Survey Title
                </label>
                <Controller
                  name="surveyTitle"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Customer satisfaction Survey"
                      className={InputStyles}
                    />
                  )}
                />
                {errors.surveyTitle && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.surveyTitle.message}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-[38px]">
                <img
                  src="/images/LogoDefault.png"
                  alt="Default Logo"
                  className="h-[50px] w-[50px] rounded-full"
                />
                <Button
                  type="button"
                  variant={"ghost"}
                  className="text-[#8E919F] text-[13px] font-semibold border border-[#EBEBEB] rounded-[6px]"
                >
                  Replace logo
                </Button>
              </div>
            </div>

            <div className="flex w-full mt-[32px] flex-col">
              <label htmlFor="surveyAim" className={LabelStyles}>
                What's the one thing you'd like to learn?
              </label>
              <Controller
                name="surveyAim"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="e.g How can we improve customer satisfaction?"
                    className={InputStyles}
                  />
                )}
              />
              {errors.surveyAim && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.surveyAim.message}
                </p>
              )}
            </div>

            <CustomRadioButton
              selected={values.audienceType}
              onChange={(val: string) => setValue("audienceType", val)}
            />

            <QuestionCountSelector
              selected={values.questionCount}
              onChange={(val: string) => setValue("questionCount", val)}
            />

            <div className="flex flex-col mb-[37px]">
              <label htmlFor="targetAudience" className={LabelStyles}>
                Target Audience
              </label>
              <Controller
                name="targetAudience"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Describe your target audience"
                    className={InputStyles}
                  />
                )}
              />
              {errors.targetAudience && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.targetAudience.message}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center mb-[52px]">
              <div className="flex flex-col">
                <p className="text-[14px] font-semibold text-[#252525]">
                  Voice Responses
                </p>
                <p className="text-[14px] font-normal text-[#565656]">
                  Enable voice input for responses
                </p>
              </div>
              <Switch
                checked={values.voiceResponses}
                onCheckedChange={(val) => setValue("voiceResponses", val)}
              />
            </div>

            <LanguageSelector
              selected={values.language}
              onChange={(val: string) => setValue("language", val)}
            />

            <div className="flex justify-between items-center mb-[20px]">
              <div className="flex flex-col">
                <p className="text-[14px] font-semibold text-[#252525]">
                  User Information
                </p>
                <p className="text-[14px] font-normal text-[#565656]">
                  Choose to stay anonymous or share info
                </p>
              </div>
              <Switch
                checked={values.userInfo}
                onCheckedChange={(val) => setValue("userInfo", val)}
              />
            </div>
            {values.userInfo && (
              <div className="flex flex-col mb-[37px]">
                <Controller
                  name="userInfoText"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      placeholder="Write down all the information you want to collect."
                      className="w-full resize-none text-[12px] bg-white border rounded-[8px] border-[#E4E4E7] placeholder:text-[#8D8D8D] font-normal p-3 h-[85px] text-black"
                    />
                  )}
                />
                {errors.userInfoText && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.userInfoText.message}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-[18px] md:justify-end mr-0 md:mr-[90px]">
            <Button
              type="button"
              variant={"ghost"}
              className="border lg:hidden h-[40px] text-[14px] font-medium"
              onClick={skipStep}
            >
              Skip for now
            </Button>

            <Button
              type="submit"
              className="w-full md:w-[160px] h-[40px] text-[14px] font-normal"
            >
              Next <ArrowRight />
            </Button>
          </div>
        </form>
      </div>
    </SurveyBuilderLayout>
  );
};

export default StepOne;
