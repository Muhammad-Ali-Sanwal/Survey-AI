import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Badge } from "~/components/ui/badge";
import { Progress } from "~/components/ui/progress";
import { MessageSquare, Clock, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Pagination } from "~/components/Pagination";

const ResponseData = [
  {
    name: "Anonymous",
    sentiment: "Positive",
    responses: 8,
    completion: 100,
    dateTime: "12 May, 2025 - 14:32",
    duration: "3m 45s",
  },
  {
    name: "John Smith",
    sentiment: "Positive",
    responses: 8,
    completion: 100,
    duration: "3m 45s",
    dateTime: "12 May, 2025 - 14:32",
  },
  {
    name: "Anonymous",
    sentiment: "Neutral",
    responses: 7,
    completion: 78,
    duration: "3m 45s",
    dateTime: "12 May, 2025 - 14:32",
  },
  {
    name: "Sarah Johnson",
    sentiment: "Positive",
    responses: 8,
    completion: 78,
    duration: "3m 45s",
    dateTime: "12 May, 2025 - 14:32",
  },
  {
    name: "Anonymous",
    sentiment: "Positive",
    responses: 8,
    completion: 78,
    duration: "3m 45s",
    dateTime: "12 May, 2025 - 14:32",
  },
  {
    name: "Mike Chen",
    sentiment: "Negative",
    responses: 5,
    completion: 68,
    duration: "3m 45s",
    dateTime: "12 May, 2025 - 14:32",
  },
  {
    name: "Anonymous",
    sentiment: "Positive",
    responses: 12,
    completion: 100,
    duration: "3m 45s",
    dateTime: "12 May, 2025 - 14:32",
  },
  {
    name: "Anonymous",
    sentiment: "Neutral",
    responses: 7,
    completion: 78,
    duration: "3m 45s",
    dateTime: "12 May, 2025 - 14:32",
  },
  {
    name: "Anonymous",
    sentiment: "Positive",
    responses: 6,
    completion: 100,
    duration: "3m 45s",
    dateTime: "12 May, 2025 - 14:32",
  },
];

const getBadgeColor = (sentiment: string) => {
  switch (sentiment) {
    case "Positive":
      return "bg-[#DCFCE7] font-medium text-[12px] px-[10px] py-[2px] rounded-[100px] text-[#176A43]";
    case "Neutral":
      return "bg-[#F3F4F6] font-medium text-[12px] px-[10px] py-[2px] rounded-[100px] text-[#71717A]";
    case "Negative":
      return "bg-[#FEE2E2] font-medium text-[12px] px-[10px] py-[2px] rounded-[100px] text-[#A32344]";
    default:
      return "";
  }
};

const Responses = () => {
  const HeadStyles = "text-[#595858] text-[12px] font-medium";
  const TableDataStyles = "text-[#2A2828] h-[50px] text-[12px] font-medium";
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 9;

  const totalPages = Math.ceil(ResponseData.length / PAGE_SIZE);
  const paginatedResponses = ResponseData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div>
      <div className="border overflow-x-auto border-[#DEDEDE] !rounded-[10px]">
        <Table className="min-w-[1000px]">
          <TableHeader className="bg-[#F8F7FC] h-[56px]">
            <TableRow>
              <TableHead className={`pl-[43px] ${HeadStyles}`}>
                Respondent
              </TableHead>
              <TableHead className={HeadStyles}>Date /Time</TableHead>
              <TableHead className={HeadStyles}>Duration</TableHead>
              <TableHead className={HeadStyles}>Sentiment</TableHead>
              <TableHead className={HeadStyles}>Responses</TableHead>
              <TableHead className={HeadStyles}>Completion</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedResponses.map((item, i) => (
              <TableRow key={i}>
                <TableCell className={`pl-[43px] ${TableDataStyles}`}>
                  {item.name}
                </TableCell>
                <TableCell className={TableDataStyles}>
                  {item.dateTime}
                </TableCell>
                <TableCell className={TableDataStyles}>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {item.duration}
                  </div>
                </TableCell>
                <TableCell className={TableDataStyles}>
                  <span className={`${getBadgeColor(item.sentiment)}`}>
                    {item.sentiment}
                  </span>
                </TableCell>
                <TableCell className={TableDataStyles}>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {item.responses}
                  </div>
                </TableCell>
                <TableCell className="w-[140px]">
                  <div className="flex items-center gap-2">
                    <Progress value={item.completion} className="w-full h-2" />
                    <span className="text-xs font-medium">
                      {item.completion}%
                    </span>
                  </div>
                </TableCell>
                <TableCell className="w-[100px] cursor-pointer" align="center">
                  <a href="/all-surveys/pricingSurvay/detailed-report/response-details">
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground cursor-pointer" />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalUsers={ResponseData.length}
        onPageChange={(page) => setCurrentPage(page)}
        usersOnPage={paginatedResponses.length}
      />
    </div>
  );
};

export default Responses;
