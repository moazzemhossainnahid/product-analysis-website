import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

const Chart = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  const data02 = [
    { name: "Group A", value: 2400 },
    { name: "Group B", value: 4567 },
    { name: "Group C", value: 1398 },
    { name: "Group D", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 },
  ];
  return (
    <div className="chartDiv">
      <div className="container">
        <div className="row mx-auto py-3">
          <div className="col-12 col-md-6 col-lg-6 py-3">
            <div className="lineChart">
              <h3 className="text-success">Month Wise Sell</h3>
              <LineChart className=" mx-auto" width={300} height={300} data={data}>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
              </LineChart>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 py-3">
            <div className="areaChart">
              <h3 className="text-success">Investment VS Revenue</h3>
              <AreaChart className=" mx-auto" width={300} height={300} data={data}>
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                <Area
                  type="monotone"
                  dataKey="investment"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
              </AreaChart>
            </div>
          </div>
        </div>
        <div className="row mx-auto py-3">
          <div className="col-12 col-md-6 col-lg-6 py-3">
            <div className="barChart mx-auto">
              <h3 className="text-success">Investment VS Revenue</h3>
              <BarChart className=" mx-auto" width={300} height={300} data={data}>
                <Bar
                  type="monotone"
                  dataKey="revenue"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                <Bar
                  type="monotone"
                  dataKey="investment"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
              </BarChart>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 py-3">
            <div className="pieChart mx-auto">
              <h3 className="text-success">Investment VS Revenue</h3>
              <PieChart className=" mx-auto" width={300} height={300} data={data}>
                <Pie
                  data={data01}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                />
                <Pie
                  data={data02}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#82ca9d"
                  label
                />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
