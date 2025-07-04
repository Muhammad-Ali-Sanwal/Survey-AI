import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";

type CodeVerificationSectionProps = {
  onSubmit: (data: { code: string }) => void;
};

const CodeVerificationSection = ({
  onSubmit,
}: CodeVerificationSectionProps) => {
  const [codes, setCodes] = useState<string[]>(["", "", "", ""]);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: "",
    },
    mode: "onChange",
    criteriaMode: "all",
  });

  const handleChange = (index: number, value: string) => {
    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);
    setValue("code", newCodes.join(""));
    if (value && index < 3 && inputs.current[index + 1]) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      e.key === "Backspace" &&
      !codes[index] &&
      index > 0 &&
      inputs.current[index - 1]
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleFormSubmit = (data: { code: string }) => {
    onSubmit(data);
  };

  const CodeInputStyles =
    "w-[50px] h-[70px] focus-within:outline-[#415FFF] border border-[#E4E4E7] text-[#000000] text-[26px] font-semibold px-[17px] py-[25px]";

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col max-w-[320px] m-auto"
    >
      <div className="flex gap-[20px]">
        {codes.map((code, index) => (
          <input
            key={index}
            type="number"
            maxLength={1}
            value={code}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={`${CodeInputStyles} appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
            ref={(el) => {
              if (el) {
                inputs.current[index] = el;
              }
            }}
            autoFocus={index === 0}
          />
        ))}
      </div>
      <input
        type="hidden"
        {...register("code", { required: "Code is required" })}
      />

      {errors.code && (
        <span className="text-red-500 font-medium text-[12px]">
          {errors.code.message}
        </span>
      )}

      <Button
        type="submit"
        className="text-white mt-[32px] text-[14px] cursor-pointer bg-[#415FFF] font-medium rounded-[6px] hover:bg-blue-700 transition-all duration-200"
      >
        Continue
      </Button>

      <p className="text-[#000000] mt-[30px] text-[16px] font-normal">
        If you don&apos;t receive any code.{" "}
        <span className="text-[#415FFF] underline cursor-pointer">Resend</span>
      </p>
    </form>
  );
};

export default CodeVerificationSection;
