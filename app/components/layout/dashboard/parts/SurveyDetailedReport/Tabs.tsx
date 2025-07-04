import { Button } from "~/components/ui/button";

const DetailedReportTabs = ({ activeTab, setActiveTab }: any) => {
  const tabs = ["Citations", "Your AI Assistant"];

  return (
    <div className="border inter inline-flex relative bg-white border-[#E4E4E7] rounded-[6px] pl-[12px] pr-[22px] py-[8px] flex-row gap-[10px] flex-wrap items-center">
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant={"ghost"}
          className={`text-[14px] font-medium px-[12px]  py-[6px] rounded-[3px] ${
            activeTab === tab
              ? "text-[#252525]  bg-[#F4F4F5]"
              : "text-[#334155]"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab === "Your AI Assistant" ? (
            <span className="flex items-center gap-1">
              Your AI Assistant
              <span className="bg-[#1E42FF] text-white text-[10px] absolute top-1 right-4 font-medium px-[4px] py-[1px] rounded">
                Beta
              </span>
            </span>
          ) : (
            tab
          )}
        </Button>
      ))}
    </div>
  );
};

export default DetailedReportTabs;
