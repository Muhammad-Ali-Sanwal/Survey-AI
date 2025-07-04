import { useRef, useState } from "react";
import { AuthLayout } from "../signin/components/auth-layout";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import { useNavigate } from "react-router";

const VarificationCode = () => {
  type CodeVerificationSectionProps = {
    onSubmit: (data: { code: string }) => void;
  };
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
    const finalCode = newCodes.join("");
    setValue("code", finalCode);

    if (finalCode.length === 4) {
      setShowError(false);
    }

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
    console.log(data);
  };

  const CodeInputStyles =
    "w-[50px] h-[70px] focus-within:outline-[#415FFF] border-none bg-white text-[#000000] text-[26px] font-semibold px-[17px] py-[25px]";
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  return (
    <div>
      <AuthLayout>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <p className="text-[34px] font-bold text-[#171717] text-center">
            Enter Verification Code
          </p>
          <p className="text-[14px] font-normal mt-4 mb-[25px] text-[#71717A] text-center">
            Enter 6-Digit Code to Retrieve password
          </p>
          <div className="bg-[#415FFF0D] px-[50px] py-[18px] rounded-[10px] mb-[25px]">
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
            {showError && (
              <p className="text-red-500 text-sm mt-2 text-center">
                Code is required
              </p>
            )}
          </div>
          <p className="text-[13px] font-normal text-[#000000]">
            If you don&nbsp;t receive any code.{" "}
            <span className="text-[#1E42FF] underline cursor-pointer">
              Resend
            </span>
          </p>
          <div className="flex gap-[24px] mt-[27px] items-center">
            <Button
              onClick={() => navigate("/sign-in")}
              type="button"
              variant={"ghost"}
              className="bg-white h-[40px] w-[150px] shadow-sm"
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="w-[150px] h-[40px]"
              onClick={() => {
                if (codes.join("").length < 4) {
                  setShowError(true);
                } else {
                  setShowError(false);
                  navigate("/reset-password");
                }
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
};

export default VarificationCode;
