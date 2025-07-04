import { Clock, MessageSquareIcon } from "lucide-react";

const RecentResponsesData = [
  {
    title: "Pricing Satisfaction Survey",
    status: "Positive",
    timeAgo: "2 days ago",
    duration: "3m 45s",
    author: "Anonymous",
    message:
      "Really impressed with the new features. The interface is much more intuitive...",
  },
  {
    title: "Customer Feedback",
    status: "Negative",
    timeAgo: "1 week ago",
    duration: "5m 20s",
    author: "Anonymous",
    message:
      "Really impressed with the new features. The interface is much more intuitive Really impressed with the new features. The interface is much more intuitive...",
  },
];
const RecentResponses = () => {
  return (
    <div>
      <p className="text-[#171744B2] pt-[32px] pb-[16px] text-[16px] font-medium">
        Recent Responses
      </p>
      <div className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-[35px]">
        {RecentResponsesData.map((item, index) => (
          <div className="border flex flex-col justify-between border-[#E0E0E0] rounded-[10px] p-[27px]">
            <div className="flex justify-between flex-wrap items-center">
              <div className="flex items-center gap-4 flex-wrap">
                <p className="text-[#2A2828] text-[16px] font-semibold">
                  {item.title}
                </p>
                <p
                  className={`${
                    item.status == "Positive"
                      ? "text-[#252525]"
                      : "text-[#176A43]"
                  } mt-[2px] text-[12px] font-medium px-[10px] py-[2px] rounded-2xl ${
                    item.status == "Negative" ? "bg-[#EEEEEE]" : " bg-[#DCFCE7]"
                  }`}
                >
                  {item.status}
                </p>
              </div>
              <p className="text-[#2A282866] text-[12px] font-medium">
                {item.timeAgo}
              </p>
            </div>
            <p className="py-[14px] text-[12px] font-medium text-[#617DA7]">
              by {item.author}
            </p>
            <p className="mb-5 text-[12px] font-medium text-[#2A282899]">
              {item.message}
            </p>
            <div className="flex items-center gap-[24px]">
              <div className="flex items-center gap-2">
                <Clock color="#2A282899" height={16} width={16} />{" "}
                <p className="text-[#2A282899] text-[12px] font-medium">
                  {item.duration}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquareIcon color="#2A282899" height={16} width={16} />{" "}
                <p className="text-[#2A282899] text-[12px] font-medium">
                  View transcript
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentResponses;
