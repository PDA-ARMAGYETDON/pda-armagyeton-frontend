import Chart from "react-apexcharts";
import * as S from "./StockChart.style";

const LineChart = () => {
  // 데이터 정의
  const series = [
    {
      name: "Value",
      data: [
        { x: "2024-09-01", y: 15 },
        { x: "2024-09-02", y: 11 },
        { x: "2024-09-03", y: 23 },
        { x: "2024-09-04", y: 33 },
        { x: "2024-09-05", y: 42 },
        { x: "2024-09-06", y: 44 },
        { x: "2024-09-07", y: 60 },
        { x: "2024-09-08", y: 33 },
        { x: "2024-09-09", y: 22 },
        { x: "2024-09-10", y: 48 },
      ],
    },
  ];

  // 최고점과 최저점 찾기
  const dataPoints = series[0].data;
  const highestPoint = dataPoints.reduce((max, point) =>
    point.y > max.y ? point : max
  );
  const lowestPoint = dataPoints.reduce((min, point) =>
    point.y < min.y ? point : min
  );

  // ApexCharts 옵션 설정
  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: false, // 툴팁 비활성화
    },
    colors: ["#FF5733"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3.5,
    },
    grid: {
      show: false,
    },
    xaxis: {
      type: "datetime",
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: true,
        position: "back", // 수직선이 데이터 위에 나타나지 않도록 설정
        stroke: {
          color: "#FF5733", // 수직선 색상
          width: 1, // 선 두께
          dashArray: 0, // 선 스타일 (0은 실선, 4는 대시선 등)
        },
      },
    },
    yaxis: {
      show: false,
    },
    annotations: {
      points: [
        {
          x: new Date(highestPoint.x).getTime(),
          y: highestPoint.y,
          marker: {
            size: 3,
            fillColor: "#FF5733",
            strokeColor: "#FF5733",
            radius: 2,
          },
          label: {
            text: `최고 ${highestPoint.y}`,
            offsetY: -5,
            style: {
              color: "#FF5733",
              fontSize: "12px",
              fontFamily: "Arial, sans-serif",
              background: "#FFF",
              border: "1px solid #FF5733",
              borderRadius: "4px",
              padding: "4px 8px",
              textAlign: "center",
            },
          },
        },
        {
          x: new Date(lowestPoint.x).getTime(),
          y: lowestPoint.y,
          marker: {
            size: 3,
            fillColor: "#FF5733",
            strokeColor: "#FF5733",
            radius: 2,
          },
          label: {
            text: `최저 ${lowestPoint.y}`,
            offsetY: 30,
            style: {
              color: "#FF5733",
              fontSize: "12px",
              fontFamily: "Arial, sans-serif",
              background: "#FFF",
              border: "1px solid #FF5733",
              borderRadius: "4px",
              padding: "4px 8px",
              textAlign: "center",
            },
          },
        },
      ],
    },
  };

  return (
    <S.ChartDiv>
      <Chart options={options} series={series} type="line" height="100%" />
    </S.ChartDiv>
  );
};

export default LineChart;
