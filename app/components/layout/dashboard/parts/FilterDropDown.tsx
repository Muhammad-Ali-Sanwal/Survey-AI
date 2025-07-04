import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { Funnel, ChevronDown } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Label } from "~/components/ui/label";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "~/components/ui/collapsible";
import { useState } from "react";

const FilterDropdown = () => {
  const [open, setOpen] = useState({
    date: false,
    type: false,
    completion: false,
    responses: false,
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="bg-[#F8F7FC] cursor-pointer h-[44px] p-3 rounded-[8px]"
        >
          <Funnel color="#71717A" height={20} width={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[155px] p-[11px] poppins ">
        <Collapsible
          open={open.date}
          onOpenChange={(v) => setOpen({ ...open, date: v })}
        >
          <CollapsibleTrigger asChild>
            <div className="flex justify-between items-center">
              <p className="font-normal cursor-pointer text-[12px]">
                Date Range
              </p>
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    open.date ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            <RadioGroup defaultValue="today">
              {["Today", "Last 7 day", "Last 30 days", "Custom Range"].map(
                (item) => (
                  <div key={item} className="flex justify-between">
                    <Label htmlFor={item} className="font-normal text-[10px]">
                      {item}
                    </Label>
                    <RadioGroupItem
                      value={item}
                      id={item}
                      className="data-[state=checked]:border-[var(--primary)] border border-[#929299]"
                    />
                  </div>
                )
              )}
            </RadioGroup>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible
          open={open.type}
          onOpenChange={(v) => setOpen({ ...open, type: v })}
        >
          <CollapsibleTrigger asChild>
            <div className="flex justify-between items-center mt-4">
              <p className="font-normal cursor-pointer text-[12px]">
                Survey Type
              </p>
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    open.type ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            <RadioGroup>
              {["Onboarding", "Pricing", "UX", "Feature Reques", "Support"].map(
                (item) => (
                  <div key={item} className="flex justify-between">
                    <Label htmlFor={item} className="font-normal text-[10px]">
                      {item}
                    </Label>
                    <RadioGroupItem
                      value={item}
                      id={item}
                      className="data-[state=checked]:border-[var(--primary)] border border-[#929299]"
                    />
                  </div>
                )
              )}
            </RadioGroup>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible
          open={open.completion}
          onOpenChange={(v) => setOpen({ ...open, completion: v })}
        >
          <CollapsibleTrigger asChild>
            <div className="flex justify-between items-center mt-4">
              <p className="font-normal cursor-pointer text-[12px]">
                Completion Rate
              </p>
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    open.completion ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            <RadioGroup>
              {["0–25%", "26–50%", "51–75%", "76–100%"].map((item) => (
                <div key={item} className="flex justify-between">
                  <Label htmlFor={item} className="font-normal text-[10px]">
                    {item}
                  </Label>
                  <RadioGroupItem
                    value={item}
                    id={item}
                    className="data-[state=checked]:border-[var(--primary)] border border-[#929299]"
                  />
                </div>
              ))}
            </RadioGroup>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible
          open={open.responses}
          onOpenChange={(v) => setOpen({ ...open, responses: v })}
        >
          <CollapsibleTrigger asChild>
            <div className="flex justify-between items-center mt-4">
              <p className="font-normal cursor-pointer text-[12px]">
                Responses Count
              </p>
              <Button variant="ghost" size="icon" className="h-4 w-4 p-0">
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    open.responses ? "rotate-180" : ""
                  }`}
                />
              </Button>
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            <RadioGroup>
              {["Low (<50)", "Medium (50–200)", "High (200+)"].map((item) => (
                <div className="flex justify-between">
                  <Label htmlFor={item} className="font-normal text-[10px]">
                    {item}
                  </Label>
                  <RadioGroupItem
                    value={item}
                    id={item}
                    className="data-[state=checked]:border-[var(--primary)] border border-[#929299]"
                  />
                </div>
              ))}
            </RadioGroup>
          </CollapsibleContent>
        </Collapsible>
      </PopoverContent>
    </Popover>
  );
};

export default FilterDropdown;
