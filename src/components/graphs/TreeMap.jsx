import React from "react";
import { Treemap, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Traveling", size: 1000, color: "#228B22", label: "Traveling" },
  { name: "Photography", size: 800, color: "#82ca9d", label: "Photography" },
  { name: "Cooking", size: 700, color: "#ffc658", label: "Cooking" },
  { name: "Hiking", size: 600, color: "#ff7300", label: "Hiking" },
  { name: "Reading", size: 500, color: "#0088FE", label: "Coding" },
  { name: "Music", size: 1000, color: "#00C49F", label: "Music" },
  { name: "Basketball", size: 800, color: "#FFBB28", label: "Language" },
  { name: "Yoga", size: 700, color: "#32CD32", label: "Yoga" },
  { name: "Gaming", size: 600, color: "#CD5C5C", label: "Gaming" },
  { name: "Art", size: 500, color: "#00CED1", label: "Art" },
  { name: "Gardening", size: 1000, color: "#52d500", label: "Gardening" },
  { name: "Fashion", size: 800, color: "#FFD700", label: "Fashion" },
  { name: "Writing", size: 600, color: "#20B2AA", label: "Writing" },
  {
    name: "Marketing",
    size: 500,
    color: "#7B68EE",
    label: "Marketing",
  },
];

const TreeMap = () => {
  const renderContent = (props) => {
    const { x, y, width, height, value, color, name, label } = props;

    return (
      <g>
        <rect x={x} y={y} width={width} height={height} fill={color} />
        <text
          x={x + width / 2}
          y={y + height / 2}
          fill="#fff"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {label}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={300} className="small-p">
      <Treemap
        height={300}
        data={data}
        dataKey="size"
        ratio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
        content={renderContent}
      >
        <Tooltip />
      </Treemap>
    </ResponsiveContainer>
  );
};

export default TreeMap;
