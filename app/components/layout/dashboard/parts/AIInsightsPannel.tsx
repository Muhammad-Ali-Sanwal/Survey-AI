"use client";

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { ChevronDown, CircleX } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function AIInsightsToggle() {
  const [open, setOpen] = useState(false);
  const AllSurveys = [
    "Pricing Satisfaction Survey",
    "Product Feedback Survey",
    "Customer Experience Survey",
    "Feature Request Survey",
    "Market Research Survey",
  ];

  return (
    <>
      <Button
        variant="outline"
        onClick={() => setOpen(!open)}
        className="text-[#1E42FF] cursor-pointer h-[40px] border border-[#1E42FF] shadow-none font-medium hover:!text-[#1E42FF]"
      >
        <img src="/images/Sparkles.svg" alt="Sparkles" />
        AI Insights
      </Button>

      {open && (
        <div>
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />
          <div className="fixed right-2 md:right-[65px] bottom-2 md:bottom-[65px] rounded-[10px] w-[400px]  bg-[#F7F7F7] px-[28px] py-[23px] z-50">
            <div className="font-medium text-[20px] flex justify-between items-center text-[#415FFF] mb-3">
              AI-Powered Insights Panel
              <CircleX
                color="#292D32"
                strokeWidth={1}
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="my-[15px] bg-white cursor-pointer flex justify-between items-center py-[11px] px-[20px] rounded-[10px]">
                  <p className="text-[12px] font-semibold ">
                    Pricing Satisfaction Survey
                  </p>
                  <ChevronDown color="#7C8DB5" />
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="center" className="w-full">
                {AllSurveys.map((survey, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => console.log(survey)}
                    className="cursor-pointer"
                  >
                    {survey}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="text-xs font-medium  py-[13px]">
              🛑 Top 3 Complaints:
            </div>
            <ul className="text-xs text-[#797979]  bg-white mb-3 p-[22px] rounded-[10px]  space-y-6">
              <li>
                1. 38% of users feel pricing is not justified for the features
                offered.
              </li>
              <li>2. 26% mentioned slow page load times during peak hours.</li>
              <li>3. 19% faced issues navigating the account settings area.</li>
            </ul>

            <div className="text-xs  font-medium py-[13px]">
              ✅ Top 3 Liked Things:
            </div>
            <ul className="text-xs text-[#797979] rounded-[10px] bg-[white] p-[22px] space-y-6">
              <li>1. 52% praised the clean and modern user interface.</li>
              <li>2. 45% appreciated the easy onboarding process.</li>
              <li>3. 33% loved the AI assistance in form filling.</li>
            </ul>

            <div className="text-xs py-[13px] font-medium ">
              ⚙️ Suggested Action:
            </div>
            <ul className="text-xs bg-[white] rounded-[10px] p-[22px] text-[#797979] list-disc space-y-6">
              <li>Reevaluate pricing structure or offer a basic free tier.</li>
              <li>Optimize performance during high-traffic times.</li>
              <li>Simplify navigation in the account settings area.</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
