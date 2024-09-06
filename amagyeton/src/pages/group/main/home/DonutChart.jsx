import { useState } from "react";
import Chart from "react-apexcharts";
import "./DonutChart.css";

const DonutChart = () => {
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
      labels: ["sk하이닉스", "네이버", "삼성전자", "카카오"],
      colors: ["#FF6363", "#13C999", "#456EFE", "#f6f327"],
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
    series: [44, 55, 41, 35],
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
