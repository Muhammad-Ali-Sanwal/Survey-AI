import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
const data = [
  { name: "Positive", value: 65 },
  { name: "Neutral", value: 22 },
  { name: "Negative", value: 13 },
];

const COLORS = ["#1E42FF", "#8EA0FF", "#D5DCFF"];

const SentimentAnalysisChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius="100%"
            dataKey="value"
            stroke="none"
            paddingAngle={0}
            startAngle={350}
            endAngle={-10}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </ResponsiveContainer>
  );
};
export default SentimentAnalysisChart;
