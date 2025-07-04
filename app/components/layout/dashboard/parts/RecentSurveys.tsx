import { Ellipsis, MoveRight, TrendingUp, Users } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu";
import DeleteSurveyDialog from "./ModelDialoges/DeleteSurveyDialog";
import { useState } from "react";
import PauseSurveyDialog from "./ModelDialoges/PauseSurvayDialog";

const RecentSurveysData = [
  {
    name: "Customer Feedback Survey",
    status: "Active",
    aim: "Gather feedback on customer service experience",
    responses: 200,
    completion: 25,
    createdOn: "10 May, 2025",
  },
  {
    name: "Market Research Survey",
    aim: "Understand market trends and customer preferences",
    status: "Draft",
    createdOn: "05 May, 2025",
  },
  {
    name: "Product Feature Survey",
    status: "Active",
    aim: "Evaluate interest in new product features",
    responses: 300,
    completion: 75,
    createdOn: "01 May, 2025",
  },
];

const RecentSurveys = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [openPauseSurveyDialog, setPauseSurveyDialog] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center pt-[32px] pb-[16px] flex-wrap">
        <p className="text-[#171744B2] text-[16px] font-medium">
          Recent Surveys
        </p>
        <p
          className="flex items-center gap-2 text-[14px] text-[#1E42FF] font-medium cursor-pointer"
          onClick={() => {
            navigate("/all-surveys");
          }}
        >
          View All <MoveRight color="#1E42FF" />
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {RecentSurveysData.map((survey, index) => (
          <div
            className="border border-[#E0E0E0] rounded-[10px] p-[24px] h-full flex flex-col justify-between"
            key={index}
          >
            <div className="flex justify-between gap-2 items-center flex-wrap">
              <p className="text-[#2A2828] text-[16px] font-semibold">
                {survey.name}
              </p>
              <p
                className={`mt-[2px] text-[12px] font-medium px-[10px] py-[2px] rounded-2xl ${
                  survey.status === "Draft"
                    ? "text-[#71717A] bg-[#EEEEEE]"
                    : "text-[#176A43] bg-[#DCFCE7]"
                }`}
              >
                {survey.status}
              </p>
            </div>
            <p className="py-[16px] text-[#2A282866] text-[12px] font-medium">
              {survey.aim}
            </p>
            <div className="flex gap-[16px] justify-between items-center flex-wrap">
              {survey.responses && (
                <div className="flex flex-1 flex-col px-3 py-4 bg-[#F8F7FC] rounded-[6px]">
                  <div className="gap-1 flex items-center">
                    <Users color="#71717A" height={12} width={12} />{" "}
                    <p className="text-[#71717A] text-[12px]">Responses</p>
                  </div>
                  <p className="text-[18px] font-semibold text-[#252525] pt-2">
                    {survey.responses}
                  </p>
                </div>
              )}
              {survey.completion && (
                <div className="flex flex-1 flex-col px-3 py-4 bg-[#F8F7FC] rounded-[6px]">
                  <div className="gap-1 flex items-center">
                    <TrendingUp color="#71717A" height={12} width={12} />{" "}
                    <p className="text-[#71717A] text-[12px]">Completion</p>
                  </div>
                  <p className="text-[18px] font-semibold text-[#252525] pt-2">
                    {survey.completion}%
                  </p>
                </div>
              )}
            </div>
            <div className="flex mt-4 justify-between items-center flex-wrap">
              <p className="text-[#2A282899] text-[12px] font-medium">
                Created: {survey.createdOn}
              </p>
              {survey.status === "Active" ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Ellipsis className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-40"
                    side="bottom"
                    align="end"
                  >
                    <DropdownMenuItem
                      className="font-medium"
                      onClick={() => navigate("/all-surveys/pricingSurvay")}
                    >
                      Open
                    </DropdownMenuItem>
                    <DropdownMenuItem className="font-medium">
                      Copy Link
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="font-medium"
                      onClick={() => setPauseSurveyDialog(true)}
                    >
                      Pause
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-[#F37F66] hover:!text-[#F37F66] font-medium"
                      onClick={() => setOpenDialog(true)}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Ellipsis className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-40"
                    side="bottom"
                    align="end"
                  >
                    <DropdownMenuItem className="font-medium">
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-[#F37F66] hover:!text-[#F37F66] font-medium"
                      onClick={() => setOpenDialog(true)}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        ))}
      </div>
      <DeleteSurveyDialog
        open={openDialog}
        onOpenChange={setOpenDialog}
        onConfirm={() => {
          console.log("Survey deleted");
          setOpenDialog(false);
        }}
      />
      <PauseSurveyDialog
        open={openPauseSurveyDialog}
        onOpenChange={setPauseSurveyDialog}
        onConfirm={() => {
          console.log("Survey deleted");
          setPauseSurveyDialog(false);
        }}
      />
    </div>
  );
};

export default RecentSurveys;
