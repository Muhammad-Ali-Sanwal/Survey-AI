import { Label } from "~/components/ui/label";
import SurveyBuilderLayout from "./Layout";
import { Checkbox } from "~/components/ui/checkbox";
import { ArrowLeft, ArrowRight, Info, RefreshCcw } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const topics = [
  {
    id: "OnboardingProcess",
    label: "Onboarding Process Clarity",
    description:
      "How well users understand each step of the onboarding process and whether it feels overwhelming or manageable.",
  },
  {
    id: "NavigationClarity",
    label: "Navigation Clarity and Ease",
    description:
      "How easily users can find their way around and complete basic tasks affects overall satisfaction and retention rates.",
  },
  {
    id: "VisualDesign",
    label: "Visual Design and Accessibility",
    description:
      "How the visual elements support usability and whether the interface is accessible to users with different abilities.",
  },
  {
    id: "ErrorHandling",
    label: "Error Handling and Recovery",
    description:
      "How well users can understand and recover from mistakes or system errors during their journey.",
  },
  {
    id: "MobileAndDesktopExperience",
    label: "Mobile vs Desktop Experience",
    description:
      "How well users can understand and recover from mistakes or system errors during their journey.",
  },
];

const formSchema = z.object({
  selectedTopics: z.array(z.string()).max(topics.length),
});

const StepFour = ({ nextStep, prevStep, step }: any) => {
  const { control, watch, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedTopics: [],
    },
  });

  const selected = watch("selectedTopics") || [];
  const HandleSubmitStepFour = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    nextStep();
  };
  return (
    <div>
      <SurveyBuilderLayout
        title="Review Topics"
        description="Approve suggested topics"
        imgSrc="/images/ReviewTopics.svg"
        ExcludeSkipButton
        currentStep={step}
      >
        <div className="pt-4 md:mt-[90px] px-4 sm:px-12 lg:px-0 lg:pr-4 lg:max-w-[840px]">
          <form onSubmit={handleSubmit(HandleSubmitStepFour)}>
            <h1 className="text-[#252525] text-[24px] font-semibold">
              Review Suggested Topics
            </h1>
            <p className="text-[#565656] text-[14px] mt-[6px] font-normal">
              We've generated 5 high-quality survey topics based on your
              context. Select the ones that are most relevant to your goals.
            </p>
            <div className="my-[33px] flex flex-col gap-5 w-full">
              {topics.map((topic) => (
                <Label
                  key={topic.id}
                  className="border flex flex-col items-start cursor-pointer border-[#E4E4E7] rounded-[8px] p-[26px]"
                  htmlFor={topic.id}
                >
                  <div className="flex items-center mb-[2px] gap-2">
                    <Controller
                      control={control}
                      name="selectedTopics"
                      render={({ field }) => (
                        <Checkbox
                          id={topic.id}
                          checked={field.value.includes(topic.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              field.onChange([...field.value, topic.id]);
                            } else {
                              field.onChange(
                                field.value.filter((val) => val !== topic.id)
                              );
                            }
                          }}
                          className="h-5 w-5 bg-white shadow-none"
                        />
                      )}
                    />
                    <span className="text-[#000000] text-[16px] font-medium">
                      {topic.label}
                    </span>
                  </div>
                  <div className="flex gap-1 ml-[28px] items-center">
                    <Info color="#71717A" size={12} />
                    <p className="text-[#71717A] text-[12px] font-medium ">
                      {topic.description}
                    </p>
                  </div>
                </Label>
              ))}
            </div>

            <div className="bg-[#F8F7FC] rounded-[8px] py-[30px] flex-wrap gap-8 px-[40px] flex items-center justify-between">
              <div className="flex gap-1 flex-col">
                <p className="text-[#252525] text-[17px] font-medium">
                  Selection Progress
                </p>
                <p className="text-[#71717A] text-[13px] font-medium">
                  {selected.length} of {topics.length} topics selected
                </p>
              </div>
              <div className="flex items-center gap-5">
                <Button
                  type="button"
                  variant={"ghost"}
                  className="text-[#848484] max-lg:hidden cursor-pointer h-[40px] w-[150px] bg-white text-[13px] font-medium"
                >
                  <RefreshCcw color="#848484" size={12} />
                  Regenerate
                </Button>
                <Button
                  type="submit"
                  className="w-[220px] max-lg:hidden cursor-pointer h-[40px] text-[14px] font-normal"
                >
                  Continue with {selected.length} Topics <ArrowRight />
                </Button>
              </div>
            </div>
            <div className="flex mt-[61px] gap-[18px] flex-col md:flex-row justify-between items-center">
              <Button
                type="submit"
                onClick={() => nextStep()}
                className="w-full md:w-[220px] lg:hidden cursor-pointer h-[40px] text-[14px] font-normal order-1 md:order-3"
              >
                Continue with {selected.length} Topics <ArrowRight />
              </Button>
              <Button
                onClick={prevStep}
                type="button"
                variant={"ghost"}
                className="w-full md:w-[165px] lg:hidden bg-[#F8F8F8] h-[40px] text-[14px] font-normal order-2 md:order-1"
              >
                <ArrowLeft /> Back
              </Button>
            </div>
          </form>
        </div>
      </SurveyBuilderLayout>
    </div>
  );
};

export default StepFour;
