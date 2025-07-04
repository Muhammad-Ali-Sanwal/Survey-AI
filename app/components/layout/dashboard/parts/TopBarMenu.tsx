import {
  Settings,
  LogOut,
  ChevronDown,
  Dock,
  ClipboardCheck,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const HomeIcon = ({ stroke = "#1E42FF" }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M0.5 8L7 1.5L13.5 8"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 6V12.5H11.5V6"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const TopBarMenu = ({ showMiddleNavigation = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="px-4 fixed top-0 left-0 right-0 bg-white w-full md:px-[86px] border-b border-b-[#EEEEEE] py-4 flex justify-between items-center h-[75px] z-50">
      <a href="/dashboard" className="cursor-pointer">
        <img src="/LogoBlue.svg" alt="Logo" />
      </a>
      {showMiddleNavigation && (
        <div className="flex items-center max-md:hidden gap-[10px] md:gap-[40px]">
          <div
            className="flex items-center cursor-pointer gap-2"
            onClick={() => navigate("/dashboard")}
          >
            <HomeIcon
              stroke={
                location.pathname === "/dashboard" ? "#1E42FF" : "#71717A"
              }
            />
            <p
              className={`text-[14px] font-medium ${
                location.pathname === "/dashboard"
                  ? "text-[#1E42FF]"
                  : "text-[#71717A]"
              }`}
            >
              Dashboard
            </p>
          </div>
          <div
            className="flex items-center cursor-pointer gap-2"
            onClick={() => navigate("/all-surveys")}
          >
            <ClipboardCheck
              color={
                location.pathname === "/all-surveys" ? "#1E42FF" : "#71717A"
              }
              height={20}
              width={20}
            />
            <p
              className={`text-[14px] font-medium ${
                location.pathname === "/all-surveys"
                  ? "text-[#1E42FF]"
                  : "text-[#71717A]"
              }`}
            >
              Surveys
            </p>
          </div>
        </div>
      )}
      <div className="flex items-center gap-[10px] lg:gap-[35px]">
        <div className="relative">
          <Dock color="#3D3D3D" height={24} width={24} />
          <span className="h-[6px] w-[6px] bg-[#F37F66] rounded-full absolute top-[1px] right-[-1px]"></span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center border-none outline-none ring-none gap-2 cursor-pointer">
            <span className="bg-primary px-[15px] py-[10px] text-center text-white text-[12px] font-semibold rounded-full">
              A
            </span>
            <span className="text-[16px] text-[black] font-normal">
              Anthony
            </span>
            <ChevronDown color="#7C8DB5" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-[200px]">
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
  );
};

export default TopBarMenu;
