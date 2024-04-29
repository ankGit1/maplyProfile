import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "0-20", age: 1164, color: "#8884d8" },
  { name: "21-30", age: 4584, color: "#82ca9d" },
  { name: "31-40", age: 3651, color: "#ff6b6b" },
  { name: "41-50", age: 2561, color: "#ffa500" },
  { name: "51- >", age: 3510, color: "#9b59b6" },
];
const COLORS = [
  "#228B22",
  "#00C49F",
  "#52d500",
  "#32CD32",
  "#7FFF00",
  "#82ca9d",
  "#ffc658",
];

const BarGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={300} className="small-p py-2">
      <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 10 }}>
        <XAxis
          dataKey="name"
          label={{ value: "User's Age", position: "insideBottom", offset: -5 }}
          stroke="green"
        />
        <YAxis stroke="green" />
        <Tooltip />
        <Bar dataKey="age" fill="#00a0fc">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
