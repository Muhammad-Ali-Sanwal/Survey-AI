import React, { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";

const chatTranscriptData = [
  {
    sender: "AI",
    time: "10:20 AM",
    text: "Hey there! Can you tell me how your experience was while using our platform?",
  },
  {
    sender: "Respondent",
    time: "10:20 AM",
    text: "It was overall a good experience. The interface was clean, and I didn't face much trouble navigating things.",
  },
  {
    sender: "AI",
    time: "10:20 AM",
    text: "Thanks for sharing! Was there anything that you found confusing or annoying?",
  },
  {
    sender: "Respondent",
    time: "10:20 AM",
    text: "Yes, the payment process was a bit unclear at first. I wasn't sure which plan I was selecting until the last step.",
  },
  {
    sender: "AI",
    time: "10:20 AM",
    text: "Got it! On a scale of 1 to 5, how would you rate your experience and why?",
  },
  {
    sender: "Respondent",
    time: "10:20 AM",
    text: "I'd give it a 4. It works really well, but a few parts like loading speed can be improved.",
  },
];

const formatTime = (timeInSeconds: number): string => {
  if (isNaN(timeInSeconds) || timeInSeconds < 0) return "0:00";
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const ChatDetails: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const fullTranscript = chatTranscriptData
    .map((msg) => `${msg.sender} said: ${msg.text}`)
    .join(". ");

  useEffect(() => {
    const totalWords = fullTranscript.split(" ").length;
    const estimatedDuration = totalWords / 2.5;
    setDuration(Math.ceil(estimatedDuration));
  }, [fullTranscript]);

  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      console.error("Text-to-Speech is not supported in this browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(fullTranscript);
    utteranceRef.current = utterance;

    const handleBoundary = (event: SpeechSynthesisEvent) => {
      const elapsedSeconds = event.elapsedTime / 1000;
      setCurrentTime(elapsedSeconds);
      if (duration > 0) {
        setProgress((elapsedSeconds / duration) * 100);
      }
    };
    utterance.onstart = () => setIsPlaying(true);
    utterance.onpause = () => setIsPlaying(false);
    utterance.onresume = () => setIsPlaying(true);
    utterance.onend = () => {
      setIsPlaying(false);
      setCurrentTime(duration);
      setProgress(100);
    };

    utterance.addEventListener("boundary", handleBoundary);

    return () => {
      speechSynthesis.cancel();
      utterance.onstart = null;
      utterance.onpause = null;
      utterance.onresume = null;
      utterance.onend = null;
      utterance.removeEventListener("boundary", handleBoundary);
    };
  }, [fullTranscript, duration]);
  const handlePlayPause = () => {
    if (!utteranceRef.current) return;
    const synth = window.speechSynthesis;

    if (synth.paused) {
      synth.resume();
    } else if (synth.speaking) {
      synth.pause();
    } else {
      setCurrentTime(0);
      setProgress(0);
      synth.speak(utteranceRef.current);
    }
  };

  return (
    <div className="px-5 md:px-[40px] lg:px-[70px]">
      <div className="mb-[27px] rounded-[10px] border border-[#E0E0E0] py-[35px] mx-auto">
        <div
          className="max-h-[450px] px-5 md:px-[43px] space-y-6 overflow-y-auto pr-4
                 [&::-webkit-scrollbar]:w-2
                 [&::-webkit-scrollbar-track]:rounded-full
                 [&::-webkit-scrollbar-track]:bg-[#D9D9D9]
                 [&::-webkit-scrollbar-thumb]:rounded-full
                 [&::-webkit-scrollbar-thumb]:bg-[#1E42FF]"
        >
          {chatTranscriptData.map((msg, index) => (
            <div key={index}>
              <p className="text-sm font-semibold">
                <span className={"text-[#415FFF] text-[12px] font-medium"}>
                  {msg.sender}
                </span>
                <span className="ml-2 text-[12px] font-medium text-[#86868E]">
                  {msg.time}
                </span>
              </p>
              <p
                className={`mt-1 text-[13px] ${
                  msg.sender === "AI"
                    ? "font-semibold text-[#3D3D3D]"
                    : "font-medium text-[#3D3D3DCC]"
                }`}
              >
                {msg.text}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full mt-[25px]">
          <div className="relative mb-[25px] h-[1px] w-full rounded-full bg-[#E0E0E0]">
            <div
              className="absolute h-[3px] bg-[#1E42FF]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex px-[30px] items-center justify-between">
            <span className="text-xs font-medium text-[#86868E]">
              {formatTime(currentTime)}
            </span>
            <button
              onClick={handlePlayPause}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" fill="#71717A" />
              ) : (
                <Play className="ml-0.5 h-4 w-4" fill="#71717A" />
              )}
            </button>
            <span className="text-xs font-medium text-[#86868E]">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetails;
