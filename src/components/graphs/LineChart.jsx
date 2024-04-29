import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Oct", users: 2154 },
  { name: "Nov", users: 2456 },
  { name: "Dec", users: 5168 },
  { name: "Jan", users: 7951 },
  { name: "Feb", users: 9684 },
  { name: "Mar", users: 11500 },
  { name: "Apr", users: 13587 },
];

const SimpleLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%" className="small-p p-2">
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 10, left: 20, bottom: 10 }}
      >
        <XAxis
          dataKey="name"
          label={{ value: "Months", position: "insideBottom", offset: -5 }}
          stroke="green"
        />
        <YAxis
          label={{
            value: "Users",
            angle: -90,
            position: "insideLeft",
            offset: -5,
          }}
          stroke="green"
        />
        <Tooltip />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="users" stroke="green" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
