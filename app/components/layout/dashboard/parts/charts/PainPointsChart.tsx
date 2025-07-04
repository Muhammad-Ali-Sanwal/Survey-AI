import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Performance", count: 55 },
  { name: "UserInterface", count: 38 },
  { name: "Mobile Support", count: 27 },
  { name: "Pricing", count: 18 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="gap-[2px] px-[11px] w-[123px] py-2 flex flex-col border border-[#DEDEDE] rounded-[4px] bg-white p-2 text-[#2A2828] text-[12px] font-medium">
        <p>{label}</p>{" "}
        <p className="text-[#1E42FF]">Count: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

export default function PainPointsChart() {
  return (
    <div className="pt-5 pb-2 pl-2 w-full max-w-md">
      <h2 className=" pl-[35px] text-[20px] font-semibold mb-[30px]">
        Pain Points
      </h2>
      <ResponsiveContainer width="100%" height={data.length * 70}>
        <BarChart
          layout="vertical"
          data={data}
          barSize={30}
          margin={{ left: 20 }}
        >
          <XAxis
            type="number"
            tick={{ fontSize: 12, fill: "#2A2828" }}
            axisLine={{ stroke: "#E5E5E5" }}
            tickLine={false}
          />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fontSize: 12, fill: "#2A2828" }}
            width={100}
            axisLine={{ stroke: "#E5E5E5" }}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
            contentStyle={{
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          />
          <Bar dataKey="count" radius={[0, 4, 4, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill="#1E42FF" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
