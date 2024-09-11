import { useState } from "react";
import Chart from "react-apexcharts";
import "./DonutChart.css";

const DonutChart = ({ hasStock }) => {
  const [chartOptions] = useState({
    options: {
      chart: {
        type: "donut",
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        verticalAlign: "bottom",
        offsetX: 0,
        offsetY: 0,
      },
      labels: hasStock.map((e) => e.stockName),
      colors: [
        "#FF6363", // Red
        "#13C999", // Teal
        "#456EFE", // Blue
        "#f6f327", // Yellow
        "#FF9F00", // Orange
        "#A75C6C", // Rose
        "#7B4DFF", // Purple
        "#2E8B57", // Sea Green
        "#FF6347", // Tomato
        "#8A2BE2", // Blue Violet
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%", // 화면 크기에 따라 차트 너비를 100%로 설정
            },
            legend: {
              position: "bottom",
              horizontalAlign: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
    series: hasStock.map((e) => e.ratio),
  });

  return (
    <div className="donut-chart-container">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="donut"
        width="100%" // 차트의 기본 너비를 100%로 설정
      />
      <div className="rate-text">13.4%</div>
    </div>
  );
};

export default DonutChart;
