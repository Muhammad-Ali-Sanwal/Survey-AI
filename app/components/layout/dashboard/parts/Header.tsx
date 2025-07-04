import { CirclePlus } from "lucide-react";
import { Button } from "~/components/ui/button";
import AIInsightsToggle from "./AIInsightsPannel";
import { useNavigate } from "react-router";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-[145px]">
      <p className="text-[18px] max-md:text-center text-[#71717A]">
        Good Morning 🌤️{" "}
      </p>
      <div className="flex justify-center gap-4 md:justify-between items-center flex-wrap">
        <p className="text-[#252525] max-md:text-center text-[28px] font-medium">
          Welcome Back, Anthony
        </p>
        <div className="flex gap-5 items-center justify-center flex-wrap">
          <AIInsightsToggle />
          <Button
            className="font-normal h-[40px] cursor-pointer"
            onClick={() => navigate("/survey-builder")}
          >
            <CirclePlus />
            Create New Survey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
