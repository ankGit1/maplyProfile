import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Australia", value: 1150 },
  { name: "S.America", value: 2050 },
  { name: "N.America", value: 1246 },
  { name: "Europe", value: 3548 },
  { name: "Asia", value: 5472 },
  { name: "Africa", value: 2968 },
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
const PieGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          label
          outerRadius={80}
          fill="#8884d8"
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieGraph;
