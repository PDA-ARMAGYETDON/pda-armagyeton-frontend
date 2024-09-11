import { useEffect, useState } from "react";
import StockUIPage from "./Stock.presenter";
import { ChartData } from "../../../../lib/apis/apis";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const StockPage = () => {
  const [stockData, setStockData] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [eventSource, setEventSource] = useState(null);
  const [chartData, setChartData] = useState([]);
  const STOCK_SYSTEM_URL = import.meta.env.VITE_STOCK_SYSTEM_URL;
  const { code } = useParams();

  // useEffect(() => {
  //   const newEventSource = new EventSource(
  //     `http://localhost:8082/api/stocks/realtime/${stockCode}`
  //   );

  //   newEventSource.onmessage = function (event) {
  //     const data = JSON.parse(event.data);
  //     setStockData(data);
  //   };

  //   newEventSource.onerror = function (error) {
  //     console.error("EventSource 에러 발생:", error);
  //     newEventSource.close();
  //     setEventSource(null);
  //     setIsConnected(false);
  //     sessionStorage.setItem("isConnected", "false");
  //   };

  //   setEventSource(newEventSource);

  //   return () => {
  //     newEventSource.close();
  //     setEventSource(null);
  //   };
  // }, []);

  useEffect(() => {
    const fetchDate = async () => {
      const token = localStorage.getItem("TOKEN");
      const res = await axios.get(
        `${STOCK_SYSTEM_URL}/api/stocks/current-price?stockCode=${code}`,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res);
    };
    fetchDate();
  }, []);

  useEffect(() => {}, [code]);

  useEffect(() => {
    const fetchChart = async () => {
      const res = await ChartData(code);
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
