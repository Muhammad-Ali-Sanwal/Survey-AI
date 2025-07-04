import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import Citations from "./Citations";
import AIAssistant from "./AIAssistant";
import { useState } from "react";
import DetailedReportTabs from "./Tabs";

const surveyData = [
  {
    title: "Price vs. Feature Comparison with Competitors",
    description:
      "This section explores how customers perceive the fairness of the current pricing structure. It includes whether they feel they are getting good value for their money and whether the pricing is transparent and justified.",
    sourceCount: "+9",
  },
  {
    title: "Customer Perception of Pricing Fairness",
    description:
      "This section explores how customers perceive the fairness of the current pricing structure. It includes whether they feel they are getting good value for their money and whether the pricing is transparent and justified.",
    sourceCount: "+5",
  },
  {
    title: "Pricing Transparency and Clarity",
    description:
      "This section explores how customers perceive the fairness of the current pricing structure. It includes whether they feel they are getting good value for their money and whether the pricing is transparent and justified.",
    sourceCount: "+3",
  },
];

const DetailedReport = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Citations");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Citations":
        return <Citations />;
      case "Your AI Assistant":
        return <AIAssistant />;
      default:
        return <Citations />;
    }
  };
  return (
    <div className="flex flex-col lg:flex-row max-lg:gap-5 w-full">
      <div className="flex flex-col flex-1">
        <div className="border-b border-b-[#E0E0E0] flex gap-2 items-center py-[21px] px-[70px]">
          <ArrowLeft
            onClick={() => navigate("/all-surveys/pricingSurvay")}
            className="cursor-pointer"
          />
          <p className=" text-[16px] font-semibold">
            Pricing Satisfaction Survey{" "}
            <span className="text-[12px] text-[#71717A]">
              (Detailed Report)
            </span>
          </p>
        </div>
        <div className="mt-[37px] pl-[70px] max-lg:px-[40px] px-4">
          <p className="text-[16x] font-bold mb-2">AI-Powered Synthesis</p>
          <p className="text-[13px] font-medium">
            AI identifies themes, codes responses, and summaries the results
            based on your question of the data.
          </p>
          <div className="flex mt-[37px] flex-col gap-4">
            {surveyData.map((card, index) => (
              <div
                key={index}
                onClick={() =>
                  setSelectedIndex(selectedIndex === index ? null : index)
                }
                className={`rounded-[10px] border py-[27px] pl-[29px] pr-[55px] cursor-pointer transition-colors duration-200 ease-in-out ${
                  selectedIndex === index
                    ? "border-[#1E42FF]"
                    : "border-[#E0E0E0]"
                }`}
              >
                <p className="text-[16px] font-bold">{card.title}</p>
                <p className="mt-2 text-[#3D3D3DCC] text-[13px] font-medium">
                  {card.description}
                </p>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    selectedIndex === index ? "max-h-[500px] mt-4" : "max-h-0"
                  }`}
                >
                  <div className="p-4 mt-2">
                    <p className="text-[13px] text-[#504E4EE5] font-medium">
                      This section analyzes customer perceptions regarding the
                      balance between pricing and the features offered compared
                      to competitors in the market. Respondents were asked to
                      evaluate whether the current pricing model reflects fair
                      value based on the functionality and benefits they
                      receive. The feedback sheds light on key areas such as:
                    </p>
                    <div className="mt-4 flex flex-col gap-4">
                      <li className="text-[13px] font-normal text-[#3D3D3DCC]">
                        <strong className="text-[13px] font-semibold text-[#3D3D3D]">
                          Perceived Value for Money:
                        </strong>{" "}
                        Whether users believe the price aligns with the
                        usefulness and quality of the product or service.
                      </li>
                      <li className="text-[13px] font-normal text-[#3D3D3DCC]">
                        <strong className="text-[13px] font-semibold text-[#3D3D3D]">
                          Pricing Transparency:
                        </strong>{" "}
                        If customers find the pricing structure easy to
                        understand and whether they feel adequately informed
                        about what they’re paying for.
                      </li>
                      <li className="text-[13px] font-normal text-[#3D3D3DCC]">
                        <strong className="text-[13px] font-semibold text-[#3D3D3D]">
                          Comparative Advantage:
                        </strong>{" "}
                        How customers view the product's pricing and features
                        compared to alternatives available from other providers.
                      </li>
                      <li className="text-[13px] font-normal text-[#3D3D3DCC]">
                        <strong className="text-[13px] font-semibold text-[#3D3D3D]">
                          Perceived Value for Money:{" "}
                        </strong>{" "}
                        Whether users believe the price aligns with the
                        usefulness and quality of the product or service.
                      </li>
                      <li className="text-[13px] font-normal text-[#3D3D3DCC]">
                        <strong className="text-[13px] font-semibold text-[#3D3D3D]">
                          Perceived Value for Money:{" "}
                        </strong>{" "}
                        Whether users believe the price aligns with the
                        usefulness and quality of the product or service.
                      </li>
                      <p className="text-[#504E4EE5] text-[13px] font-normal">
                        Overall, this section helps identify if there’s a
                        pricing gap, under- or over-delivery on features, or
                        opportunities to strengthen the value proposition in
                        order to remain competitive and customer-centric.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#F8F7FC] px-[22px] py-[6px]">
                  <p className="text-[13px] font-medium text-[#71717A]">
                    Sources
                  </p>
                  <div className="flex items-center -space-x-3">
                    <p className="z-10 rounded-full border border-[#DDDCDC] bg-white px-[10px] py-[7px] text-[11px] font-medium text-[#71717A]">
                      A
                    </p>
                    <p className="z-20 rounded-full border border-[#DDDCDC] bg-white px-[10px] py-[7px] text-[11px] font-medium text-[#71717A]">
                      A
                    </p>
                    <p className="z-30 rounded-full border border-[#DDDCDC] bg-white px-[10px] py-[7px] text-[11px] font-medium text-[#71717A]">
                      A
                    </p>
                    <p className="z-40 rounded-full bg-[#1E42FF] px-[10px] py-[7px] text-[11px] font-medium text-white">
                      {card.sourceCount}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[350px] 2xl:w-[420px] border-l px-[25px] py-[17px] flex flex-col items-center border-l-[#E0E0E0] bg-[#F7F7F7] min-h-screen">
        <DetailedReportTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderTabContent()}
      </div>
    </div>
  );
};

export default DetailedReport;
