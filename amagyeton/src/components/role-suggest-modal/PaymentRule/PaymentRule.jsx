import styled from "styled-components";
import { useParams } from "react-router-dom";
import DatePickerPage from "../../../pages/group/write/DatePicker";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Select from "react-select";
import { useState } from "react";
import { RoleVoteSuggest } from "../../../lib/apis/apis";
import SuggestCompleteModal from "../../vote-modal/VoteModal";

export const GroupWriteItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  & label {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: #3f8cff;

    & span {
      color: rgba(0, 0, 0, 0.7);
      font-size: 0.7rem;
    }
  }

  & li::marker {
    color: #3f8cff;
  }
`;

export const AmountSpan = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export const CalendarIcon = styled(CalendarTodayIcon)`
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
`;

export const GroupAmountDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const CancelBtn = styled.button`
  width: 120px;
  padding: 5px 10px;
  border: none;
  color: black;
  background-color: #e6e6e6;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
  }
`;
export const SuggestBtn = styled.button`
  width: 120px;
  padding: 5px 10px;
  border: none;
  color: white;
  background-color: #3f8cff;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const GroupWriteName = styled.input`
  width: 90%;
  border: none;
  border-bottom: ${(props) =>
    props.hasError
      ? "2px solid rgba(255, 0, 0, 0.6)"
      : "2px solid rgba(73, 107, 186, 0.7)"};
  line-height: 1.5rem;
  padding: 0.5rem 0;
  transition: border-bottom-color 0.3s ease;
  font-size: 1.1rem;
  margin-right: 5px;

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(73, 107, 186, 1);
  }
`;

const CustomSelect = styled(Select)`
  width: 90%;
  border-radius: 10px;
`;

const PaymentRule = ({ onClose, groupInfo, type }) => {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  const [payDate, setPayDate] = useState(new Date());
  const [price, setPrice] = useState();
  const [period, setPeriod] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onClickSuggest = async () => {
    console.log(type, groupInfo);
    const data = {
      type: type,
      period: period === "일주일" ? "WEEK" : "MONTH",
      payDate: payDate,
      depositAmt: price,
    };
    console.log(data);
    const res = await RoleVoteSuggest(data);
    console.log(res);
    setIsOpen(true);
  };

  const handlePerChange = (e) => {
    setPrice(e.target.value);
  };

  const handlePayCheckDate = (date) => {
    setPayDate(date.toISOString());
  };

  const handleModalClose = () => {
    setIsOpen(false);
    onClose();
    window.location.reload();
  };

  return (
    <>
      <GroupWriteItem>
        <label>1인당 기간별 납부 금액</label>
        <GroupAmountDiv>
          <GroupWriteName onChange={handlePerChange} />
          <AmountSpan>원</AmountSpan>
        </GroupAmountDiv>
      </GroupWriteItem>
      <GroupWriteItem>
        <label>납부시작일</label>
        <div style={{ position: "relative", width: "90%" }}>
          <DatePickerPage
            handleCheckDate={handlePayCheckDate}
            checkInDate={payDate}
            fieldName="payDate"
          />
          <CalendarIcon
            style={{ position: "absolute", right: "10px", top: "10px" }}
          />
        </div>
      </GroupWriteItem>
      <GroupWriteItem>
        <label>납부주기일</label>
        <CustomSelect
          onChange={(e) => setPeriod(e.value)}
          options={[
            { value: "일주일", label: "일주일" },
            { value: "한달", label: "한달" },
          ]}
          defaultValue={[{ value: "일주일", label: "일주일" }]}
          components={{
            IndicatorSeparator: null,
          }}
        />
      </GroupWriteItem>
      <BtnDiv>
        {console.log(isOpen)}
        <CancelBtn onClick={onClose}>취소</CancelBtn>
        <SuggestBtn onClick={onClickSuggest}>제안</SuggestBtn>
      </BtnDiv>
      <SuggestCompleteModal isOpen={isOpen} onClose={handleModalClose} />
    </>
  );
};

export default PaymentRule;
