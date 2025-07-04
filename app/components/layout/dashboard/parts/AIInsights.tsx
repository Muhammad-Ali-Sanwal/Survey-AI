import PainPointsChart from "./charts/PainPointsChart";
import SentimentAnalysisChart from "./charts/SentimentAnalysisChart";

const AIInsights = () => {
  return (
    <div className="mt-[33px] mb-[20px] md:mb-[90px]">
      <div className="gap-[24px] flex lg:flex-row flex-col">
        <div className="flex flex-1 bg-white border border-[#DEDEDE] rounded-[10px]">
          <PainPointsChart />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center bg-white border border-[#DEDEDE] rounded-[10px]">
          <h2 className=" pl-[44px] pt-6  text-[20px] font-semibold self-start">
            Sentiment Analysis
          </h2>
          <SentimentAnalysisChart />
          <div className="flex pb-5 flex-wrap items-center justify-center gap-[10px]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 bg-[#1E42FF]" />
              <p>Positive 65%</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 bg-[#8EA0FF]" />
              <p>Neutral 22%</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 bg-[#D5DCFF]" />
              <p>Negative 13%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[23px] border rounded-[10px] border-[#DEDEDE] p-[37px]">
        <p className=" text-[20px] font-semibold mb-[24px]">Key Takeaways</p>
        <div className="flex flex-col gap-5">
          <div className="border border-[#97C4FF] rounded-[10px] bg-[#EFF6FF] py-[25px] px-[32px]">
            <p className="text-[#1E3A91] text-[16px] font-semibold mb-3">
              Main Pain Points
            </p>
            <p className="text-[#1E3A91B2] text-[12px] font-semibold">
              42% of respondents identified data integration as their biggest
              challenge, followed by performance issues (38%) and user interface
              concerns (27%).
            </p>
          </div>
          <div className="border border-[#97C4FF] rounded-[10px] bg-[#EFF6FF] py-[25px] px-[32px]">
            <p className="text-[#1E3A91] text-[16px] font-semibold mb-3">
              Feature Requests
            </p>
            <p className="text-[#1E3A91B2] text-[12px] font-semibold">
              The most requested features include API improvements (53%), mobile
              app enhancements (48%), and better documentation (37%).
            </p>
          </div>
          <div className="border border-[#97C4FF] rounded-[10px] bg-[#EFF6FF] py-[25px] px-[32px]">
            <p className="text-[#1E3A91] text-[16px] font-semibold mb-3">
              Satisfaction Drivers
            </p>
            <p className="text-[#1E3A91B2] text-[12px] font-semibold">
              Customer support (76%), ease of use (68%), and reliability (64%)
              were identified as the top factors driving customer satisfaction.
            </p>
          </div>
        </div>
      </div>
      <p className="my-5  text-[20px] font-semibold">Topic Analysis</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[40px] lg:grid-cols-4 ">
        <div className="border border-[#EEEEEE] rounded-[10px] p-[22px] flex flex-col gap-2">
          <p className="text-[13px] font-normal">Integration</p>
          <p className="text-[22px] font-semibold">62%</p>
          <p className="text-[#ABABAB] text-[10px]">Mention frequency</p>
        </div>
        <div className="border border-[#EEEEEE] rounded-[10px] p-[22px] flex flex-col gap-2">
          <p className="text-[13px] font-normal">User Interface</p>
          <p className="text-[22px] font-semibold">28%</p>
          <p className="text-[#ABABAB] text-[10px]">Mention frequency</p>
        </div>
        <div className="border border-[#EEEEEE] rounded-[10px] p-[22px] flex flex-col gap-2">
          <p className="text-[13px] font-normal">Analytics</p>
          <p className="text-[22px] font-semibold">44%</p>
          <p className="text-[#ABABAB] text-[10px]">Mention frequency</p>
        </div>
        <div className="border border-[#EEEEEE] rounded-[10px] p-[22px] flex flex-col gap-2">
          <p className="text-[13px] font-normal">Performance</p>
          <p className="text-[22px] font-semibold">17%</p>
          <p className="text-[#ABABAB] text-[10px]">Mention frequency</p>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
