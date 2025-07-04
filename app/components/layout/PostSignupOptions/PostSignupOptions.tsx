import { Button } from "~/components/ui/button";
import { AuthLayout } from "../auth/signin/components/auth-layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopRightIcon = ({ stroke }: { stroke?: string }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2.16699 13.833L13.8337 2.16634M13.8337 2.16634V13.833M13.8337 2.16634H2.16699"
        stroke={stroke || "#71717A"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const TilesIcon = ({ fill }: { fill?: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4C2 2.89543 2.89543 2 4 2H9C10.1046 2 11 2.89543 11 4V9C11 10.1046 10.1046 11 9 11H4C2.89543 11 2 10.1046 2 9V4ZM9 4H4V9H9V4Z"
        fill={fill || "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 15C2 13.8954 2.89543 13 4 13H9C10.1046 13 11 13.8954 11 15V20C11 21.1046 10.1046 22 9 22H4C2.89543 22 2 21.1046 2 20V15ZM9 15H4V20H9V15Z"
        fill={fill || "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4C13 3.44772 13.4477 3 14 3H21C21.5523 3 22 3.44772 22 4C22 4.55228 21.5523 5 21 5H14C13.4477 5 13 4.55228 13 4Z"
        fill={fill || "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 9C13 8.44772 13.4477 8 14 8H21C21.5523 8 22 8.44772 22 9C22 9.55228 21.5523 10 21 10H14C13.4477 10 13 9.55228 13 9Z"
        fill={fill || "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 15C13 14.4477 13.4477 14 14 14H21C21.5523 14 22 14.4477 22 15C22 15.5523 21.5523 16 21 16H14C13.4477 16 13 15.5523 13 15Z"
        fill={fill || "#71717A"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 20C13 19.4477 13.4477 19 14 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H14C13.4477 21 13 20.5523 13 20Z"
        fill={fill || "#71717A"}
      />
    </svg>
  );
};

const PostSignupOptions = () => {
  const [selected, setSelected] = useState<null | "create" | "later">(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selected === "create") {
      navigate("/subscription-plans");
    } else if (selected === "later") {
      navigate("/dashboard");
    }
  };

  return (
    <AuthLayout>
      <div>
        <p className="text-[30px] mb-[35px] font-medium text-[#252525]">
          What you are looking to do?
        </p>

        <div
          onClick={() => setSelected("create")}
          className={`border cursor-pointer pl-[22px] rounded-[6px] flex flex-col gap-[12px] pt-[20px] pb-[30px] transition-colors duration-200 ${
            selected === "create" ? "border-[#1E42FF]" : "border-[#D6D6D6]"
          }`}
        >
          <TopRightIcon
            stroke={selected === "create" ? "#1E42FF" : "#868585"}
          />
          <p
            className={`text-[18px] font-semibold ${
              selected === "create" ? "text-[#1E42FF]" : "text-[#565656]"
            }`}
          >
            Begin Survey Creation
          </p>
          <p className="text-[#868585] text-[16px] font-medium">
            Start Building your first survey with us
          </p>
        </div>

        <div
          onClick={() => setSelected("later")}
          className={`border cursor-pointer mt-[35px] pl-[22px] rounded-[6px] flex flex-col gap-[12px] pt-[17px] pb-[30px] transition-colors duration-200 ${
            selected === "later" ? "border-[#1E42FF]" : "border-[#D6D6D6]"
          }`}
        >
          <TilesIcon fill={selected === "later" ? "#1E42FF" : "#868585"} />
          <p
            className={`text-[18px] font-semibold ${
              selected === "later" ? "text-[#1E42FF]" : "text-[#565656]"
            }`}
          >
            Create survey later
          </p>
          <p className="text-[#868585] text-[16px] font-medium">
            Get Straight to Dashboard
          </p>
        </div>
        <Button
          onClick={handleContinue}
          className="mt-[60px] h-[50px] w-full"
          disabled={!selected}
        >
          Continue
        </Button>
      </div>
    </AuthLayout>
  );
};

export default PostSignupOptions;
