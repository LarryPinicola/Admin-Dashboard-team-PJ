import React from "react";
import { v4 as uuidv4 } from "uuid";
import { PieChart, Pie, Cell, ResponsiveContainer, Dot } from "recharts";

const chartSettings = {
  donut: {
    data: [
      { name: "Custom Classes", value: 300, color: "#FFC405" },
      { name: "Different Types", value: 400, color: "#FF5668" },
      { name: "Credit Cards", value: 400, color: "#4D53E0" },
    ],
  },
};

const DonutChart = () => {
  return (
    <div className="" style={{ height: "316px" }}>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={chartSettings.donut.data}
            innerRadius={50}
            outerRadius={80}
            dataKey="value"
          >
            {chartSettings.donut.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="flex flex-col items-center">
        {chartSettings.donut.data.map((entry) => (
          <div className="flex items-center mt-[13px]" key={uuidv4()}>
            <Dot
              color={entry.color}
              className=""
              style={{ width: "8px", height: "8px", borderRadius: "50%" }}
            />
            <span className="">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
