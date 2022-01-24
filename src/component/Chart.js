import React, { useCallback, useState } from "react";
// import { Chart } from 'react-google-charts'
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const tokenomics = [
  { name: "Pre Sale", value: 46.45, fill: "#204788" },
  { name: "Launch", value: 32.6, fill: "#2755a5" },
  { name: "Pvt Sale", value: 10.7, fill: "#306acf" },
  { name: "Team", value: 7.5, fill: "#224a91" },
  { name: "Airdrop", value: 2.8, fill: "#2c60ba" },
];

const buyTax = [
  { name: "Marketing", value: 4, fill: "#2755a5" },
  { name: "LP", value: 1, fill: "#306acf" },
  { name: "Reflection", value: 1, fill: "#224a91" },
  { name: "Insurance", value: 1, fill: "#2c60ba" },
];

const sellTax = [
    { name: "Marketing", value: 4, fill: "#2755a5" },
    { name: "LP", value: 1, fill: "#306acf" },
    { name: "Reflection", value: 4, fill: "#224a91" },
    { name: "Insurance", value: 1, fill: "#2c60ba" },
  ];

const WkndTax = [
    { name: "Marketing", value: 8, fill: "#2755a5" },
    { name: "LP", value: 3, fill: "#306acf" },
    { name: "Reflection", value: 12, fill: "#224a91" },
    { name: "Insurance", value: 2, fill: "#2c60ba" },
  ];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 5) * cos;
  const sy = cy + (outerRadius + 5) * sin;
  const mx = cx + (outerRadius + 15) * cos;
  const my = cy + (outerRadius + 15) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 4}
        outerRadius={outerRadius + 8}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${value}%`}</text>
      {/* <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text> */}
    </g>
  );
};

export default function Charts() {
  const [tokenIndex, setTokenIndex] = useState(0);
  const onTokenEnter = useCallback(
    (_, index) => {
      setTokenIndex(index);
    },
    [setTokenIndex]
  );

  const [buyIndex, setBuyIndex] = useState(0);
  const onBuyEnter = useCallback(
    (_, index) => {
      setBuyIndex(index);
    },
    [setBuyIndex]
  );

  const [sellIndex, setSellIndex] = useState(0);
  const onSellEnter = useCallback(
    (_, index) => {
      setSellIndex(index);
    },
    [setSellIndex]
  );

  const [wkndIndex, setWkndIndex] = useState(0);
  const onWkndEnter = useCallback(
    (_, index) => {
      setWkndIndex(index);
    },
    [setWkndIndex]
  );

  return (
    <div className="w-100 h-50">
      <div className="row w-100 mt-3">
        <div className="col-md-6">
          <h3>Total Supply: 911911911 $BBT</h3>
          <ResponsiveContainer width="110%" height={300}>
            <PieChart>
              <Pie
                activeIndex={tokenIndex}
                activeShape={renderActiveShape}
                data={tokenomics}
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                onMouseEnter={onTokenEnter}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="col-md-6">
          <h3>Buy Tax (7%)</h3>
          <ResponsiveContainer width="110%" height={300}>
            <PieChart>
              <Pie
                activeIndex={buyIndex}
                activeShape={renderActiveShape}
                data={buyTax}
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                onMouseEnter={onBuyEnter}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="row w-100 mt-3">
        <div className="col-md-6">
          <h3>Sell Tax (10%)</h3>
          <ResponsiveContainer width="110%" height={300}>
            <PieChart>
              <Pie
                activeIndex={sellIndex}
                activeShape={renderActiveShape}
                data={sellTax}
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                onMouseEnter={onSellEnter}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="col-md-6">
          <h3>Weekend Sell Tax (25%)</h3>
          <ResponsiveContainer width="110%" height={300}>
            <PieChart>
              <Pie
                activeIndex={wkndIndex}
                activeShape={renderActiveShape}
                data={WkndTax}
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                onMouseEnter={onWkndEnter}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
