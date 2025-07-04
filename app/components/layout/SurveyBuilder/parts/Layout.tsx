import {
  Bell,
  ChevronDown,
  Dock,
  LogOut,
  Menu,
  Search,
  Settings,
} from "lucide-react";
import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

interface SurveyBuilderPageProps {
  imgSrc: string;
  title: string;
  description: string;
  children: ReactNode;
  ExcludeSkipButton?: boolean;
  OnSkip?: () => void;
  currentStep?: number;
}

const SurveyBuilderLayout: FC<SurveyBuilderPageProps> = ({
  imgSrc,
  title,
  description,
  children,
  ExcludeSkipButton = false,
  OnSkip = () => {},
  currentStep,
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="min-h-screen max-lg:hidden border-r border-r-[#E0E0E0] flex flex-col items-center justify-between w-[270px] fixed left-0 top-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/CreateSurveySideBarBGImage.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.04,
            zIndex: 0,
          }}
        />
        <div className="relative mt-[38px] z-10">
          <img
            src="LogoBlue.svg"
            alt="LogoIcon"
            className="cursor-pointer"
            onClick={() => navigate("/dashboard")}
          />
        </div>
        <div className="flex flex-col items-start px-[36px] gap-[16px]">
          <img src={`${imgSrc}`} alt="" />
          <p className="text-[29px] font-semibold text-[#252525] leading-[30px]">
            {title}
          </p>
          <p className="text-[14px] font-medium text-[#3D3D3D] leading-[20px]">
            {description}
          </p>
        </div>
        {ExcludeSkipButton ? (
          <div></div>
        ) : (
          <Button
            type="button"
            onClick={OnSkip}
            className="z-10 border border-[#e5e5e5] text-[#252525] text-[14px] font-medium rounded-[6px] mb-[38px] cursor-pointer"
            variant={"ghost"}
          >
            Skip for now
          </Button>
        )}
      </div>

      <div className="fixed max-md:hidden top-0 left-[270px] right-0 h-[80px] flex justify-between items-center bg-white border-b border-b-[#E0E0E0]">
        <div className="flex items-center ml-[75px] gap-1">
          <img src="/images/Sparkles.svg" alt="Sparkles" />
          <p className="text-[#252525] text-[20px] font-semibold">
            Survey Builder
          </p>
        </div>
        <div className="mr-[85px] flex gap-[3px]">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div
              key={dot}
              className={`h-[8px] w-[8px] rounded-full ${
                (currentStep ?? 0) >= dot ? "bg-[#2563EB]" : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="lg:hidden z-50 shadow-sm fixed top-0 left-0 right-0 bg-white px-4 flex justify-between items-center h-[80px]">
        <div className="flex gap-2 items-center">
          <Menu
            color="#171744"
            className="bg-[#F8F8F8] rounded-full p-2 h-[32px] w-[32px]"
          />
          <img
            src="LogoBlue.svg"
            alt="LogoIcon"
            className="cursor-pointer"
            onClick={() => navigate("/dashboard")}
          />
        </div>
        <div className="flex gap-2.5 sm:gap-6 items-center">
          <Search size={16} color="black" />
          <Bell size={16} color="black" />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center border-none outline-none ring-none gap-2 cursor-pointer">
              <span className="bg-primary px-[15px] py-[10px] text-center text-white text-[12px] font-semibold rounded-full">
                A
              </span>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-[200px]" align="end">
              <DropdownMenuItem
                onClick={() => {
                  navigate("/settings");
                }}
                className="py-[11px] pl-[13px] text-sm font-medium text-[#2E2E2E]"
              >
                My Account
              </DropdownMenuItem>
              <div className="border-t border-t-[#EEEEEE]" />
              <DropdownMenuItem
                className="text-[#2E2E2E] text-[14px]"
                onClick={() => {
                  navigate("/subscription");
                }}
              >
                <Dock className="mr-2 h-4 w-4" color="#2E2E2E" />
                Subscription
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-[#2E2E2E] text-[14px]"
                onClick={() => {
                  navigate("/settings");
                }}
              >
                <Settings className="mr-2 h-4 w-4" color="#2E2E2E" />
                Settings
              </DropdownMenuItem>
              <div className="border-t border-t-[#EEEEEE]" />

              <DropdownMenuItem
                className="text-[#DC2626] text-[14px] hover:!text-[#DC2626]"
                onClick={() => {
                  navigate("/sign-in");
                }}
              >
                <LogOut className="mr-2 h-4 w-4" color="#DC2626" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div
        className="lg:hidden flex mx-4 sm:mx-12 flex-col gap-[12px] items-center justify-center mt-32 my-[32px] border-t border border-[#E0E0E0] px-[16px] py-5 rounded-[10px] relative"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="absolute inset-0 rounded-[10px]"
          style={{
            backgroundImage: `url('/images/CreateSurveySideBarBGImage.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "rgba(255,255,255,0.04)",
            opacity: 0.04,
            zIndex: 0,
          }}
        />
        <img
          src={`${imgSrc}`}
          alt=""
          className="h-[35px] w-[35px] relative z-10"
        />
        <p className="text-[29px] text-center font-semibold text-[#252525] leading-[30px] relative z-10">
          {title}
        </p>
        <p className="text-[12px] text-center font-normal text-[#565656] relative z-10">
          {description}
        </p>
      </div>
      <div className="lg:pl-[345px] w-full">{children}</div>
    </div>
  );
};

export default SurveyBuilderLayout;
