import { Button } from "~/components/ui/button";

const Tabs = ({ activeTab, setActiveTab }: any) => {
  const tabs = ["Responses", "Key Insights"];

  return (
    <div className="border inter inline-flex bg-white border-[#E4E4E7] rounded-[6px] p-[5px] flex-row gap-[10px] flex-wrap items-center">
      {tabs.map((tab) => (
        <Button
          key={tab}
          variant={"ghost"}
          className={`text-[14px] font-medium px-[12px] py-[6px] rounded-[3px] ${
            activeTab === tab
              ? "text-[#0F172A]  bg-[#F4F4F5]"
              : "text-[#334155]"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
