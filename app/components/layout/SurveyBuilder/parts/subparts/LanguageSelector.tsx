import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

const LanguageSelector = ({ selected, onChange }: any) => {
  const [open, setOpen] = useState(false);

  const languages = [
    "English",
    "Spanish",
    "Chinese",
    "Hindi",
    "Arabic",
    "French",
    "Russian",
    "Portuguese",
    "German",
    "Japanese",
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex justify-between mb-[40px] h-[55px] items-center px-4 py-2 bg-[#F8F8F8] rounded-md w-full cursor-pointer">
          <p className="text-[14px]">
            <span className="font-semibold text-[14px] text-[#252525]">
              Language:
            </span>{" "}
            {selected}
          </p>
          <ChevronDown size={16} className="text-[#6B7280]" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2">
        <div className="flex flex-col gap-2">
          {languages.map((lang) => (
            <p
              key={lang}
              onClick={() => {
                onChange(lang);
                setOpen(false);
              }}
              className={`px-3 py-1 rounded-md cursor-pointer hover:bg-gray-100 ${
                selected === lang ? "bg-gray-100 font-medium text-[14px]" : ""
              }`}
            >
              {lang}
            </p>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;
