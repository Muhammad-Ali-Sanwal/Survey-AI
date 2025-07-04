import { ArrowUp, Mic } from "lucide-react";
import { useEffect, useState } from "react";

const chatTranscriptData = [
  {
    sender: "AI",
    text: "How valuable do you find the AI-powered features in our product?",
  },
  {
    sender: "Respondent",
    text: "The AI features are very useful and time-saving. They help me make better decisions quickly and improve my overall productivity, especially with smart suggestions and automation.",
  },
  {
    sender: "AI",
    text: "Which AI feature do you use the most?",
  },
  {
    sender: "Respondent",
    text: "Helpful sometimes, depends on the task",
  },
  {
    sender: "AI",
    text: "How satisfied are you with the AI's ability to understand and respond to your queries?",
  },
];

const SparklesIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M0 10C4.69449 10 8.5 5.52284 8.5 0C8.5 5.52284 12.3055 10 17 10C12.3055 10 8.5 14.4772 8.5 20C8.5 14.4772 4.69449 10 0 10Z"
        fill="#71717A"
      />
      <path
        d="M15 6.5C17.4853 6.5 19.5 4.48528 19.5 2C19.5 4.48528 21.5147 6.5 24 6.5C21.5147 6.5 19.5 8.51472 19.5 11C19.5 8.51472 17.4853 6.5 15 6.5Z"
        fill="#71717A"
      />
      <path
        d="M11 18.5C14.0376 18.5 16.5 16.0376 16.5 13C16.5 16.0376 18.9624 18.5 22 18.5C18.9624 18.5 16.5 20.9624 16.5 24C16.5 20.9624 14.0376 18.5 11 18.5Z"
        fill="#71717A"
      />
    </svg>
  );
};
const SurveyByText = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return (
      <div className="h-screen flex justify-center items-center flex-col">
        <p className="text-[#252525] text-[16px] mb-3">Powered by survey.ai</p>

        <div className="w-[235px] h-[13px] bg-[#D9D9D9] rounded-full relative overflow-hidden">
          <div className="h-full bg-[#415FFF] rounded-full animate-fillBar"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[90vh] px-8 flex flex-col justify-between items-center">
      <div className="flex-1 flex justify-center items-center w-full">
        <div
          className="max-h-[470px] max-w-[1000px] lg:w-[1000px] overflow-y-auto
                 [&::-webkit-scrollbar]:w-2
                 [&::-webkit-scrollbar-track]:rounded-full
                 [&::-webkit-scrollbar-track]:bg-[#D9D9D9]
                 [&::-webkit-scrollbar-thumb]:rounded-full
                 [&::-webkit-scrollbar-thumb]:bg-[#1E42FF]"
        >
          {chatTranscriptData.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "Respondent" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex my-[20px] gap-[10px] ${
                  msg.sender === "AI" ? "items-start" : "items-center"
                }`}
              >
                {msg.sender === "AI" && (
                  <div className="h-[24px] mt-3 w-[24px]">
                    <SparklesIcon />
                  </div>
                )}
                <p
                  className={` ${
                    msg.sender === "AI"
                      ? "font-medium text-[16px] bg-[#F8F8F8] rounded-[20px] px-5 py-3 inline-flex max-w-[550px] text-[#5B5A5A]"
                      : "font-medium text-[16px] max-w-[550px] text-[#5B5A5A]"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1000px] border border-[#E0E0E0] rounded-[30px] pt-[24px] pb-[14px] pr-[27px] pl-[45px]">
        <textarea
          className="border-none h-[60px] w-full resize-none !ring-0 bg-white !outline-none focus:!ring-0 focus:!border-none focus:!outline-none placeholder:text-[#929292] text-[14px] font-medium text-black"
          placeholder="Write your answer..."
        />
        <div className="flex gap-5 items-center justify-end mt-2">
          <Mic
            color="#86868E"
            size={20}
            className="cursor-pointer h-5 w-5 rounded-full"
          />
          <div className="border-l border-[#E0E0E0] h-[20px]" />
          <button type="submit">
            <ArrowUp
              color="white"
              size={25}
              className="h-[30px] rounded-full p-1 cursor-pointer w-[30px] bg-[#415FFF]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyByText;
