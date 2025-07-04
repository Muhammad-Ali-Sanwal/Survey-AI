import { Button } from "~/components/ui/button";
import { CirclePlus, Ellipsis, TrendingUp, Users } from "lucide-react";
import SearchBar from "~/components/SearchBar";
import { useState } from "react";
import { Pagination } from "~/components/Pagination";
import FilterDropdown from "./parts/FilterDropDown";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useNavigate } from "react-router";
import TopBarMenu from "./parts/TopBarMenu";
import DeleteSurveyDialog from "./parts/ModelDialoges/DeleteSurveyDialog";
import PauseSurveyDialog from "./parts/ModelDialoges/PauseSurvayDialog";
export const AllSurveysData = [
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
    status: "Active",
    aim: "Understand market trends and customer preferences",
    responses: 100,
    completion: 50,
    createdOn: "05 May, 2025",
  },
  {
    name: "Product Feature Survey",
    status: "Draft",
    aim: "Evaluate interest in new product features",
    createdOn: "01 May, 2025",
  },
  {
    name: "Employee Satisfaction Survey",
    status: "Active",
    aim: "Measure employee satisfaction levels",
    responses: 150,
    completion: 60,
    createdOn: "15 April, 2025",
  },
  {
    name: "Website Usability Survey",
    status: "Draft",
    aim: "Collect feedback on website user experience",
    createdOn: "10 April, 2025",
  },
  {
    name: "Event Feedback Survey",
    status: "Active",
    aim: "Gather attendee feedback for recent event",
    responses: 250,
    completion: 85,
    createdOn: "05 April, 2025",
  },
  {
    name: "Brand Awareness Survey",
    status: "Active",
    aim: "Check public awareness of the brand",
    responses: 60,
    completion: 30,
    createdOn: "25 March, 2025",
  },
  {
    name: "New Product Launch Survey",
    status: "Active",
    aim: "Gauge interest for upcoming product launch",
    responses: 400,
    completion: 90,
    createdOn: "20 March, 2025",
  },
  {
    name: "Customer Support Satisfaction Survey",
    status: "Active",
    aim: "Collect feedback on customer support services",
    responses: 220,
    completion: 70,
    createdOn: "15 March, 2025",
  },
  {
    name: "Training Effectiveness Survey",
    status: "Draft",
    aim: "Evaluate effectiveness of training sessions",
    createdOn: "10 March, 2025",
  },
  {
    name: "Mobile App Feedback Survey",
    status: "Active",
    aim: "Gather feedback on mobile app experience",
    responses: 300,
    completion: 80,
    createdOn: "01 March, 2025",
  },
  {
    name: "Social Media Engagement Survey",
    status: "Draft",
    aim: "Understand audience engagement on social media",
    createdOn: "20 February, 2025",
  },
  {
    name: "Online Purchase Experience Survey",
    status: "Active",
    aim: "Collect feedback on online shopping experience",
    responses: 270,
    completion: 65,
    createdOn: "15 February, 2025",
  },
  {
    name: "Healthcare Service Survey",
    status: "Active",
    aim: "Measure patient satisfaction with healthcare services",
    responses: 180,
    completion: 55,
    createdOn: "10 February, 2025",
  },
  {
    name: "Remote Work Experience Survey",
    status: "Active",
    aim: "Evaluate employee experience with remote work",
    responses: 120,
    completion: 50,
    createdOn: "05 February, 2025",
  },
];

const AllSurveysPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openPauseSurveyDialog, setPauseSurveyDialog] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 9;

  const totalPages = Math.ceil(AllSurveysData.length / PAGE_SIZE);
  const paginatedSurvays = AllSurveysData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <TopBarMenu showMiddleNavigation />
      </div>
      <div className="max-w-[1300px] px-4 m-auto mt-[145px]">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <p className="text-[20px] font-semibold">All Surveys</p>
            <p className="text-[12px] font-medium text-[#797979] mt-[6px]">
              Monitor and manage responses across all your surveys.
            </p>
          </div>
          <Button
            className="font-normal h-[40px] cursor-pointer"
            onClick={() => navigate("/survey-builder")}
          >
            <CirclePlus />
            Create New Survey
          </Button>
        </div>
        <div className="flex mt-[40px] justify-between items-center flex-wrap gap-4">
          <SearchBar />
          <FilterDropdown />
        </div>
        <div className="grid grid-cols-1 mt-[32px] md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {paginatedSurvays.map((survey: any, index: number) => (
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
                      <Users color="#71717A" height={12} width={12} />
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
                      <TrendingUp color="#71717A" height={12} width={12} />
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
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalUsers={Users.length}
          onPageChange={(page) => setCurrentPage(page)}
          usersOnPage={paginatedSurvays.length}
        />
      </div>
    </div>
  );
};

export default AllSurveysPage;
