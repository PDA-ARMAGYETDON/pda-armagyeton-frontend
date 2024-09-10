import { useEffect, useState } from "react";
import StockUIPage from "./Stock.presenter";
import { ChartData } from "../../../../lib/apis/apis";

const StockPage = ({ stockCode = "005930" }) => {
  const [stockData, setStockData] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [eventSource, setEventSource] = useState(null);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const newEventSource = new EventSource(
      `http://localhost:8082/api/stocks/realtime/${stockCode}`
    );

    newEventSource.onmessage = function (event) {
      const data = JSON.parse(event.data);
      setStockData(data);
    };

    newEventSource.onerror = function (error) {
      console.error("EventSource 에러 발생:", error);
      newEventSource.close();
      setEventSource(null);
      setIsConnected(false);
      sessionStorage.setItem("isConnected", "false");
    };

    setEventSource(newEventSource);

    return () => {
      newEventSource.close();
      setEventSource(null);
    };
  }, [isConnected, stockCode]);

  useEffect(() => {
    const fetchChart = async () => {
      const res = await ChartData();
      setChartData(res.data.stockPrices);
    };
    fetchChart();
  }, []);

  return (
    <>
      <StockUIPage stockData={stockData} chartData={chartData} />
    </>
  );
};

export default StockPage;
