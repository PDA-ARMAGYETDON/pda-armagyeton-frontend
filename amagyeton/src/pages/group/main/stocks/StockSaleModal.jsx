import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { SearchStocks } from "../../../../lib/utils/Stock";
import { FetchUserName, TradeBuySuggest } from "../../../../lib/apis/apis";
import { useParams } from "react-router-dom";
import { formatCurrency } from "../../../../lib/utils/formatCurrency";
import CompleteModal from "./CompleteModal";

const ModalOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 350px;
  width: 80%;
  text-align: center;
`;

const CheckCancelBtn = styled.button`
  width: 100px;
  padding: 6px 10px;
  color: black;
  background-color: #e6e6e6;
  border-radius: 15px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const CheckBtn = styled.button`
  width: 100px;
  padding: 6px 10px;
  color: white;
  background-color: #3f8cff;
  border-radius: 15px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const ModalDiv = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ModalDivItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  & span:nth-child(2) {
    font-weight: 500;
  }
`;

const Input = styled.input`
  width: 100px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: right;
`;

const IncrementDecrementButtons = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  &:hover {
    cursor: pointer;
    background-color: #d4d4d4;
  }
`;

const StockSaleModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const { code } = useParams();
  const stock = SearchStocks.find((stock) => stock.code === code);

  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchName = async () => {
      const res = await FetchUserName();
      setName(res.data);
    };
    fetchName();
  }, []);

  const getCurrentDate = () => {
    const today = new Date();
    return `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}.${String(today.getDate()).padStart(2, "0")}`;
  };

  const incrementQuantity = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);
  const decrementQuantity = () =>
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1)); // Prevent quantity less than 1

  // Handle input change for price
  const handlePriceChange = (e) => {
    const value = e.target.value;
    const numericValue = Number(value.replace(/^0+/, ""));

    if (!isNaN(numericValue) && numericValue >= 0) {
      setPrice(numericValue);
    }
  };

  const totalPrice = price * quantity;

  const handleSellSuggest = async () => {
    const data = {
      tradeType: "SELL",
      code: String(code),
      recentPrice: 0,
      wantPrice: price,
      quantity: quantity,
    };

    console.log(data);
    const res = await TradeBuySuggest(data);
    console.log(res);
  };

  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <ModalContent
          initial={{ y: "-100px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100px", opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <p style={{ fontSize: "1rem", fontWeight: "600" }}>
            <span>{stock.name}</span>
            <span style={{ color: "#3F8CFF", fontWeight: "600" }}> 매도 </span>
            제안하기
          </p>
          <ModalDiv>
            <ModalDivItem>
              <span>종목</span>
              <span>{stock.name}</span>
            </ModalDivItem>
            <ModalDivItem>
              <span>제안자</span>
              <span>{name}</span>
            </ModalDivItem>
            <ModalDivItem>
              <span>제안 일시</span>
              <span>{getCurrentDate()}</span> {/* Show current date */}
            </ModalDivItem>
            <ModalDivItem>
              <span>가격</span>
              <Input
                type="number"
                value={price === 0 ? "" : price}
                onChange={handlePriceChange}
                min="0"
                step="100"
              />
            </ModalDivItem>
            <ModalDivItem>
              <span>수량</span>
              <IncrementDecrementButtons>
                <Button onClick={decrementQuantity}>-</Button>
                <span>{quantity}주</span>
                <Button onClick={incrementQuantity}>+</Button>
              </IncrementDecrementButtons>
            </ModalDivItem>
            <ModalDivItem>
              <span>총 매도 가격</span>
              <span>{formatCurrency(totalPrice)}원</span>
            </ModalDivItem>
          </ModalDiv>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <CheckCancelBtn onClick={onClose}>취소</CheckCancelBtn>
            <CheckBtn onClick={handleSellSuggest}>제안</CheckBtn>
          </div>
        </ModalContent>
      </ModalOverlay>
      <CompleteModal isOpen={isOpen} onClose={onClose} type="SELL" />
    </>
  );
};

export default StockSaleModal;
