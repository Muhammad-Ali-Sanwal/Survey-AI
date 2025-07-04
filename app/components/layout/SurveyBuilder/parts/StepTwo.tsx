import SurveyBuilderLayout from "./Layout";
import { Button } from "~/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const stepTwoSchema = z.object({
  knowledgeContent: z.string().min(1, "Knowledge Content is required"),
  knowledgeFile: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val) return true;
        const fileSize = val.length;
        return fileSize <= 50 * 1024 * 1024;
      },
      {
        message: "File size must be less than 50MB",
      }
    ),
});

const StepTwo = ({ nextStep, prevStep, skipStep, step }: any) => {
  const LabelStyles = "text-[#000000] mb-1 !text-[14px] font-medium";

  const {
    control,
    handleSubmit,
    setValue,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      knowledgeContent: "",
      knowledgeFile: "",
    },
  });
  const onSubmit = (values: z.infer<typeof stepTwoSchema>) => {
    console.log(values);
    nextStep();
  };

  return (
    <div>
      <SurveyBuilderLayout
        imgSrc="/images/KnowledgeBase.svg"
        title="Knowledge Base"
        description="Provide context and information to make your survey more intelligent."
        OnSkip={skipStep}
        currentStep={step}
      >
        <div className="lg:mt-[160px] px-4 sm:px-12 lg:pr-8 lg:max-w-[820px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-[#252525] text-[24px] font-semibold">
              Knowledge Base
            </p>
            <p className="text-[#565656] text-[14px] font-normal mb-[40px]">
              Provide context and information to make your survey more
              intelligent.
            </p>
            <div className="flex flex-col">
              <label htmlFor="KnowledgeContent" className={LabelStyles}>
                Knowledge Content
              </label>
              <textarea
                id="KnowledgeContent"
                placeholder="paste product details, research objectives, or other relevant information here..."
                className="h-[130px] w-full placeholder:text-[#8D8D8D] text-black p-3 border border-[#E4E4E7] rounded-md text-[16px] font-normal  focus:border-[#A1A1AA] focus:ring-0 focus:outline-none focus-visible:ring-0"
                {...register("knowledgeContent")}
              />
              {errors.knowledgeContent && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.knowledgeContent.message}
                </p>
              )}
              <p className="my-[30px] text-[#797979] text-[12px] font-medium">
                You can paste text directly or upload a document (PDF, Markdown,
                or plain text, max 50MB).
              </p>
              <div className="bg-[#FDFDFF] text-center custom-dashed-border">
                <div className="flex flex-col py-[20px] md:py-[50px] px-[90px] items-center justify-center">
                  <input
                    type="file"
                    id="fileInput"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) setValue("knowledgeFile", file.name);
                    }}
                  />
                  <label htmlFor="fileInput" className="cursor-pointer">
                    <img
                      src="/images/Uploadicon.png"
                      alt="UploadIcon"
                      height={50}
                      width={50}
                      className="mb-[21px]"
                    />
                  </label>
                  <div className="flex">
                    <p className="font-medium text-[#040415] text-[20px]">
                      Drop your file(s) here,or{" "}
                      <label
                        htmlFor="fileInput"
                        className="text-[#415FFF] cursor-pointer text-[20px] font-medium"
                      >
                        Browse
                      </label>
                    </p>
                  </div>
                  <p className="text-[10px] font-medium text-[#989999]">
                    Supports: pdf, word Max file size 50MB
                  </p>
                </div>
              </div>
              {errors.knowledgeFile && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.knowledgeFile.message}
                </p>
              )}
            </div>
            <div className="flex mt-[61px] gap-[18px] flex-col md:flex-row justify-between items-center">
              <Button
                type="button"
                onClick={skipStep}
                className="border lg:hidden h-[40px] border-[#e5e5e5] text-[#252525] text-[14px] font-medium rounded-[6px] max-md:w-full cursor-pointer order-3 md:order-2"
                variant={"ghost"}
              >
                Skip for now
              </Button>

              <Button
                onClick={prevStep}
                type="button"
                variant={"ghost"}
                className="w-full md:w-[165px] bg-[#F8F8F8] h-[40px] text-[14px] font-normal order-2 md:order-1"
              >
                <ArrowLeft /> Back
              </Button>

              <Button
                className="w-full md:w-[165px] h-[40px] text-[14px] font-normal order-1 md:order-3"
                type="submit"
              >
                Next <ArrowRight />
              </Button>
            </div>
          </form>
        </div>
      </SurveyBuilderLayout>
    </div>
  );
};

export default StepTwo;
