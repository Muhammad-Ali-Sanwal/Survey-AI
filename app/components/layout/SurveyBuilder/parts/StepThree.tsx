import { Input } from "~/components/ui/input";
import SurveyBuilderLayout from "./Layout";
import { ArrowLeft, ArrowRight, Info } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "~/components/ui/select";
import ToneSelector from "./subparts/ToneSelector";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const stepThreeSchema = z.object({
  model: z.string(),
  temperature: z.string(),
  seedQuestion: z.string().min(1, "Seed Question is required"),
  tone: z.string(),
  stopRule: z.boolean().optional(),
});

const StepThree = ({ nextStep, prevStep, skipStep, step }: any) => {
  const LabelStyles = "text-[#000000] mb-1 !text-[14px] font-medium";
  const InputStyles =
    "!h-[40px] border w-full placeholder:text-[#71717A] text-[#71717A] border-[#E4E4E7] !text-[16px] font-medium ring-0 outline-none shadow-sm focus:border-[#A1A1AA] focus:ring-0 focus:outline-none focus-visible:ring-0";

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepThreeSchema),
    defaultValues: {
      model: "GPT-4o",
      temperature: "0.6",
      seedQuestion: "",
      tone: "analytical",
      stopRule: false,
    },
  });
  const HandleSubmitStepThree = (values: z.infer<typeof stepThreeSchema>) => {
    console.log(values);
    nextStep();
  };
  return (
    <div>
      <SurveyBuilderLayout
        title="AI Settings"
        description="Configure how the AI will interact with respondents."
        imgSrc="/images/AISettings.svg"
        OnSkip={skipStep}
        currentStep={step}
      >
        <div className="pt-4 md:mt-[90px] px-4 sm:px-12 lg:px-0 lg:pr-4 lg:max-w-[830px]">
          <form onSubmit={handleSubmit(HandleSubmitStepThree)}>
            <p className="text-[#252525] text-[24px] font-semibold">
              AI Settings
            </p>
            <p className="text-[#565656] text-[14px] font-normal mb-[40px]">
              Configure how the AI will interact with respondents.
            </p>
            <div className="flex flex-col md:flex-row gap-5 md:gap-[40px]">
              <div className="flex w-full flex-col">
                <label
                  htmlFor="SurveyTitle"
                  className={`${LabelStyles} flex gap-1 items-center`}
                >
                  Model <Info size={12} color="#71717A" />
                </label>
                <Select
                  value={watch("model")}
                  onValueChange={(val) => setValue("model", val)}
                >
                  <SelectTrigger className={InputStyles}>
                    <SelectValue placeholder="Select model (Best: GPT-4 or GPT-4 Turbo)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GPT-3.5">GPT-3.5</SelectItem>
                    <SelectItem value="GPT-4">GPT-4</SelectItem>
                    <SelectItem value="GPT-4 Turbo">GPT-4 Turbo</SelectItem>
                    <SelectItem value="GPT-4o">GPT-4o</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex w-full flex-col">
                <label
                  htmlFor="SurveyTitle"
                  className={`${LabelStyles} flex gap-1 items-center`}
                >
                  Temperature <Info size={12} color="#71717A" />
                </label>
                <Select
                  value={watch("temperature")}
                  onValueChange={(val) => setValue("temperature", val)}
                >
                  <SelectTrigger className={InputStyles}>
                    <SelectValue placeholder="Select Temperature" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">0 - Most Accurate</SelectItem>
                    <SelectItem value="0.2">0.2 - More Accurate</SelectItem>
                    <SelectItem value="0.4">0.4 - Balanced</SelectItem>
                    <SelectItem value="0.6">0.6 - Slightly Creative</SelectItem>
                    <SelectItem value="0.8">0.8 - Creative</SelectItem>
                    <SelectItem value="1">1 - Most Creative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex my-[24px] w-full flex-col">
              <label htmlFor="SeedQuestion" className={LabelStyles}>
                Seed Question
              </label>
              <Input
                placeholder="What's the biggest challenge you face when trying to gather customer feedback?"
                type="text"
                id="SeedQuestion"
                {...register("seedQuestion")}
                className={`${InputStyles} font-normal text-black`}
              />
              {errors.seedQuestion && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.seedQuestion.message}
                </p>
              )}
              <ToneSelector
                selected={watch("tone")}
                onChange={(val: string) => setValue("tone", val)}
              />
              <div className="bg-[#F9F9F9] flex flex-col gap-3 rounded-[8px] pt-3 px-[32px] pb-[25px] ">
                <p className="text-[#252525] text-[14px] font-semibold">
                  Stop Rule
                </p>
                <Label
                  className="text-[#252525] text-[14px] font-medium flex items-center gap-2"
                  htmlFor="Confirmation"
                >
                  <Checkbox
                    className="h-5 w-5 bg-white shadow-none"
                    id="Confirmation"
                    checked={watch("stopRule")}
                    onCheckedChange={(val) =>
                      setValue("stopRule", val === true)
                    }
                  />
                  Stop when 95% confidence reached
                </Label>
                <p className="text-[#565656] text-[14px] font-normal">
                  AI will automatically end the conversation when it's confident
                  about the response
                </p>
              </div>
              <div className="flex mt-[61px] justify-between flex-col md:flex-row items-center gap-[18px]">
                <Button
                  type="button"
                  className="border max-md:w-full lg:hidden h-[40px] border-[#e5e5e5] text-[#252525] text-[14px] font-medium rounded-[6px] order-3 md:order-2"
                  variant={"ghost"}
                  onClick={skipStep}
                >
                  Skip for now
                </Button>

                <Button
                  type="button"
                  variant={"ghost"}
                  className="max-md:w-full md:w-[165px] bg-[#F8F8F8] h-[40px] text-[14px] font-normal order-2 md:order-1"
                  onClick={prevStep}
                >
                  <ArrowLeft /> Back
                </Button>

                <Button
                  type="submit"
                  className="max-md:w-full md:w-[235px] h-[40px] text-[14px] font-normal order-1 md:order-3"
                >
                  Generate Survey Topics <ArrowRight />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </SurveyBuilderLayout>
    </div>
  );
};

export default StepThree;
