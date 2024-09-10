import styled from "styled-components";
import { useParams } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { useState } from "react";
import { RoleVoteSuggest } from "../../../lib/apis/apis";
import SuggestCompleteModal from "../../vote-modal/VoteModal";

export const GroupWriteItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
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

export const GroupWriteShort = styled.input`
  width: 30%;
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
  margin-left: 20px;
  text-align: center;

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(73, 107, 186, 1);
  }
`;

const DisbandRule = ({ onClose, groupInfo, type }) => {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const onClickSuggest = async () => {
    const data = {
      type: type,
      maxLossRt: min,
      maxProfitRt: max,
    };
    const res = await RoleVoteSuggest(data);
    console.log(res);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    onClose();
    window.location.reload();
  };

  return (
    <>
      <GroupWriteItem>
        <li style={{ marginBottom: "10px" }}>
          <span>전날 수익률</span>
        </li>
        <GroupAmountDiv style={{ marginLeft: "22px" }}>
          <span style={{ fontSize: "0.9rem" }}>최대</span>
          <GroupWriteShort onChange={(e) => setMax(e.target.value)} />
          <AmountSpan>% 달성</AmountSpan>
        </GroupAmountDiv>

        <GroupAmountDiv style={{ marginLeft: "22px" }}>
          <span style={{ fontSize: "0.9rem" }}>최소</span>
          <GroupWriteShort onChange={(e) => setMin(e.target.value)} />
          <AmountSpan>% 하락</AmountSpan>
        </GroupAmountDiv>
      </GroupWriteItem>
      <BtnDiv>
        <CancelBtn onClick={onClose}>취소</CancelBtn>
        <SuggestBtn onClick={onClickSuggest}>제안</SuggestBtn>
      </BtnDiv>
      <SuggestCompleteModal isOpen={isOpen} onClose={handleModalClose} />
    </>
  );
};

export default DisbandRule;
