import { useEffect, useState } from "react";
import StockUIPage from "./Stock.presenter";
import { ChartData } from "../../../../lib/apis/apis";

const StockPage = ({ stockCode = "005930" }) => {
  const [stockData, setStockData] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [eventSource, setEventSource] = useState(null);
  const [chartData, setChartData] = useState([]);

  // WebSocket 연결 상태를 세션 스토리지에서 확인
  const checkWebSocketStatus = () => {
    return sessionStorage.getItem("isConnected") === "true";
  };

  const stopWebSocketSession = async () => {
    try {
      const response = await fetch(
        "http://localhost:8082/api/stocks/realtime/stop",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("WebSocket 종료");
        sessionStorage.setItem("isConnected", "false"); // 세션 스토리지에 연결 상태 저장
      } else {
        console.error("WebSocket 종료 실패");
      }
    } catch (error) {
      console.error("WebSocket 연결 중 오류 발생:", error);
    }
  };

  // WebSocket 연결을 설정하는 함수
  const startWebSocketSession = async () => {
    try {
      const response = await fetch(
        "http://localhost:8082/api/stocks/realtime/start",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("WebSocket 연결 시작됨");
        setIsConnected(true);
        sessionStorage.setItem("isConnected", "true"); // 세션 스토리지에 연결 상태 저장
      } else {
        console.error("WebSocket 연결 실패");
      }
    } catch (error) {
      console.error("WebSocket 연결 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    // 페이지가 처음 로드될 때 WebSocket 연결 시작
    if (!checkWebSocketStatus()) {
      startWebSocketSession();
    } else {
      setIsConnected(true);
    }

    // 새로고침 또는 페이지 이동 시 WebSocket 종료
    const handleBeforeUnload = async (event) => {
      await stopWebSocketSession();
      event.returnValue = ""; // 사용자에게 경고를 표시
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    if (isConnected) {
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
        sessionStorage.setItem("isConnected", "false"); // 연결이 끊기면 상태 초기화
      };

      setEventSource(newEventSource);

      return () => {
        newEventSource.close();
        setEventSource(null);
      };
    }
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
