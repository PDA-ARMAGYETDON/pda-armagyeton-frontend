import { useEffect, useState } from "react";
import StockUIPage from "./Stock.presenter";

const StockPage = ({ stockCode = "005930" }) => {
  const [stockData, setStockData] = useState([]);
  const [isConnected, setIsConnected] = useState(false); // WebSocket 연결 상태 관리

  // WebSocket 연결을 설정하는 함수 (start 요청)
  const startWebSocketSession = async () => {
    try {
      const response = await fetch(
        "http://localhost:8083/api/stocks/realtime/start",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("WebSocket 연결 시작됨");
        setIsConnected(true); // WebSocket 연결 성공 시 상태 업데이트
      } else {
        console.error("WebSocket 연결 실패");
      }
    } catch (error) {
      console.error("WebSocket 연결 중 오류 발생:", error);
    }
  };

  // Component가 처음 마운트되었을 때 WebSocket 연결을 시작
  useEffect(() => {
    startWebSocketSession(); // start 요청을 먼저 실행
  }, []);

  useEffect(() => {
    if (isConnected) {
      // WebSocket 연결이 성공적으로 된 후에만 실시간 데이터를 수신
      const eventSource = new EventSource(
        `http://localhost:8083/api/stocks/realtime/${stockCode}`
      );

      eventSource.onmessage = function (event) {
        const data = JSON.parse(event.data);
        setStockData(data); // 이전 데이터에 새로운 데이터를 추가
      };

      eventSource.onerror = function (error) {
        console.error("EventSource 에러 발생:", error);
        eventSource.close(); // 오류 발생 시 EventSource 닫기
      };

      return () => {
        eventSource.close(); // 컴포넌트가 언마운트될 때 EventSource 닫기
      };
    }
  }, [isConnected, stockCode]); // WebSocket 연결 상태와 종목 코드가 변경될 때만 이벤트 소스 설정

  return (
    <>
      <StockUIPage stockData={stockData} />
    </>
  );
};

export default StockPage;
