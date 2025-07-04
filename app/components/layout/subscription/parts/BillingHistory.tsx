import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { BillingHistoryPlans } from "./subscriptionPlans";
import { EditIcon } from "lucide-react";
const TableHeadStyles = "text-[#2A2828] text-[13px] font-medium";
const TableDatatyles = "text-[#595858] text-[13px] font-medium";

const BillingHistory = () => {
  return (
    <div className="mt-[42px] border border-[#E0E0E0] rounded-[10px] p-[31px]">
      <p className="text-[#1D1D1D] text-[18px] font-medium mb-[25px]">
        Billing History
      </p>
      <Table className="min-w-[650px] w-full overflow-x-auto bg-white rounded-[10px] py-4">
        <TableHeader className="bg-[#F8FAFB] rounded-t-[10px]">
          <TableRow>
            <TableHead className={`${TableHeadStyles} pl-[26px]`}>
              Plan Name
            </TableHead>
            <TableHead className={TableHeadStyles}>Amounts</TableHead>
            <TableHead className={TableHeadStyles}>Purchase Date</TableHead>
            <TableHead className={TableHeadStyles}>End Date</TableHead>
            <TableHead className={TableHeadStyles}>Status</TableHead>
            <TableHead className={`${TableHeadStyles} pr-[15px]`}>
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="border border-[#F8F3F3]">
          {BillingHistoryPlans.map((plan, index) => (
            <TableRow key={index}>
              <TableCell className={`${TableDatatyles} pl-[26px]`}>
                {plan.planName}
              </TableCell>
              <TableCell className={TableDatatyles}>{plan.amount}</TableCell>
              <TableCell className={TableDatatyles}>
                {plan.purchaseDate}
              </TableCell>
              <TableCell className={TableDatatyles}>{plan.endDate}</TableCell>
              <TableCell className={TableDatatyles}>
                <span
                  className={`flex items-center space-x-2 ${
                    plan.status === "Processing"
                      ? "text-[#EE7C2A]"
                      : "text-[#0C756F]"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-current" />
                  <span>{plan.status}</span>
                </span>
              </TableCell>
              <TableCell className="cursor-pointer">
                <EditIcon color="#595858" height={15} width={15} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BillingHistory;
