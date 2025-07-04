import { cn } from "~/lib/utils";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

const tones = [
  { id: "curious", label: "Curious", emoji: "🤔" },
  { id: "analytical", label: "Analytical", emoji: "🔍" },
  { id: "conversational", label: "Conversational", emoji: "💬" },
];

const ToneSelector = ({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (val: string) => void;
}) => {
  return (
    <div className="my-[24px]">
      <p className="text-sm font-semibold mb-1">AI Tone</p>
      <RadioGroup
        value={selected}
        onValueChange={onChange}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {tones.map((tone) => (
          <label
            key={tone.id}
            htmlFor={tone.id}
            className={cn(
              "relative flex flex-col justify-center items-center h-[100px] cursor-pointer rounded-[8px] border transition-all",
              selected === tone.id
                ? "border-[#1E42FF] bg-[#F8F7FC]"
                : "border-[#E4E4E7]"
            )}
          >
            <div className="text-[16px] text-center text-[#000000] font-medium">
              {tone.emoji} {tone.label}
            </div>
            <RadioGroupItem
              value={tone.id}
              id={tone.id}
              className="absolute top-2 right-2 h-4 w-4 border border-[#E4E4E7] rounded-full appearance-none data-[state=checked]:border-4 data-[state=checked]:border-[#1E42FF] [&>[data-slot=radio-group-indicator]]:hidden"
            />
          </label>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ToneSelector;
