const CitationsData = [
  {
    name: "John Smith",
    title: "SaaS Tool Comparison Report 2023",
    description:
      "Compared pricing tiers and features of top design tools including Figma, Adobe XD, and Sketch.",
  },
  {
    name: "Jane Doe",
    title: "Customer Feedback Analysis",
    description:
      "Analyzed customer feedback on pricing fairness and value perception for SaaS products.",
  },
  {
    name: "Michael Johnson",
    title: "Market Research on SaaS Pricing",
    description:
      "Conducted market research on pricing strategies of leading SaaS companies.",
  },
  {
    name: "Emily Davis",
    title: "Survey Results on Pricing Perception",
    description:
      "Collected survey data on customer perceptions of pricing fairness in SaaS tools.",
  },
];
const Citations = () => {
  return (
    <div className="mt-[46px] flex flex-col gap-5">
      {CitationsData.map((item, index) => {
        return (
          <div className="bg-white rounded-[8px] px-[17px] py-[24px]">
            <div className="flex items-center gap-1.5">
              <p className="bg-[#1E42FF] text-[12px] font-medium h-8 w-8 text-center pt-1.5 rounded-full border border-[#FFFFFF80] text-white">
                {item.name[0]}
              </p>
              <p className="text-[#2A2828] text-[12px] font-semibold">
                {item.name}
              </p>
            </div>
            <p className="text-[#2E2E2E] text-[11px] font-bold mt-[14px]">
              {item.title}
            </p>
            <p className="mt-2 text-[11px] text-[#2E2E2ECC]">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Citations;
