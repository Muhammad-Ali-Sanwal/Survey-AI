import { useState } from "react";
import StepOne from "./parts/StepOne";
import StepTwo from "./parts/StepTwo";
import StepThree from "./parts/StepThree";
import StepFour from "./parts/StepFour";
import SurveyIsLive from "./parts/SurveyIsLive";
import StepFive from "./parts/StepFive";

const SurveyBuilderPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const skipStep = () => setStep((prev) => prev + 1);

  return (
    <div>
      {step === 1 && (
        <StepOne nextStep={nextStep} skipStep={skipStep} step={step} />
      )}
      {step === 2 && (
        <StepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          skipStep={skipStep}
          step={step}
        />
      )}
      {step === 3 && (
        <StepThree
          nextStep={nextStep}
          prevStep={prevStep}
          skipStep={skipStep}
          step={step}
        />
      )}
      {step === 4 && (
        <StepFour nextStep={nextStep} prevStep={prevStep} step={step} />
      )}
      {step === 5 && (
        <StepFive nextStep={nextStep} prevStep={prevStep} step={step} />
      )}
      {step === 6 && <SurveyIsLive />}
    </div>
  );
};

export default SurveyBuilderPage;
