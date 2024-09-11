import Chart from "react-apexcharts";
import * as S from "./StockChart.style";

const LineChart = ({ chartData }) => {
  // 데이터 포맷 변환 함수
  const parseDate = (dateString) => {
    // "22.05,11"을 "2022-05-11"로 변환
    const [year, month, day] = dateString.split(/[.,]/);
    return new Date(`20${year}-${month}-${day}`).getTime();
  };

  console.log(chartData);

  // 데이터 정의
  const series = [
    {
      name: "Value",
      data: chartData.map((data) => ({
        x: parseDate(data.date),
        y: data.price,
      })),
    },
  ];

  // 최고점과 최저점 찾기
  const dataPoints = series[0].data;
  const highestPoint = dataPoints?.reduce(
    (max, point) => (point.y > max.y ? point : max),
    { x: null, y: -Infinity }
  );
  const lowestPoint = dataPoints?.reduce(
    (min, point) => (point.y < min.y ? point : min),
    { x: null, y: Infinity }
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
        highestPoint && {
          x: highestPoint.x,
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
        lowestPoint && {
          x: lowestPoint.x,
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
      ].filter(Boolean), // null 또는 undefined 필터링
    },
  };

  return (
    <S.ChartDiv>
      <Chart options={options} series={series} type="line" height="100%" />
    </S.ChartDiv>
  );
};

export default LineChart;
