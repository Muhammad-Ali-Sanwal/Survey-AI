import { SendHorizontal } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const chatHistory = [
  {
    sender: "ai_greeting",
    text: "Hi there! 👋\nI'm Your Ai Assistant, Let's uncover insights and improve your user experience together!",
  },
  {
    sender: "user",
    text: "Can you tell me which question got the most negative responses?",
  },

  {
    sender: "ai",
    text: "Sure! The question 'How satisfied are you with the payment process?' received the most negative feedback — 47% of users rated it below 3 stars.",
  },
  {
    sender: "ai",
    text: "Sure! The question 'How satisfied are you with the payment process?' received the most negative feedback — 47% of users rated it below 3 stars.",
  },
  {
    sender: "ai",
    text: "Sure! The question 'How satisfied are you with the payment process?' received the most negative feedback — 47% of users rated it below 3 stars.",
  },
  {
    sender: "user",
    text: "Can you tell me which question got the most negative responses?",
  },
  {
    sender: "user",
    text: "Can you tell me which question got the most negative responses?",
  },
  {
    sender: "user",
    text: "Where are most users dropping off in the survey?",
  },
  {
    sender: "ai",
    text: "Most users are exiting at question 4. The completion rate drops by 28% at that point. You may want to review that question's clarity or relevance.",
  },
  {
    sender: "user",
    text: "What's the overall sentiment of the survey responses?",
  },
  {
    sender: "ai",
    text: "The overall sentiment is mostly positive — 72% of responses reflect satisfaction or appreciation. However, about 18% show concerns related to usability.",
  },
];
const AIAssistant = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col max-md:px-2 mt-[46px] max-lg:px-12 max-h-[700px] overflow-y-auto scrollbar-hidden gap-4">
        {chatHistory.map((message, index) => {
          if (message.sender === "ai_greeting") {
            return (
              <div
                key={index}
                className="self-start p-3 rounded-lg text-white text-[12px] font-normal leading-snug"
                style={{
                  background:
                    "linear-gradient(93.16deg, #677FFF -2.9%, #1E42FF 108.06%)",
                }}
              >
                <p className="whitespace-pre-line">{message.text}</p>
              </div>
            );
          }

          if (message.sender === "user") {
            return (
              <div
                key={index}
                className="self-end max-w-[80%] bg-white p-3 rounded-lg text-[#2E2E2E] text-[12px] font-normal leading-snug"
              >
                {message.text}
              </div>
            );
          }

          if (message.sender === "ai") {
            return (
              <div
                key={index}
                className="self-start max-w-[90%] bg-[#1E42FF14] p-3 rounded-lg text-[12px] font-normal leading-snug"
              >
                <p className="text-black">🤖 AI:</p>
                <p> {message.text}</p>
              </div>
            );
          }

          return null;
        })}
      </div>
      <div className="bg-white my-5 border border-[#5E678221] rounded-[100px] py-3 px-[25px] flex items-center justify-between">
        <Input
          type="text"
          className="!border-none shadow-none !ring-0 bg-white !outline-none focus:!ring-0 focus:!border-none focus:!outline-none text-[14px] font-normal placeholder:text-[#000D3870] text-black"
          placeholder="Ask a question"
        />
        <Button variant={"ghost"} className="cursor-pointer">
          <SendHorizontal color="#1C274C4A" />
        </Button>
      </div>
    </div>
  );
};

export default AIAssistant;
