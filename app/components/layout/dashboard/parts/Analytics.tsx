import { TrendingUp } from "lucide-react";

const Analytics = () => {
  return (
    <div>
      <p className="pt-[32px] pb-[16px] text-[16px] text-[#171744B2] font-medium">
        Analytics
      </p>
      <div className="grid gap-[18px] md:gap-[34px] grid-cols-2 lg:grid-cols-4">
        <div className="border border-[#EEEEEE] rounded-[10px] p-[22px] bg-[#F8F8F8]">
          <p className="text-[13px]">Survey Created</p>
          <p className="text-[22px] py-[15px] font-semibold">11</p>
          <div className="flex">
            <TrendingUp
              color="#83AD7D"
              strokeWidth={3}
              height={15}
              width={15}
            />
            <p className="text-[#83AD7D]  text-[10px] font-medium ml-1">
              5%{" "}
              <span className="text-[10px] text-[#ABABAB]">
                in the last 1 month
              </span>
            </p>
          </div>
        </div>
        <div className="border border-[#EEEEEE] rounded-[10px] p-[22px] bg-[#F8F8F8]">
          <p className="text-[13px]">Completion Rate</p>
          <p className="text-[22px] py-[15px] font-semibold">78%</p>
          <div className="flex">
            <TrendingUp
              color="#83AD7D"
              strokeWidth={3}
              height={15}
              width={15}
            />
            <p className="text-[#83AD7D] text-[10px] font-medium ml-1">
              5%{" "}
              <span className="text-[10px] text-[#ABABAB]">
                in the last 1 month
              </span>
            </p>
          </div>
        </div>
        <div className="border border-[#EEEEEE] rounded-[10px] p-[22px] bg-[#F8F8F8]">
          <p className="text-[13px]">Total Responses</p>
          <p className="text-[22px] py-[15px] font-semibold">1217</p>
          <div className="flex">
            <TrendingUp
              color="#83AD7D"
              strokeWidth={3}
              height={15}
              width={15}
            />
            <p className="text-[#83AD7D] text-[10px] font-medium ml-1">
              5%{" "}
              <span className="text-[10px] text-[#ABABAB]">
                in the last 1 month
              </span>
            </p>
          </div>
        </div>
        <div className="border border-[#EEEEEE] rounded-[10px] p-[22px] bg-[#F8F8F8]">
          <p className="text-[13px]">Avg. time to complete</p>
          <p className="text-[22px] py-[15px] font-semibold">2 mins </p>
          <div className="flex">
            <TrendingUp
              color="#83AD7D"
              strokeWidth={3}
              height={15}
              width={15}
            />
            <p className="text-[#83AD7D] text-[10px] font-medium ml-1">
              5%{" "}
              <span className="text-[10px] text-[#ABABAB]">
                in the last 1 month
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
