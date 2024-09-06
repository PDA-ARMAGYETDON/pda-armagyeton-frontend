import { useEffect, useState } from "react";
import styled from "styled-components";

// Styled Components
export const OrderBookContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const OrderList = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  max-height: 400px;
  overflow-y: auto;
  display: flex;
`;

export const OrderItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 0;
  color: ${(props) => (props.isSell ? "#3F8CFF" : "#EC2A2A")};
  position: relative;
  overflow: hidden; /* Ensure no overflow */
  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
`;

export const Quantity = styled.span`
  width: 50%;
  text-align: right;
  color: black;
  font-size: 0.8rem;
`;

export const QuantityLeft = styled.span`
  width: 50%;
  text-align: left;
  color: black;
  font-size: 0.8rem;
`;

export const Price = styled.span`
  width: 50%;
  text-align: center;
`;

export const QuantityBar = styled.div`
  position: absolute;
  bottom: 5px;
  height: 25px;
  background-color: ${(props) =>
    props.isSell ? "rgba(63, 140, 255, 0.15)" : "rgba(236, 42, 42, 0.15)"};
  border-radius: 5px;
  max-width: calc(50%); /* Ensure it doesn't overflow */
  width: ${(props) => `calc(${props.width}% / 2)`}; /* Dynamic width */
  left: ${(props) =>
    props.isSell
      ? `calc(50% - ${props.width}% / 2)`
      : "50%"}; /* Centered based on width */
  right: ${(props) =>
    props.isSell
      ? "unset"
      : `calc(50% - ${props.width}% / 2)`}; /* Positioning based on width */
`;

export const StockInfo = styled.div`
  width: 33%;
  text-align: center;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// OrderBook Component
const OrderBook = () => {
  const [sellOrders, setSellOrders] = useState([]);
  const [buyOrders, setBuyOrders] = useState([]);

  // Temporary function to generate random orders
  const generateRandomOrders = (type) => {
    return Array.from({ length: 5 }, (_, i) => ({
      price: (type === "sell" ? 100 : 90) + Math.random() * 10,
      quantity: Math.floor(Math.random() * 100) + 1,
      info: `Info ${i + 1}`,
    }));
  };

  useEffect(() => {
    // Simulating real-time data with temporary data
    const interval = setInterval(() => {
      setSellOrders(generateRandomOrders("sell"));
      setBuyOrders(generateRandomOrders("buy"));
    }, 1000); // Data updates every second

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <OrderBookContainer>
      {/* Sell Orders */}
      <OrderList>
        <div style={{ width: "66%" }}>
          {sellOrders.map((order, index) => (
            <OrderItem key={`sell-${index}`} isSell>
              <Quantity>{order.quantity}</Quantity>
              <Price>{order.price.toFixed(2)}</Price>
              <QuantityBar width={(order.quantity / 100) * 100} isSell />
            </OrderItem>
          ))}
        </div>
        <StockInfo>모아보기: 매도</StockInfo>
      </OrderList>
      <OrderList>
        <StockInfo>모아보기: 매수</StockInfo>
        <div style={{ width: "66%" }}>
          {buyOrders.map((order, index) => (
            <OrderItem key={`buy-${index}`}>
              <Price>{order.price.toFixed(2)}</Price>
              <QuantityLeft>{order.quantity}</QuantityLeft>
              <QuantityBar width={(order.quantity / 100) * 100} />
            </OrderItem>
          ))}
        </div>
      </OrderList>
    </OrderBookContainer>
  );
};

export default OrderBook;
