import styled from "styled-components";
import UpdateSlider from "../../slider-bar/UpdateSliderBar";
import { useState } from "react";
import { useParams } from "react-router-dom";
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

export const GroupAmountDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const GroupWriteName = styled.input`
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

export const AmountSpan = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const EmergencySaleRule = ({ onClose, groupInfo, type }) => {
  const [val, setVal] = useState(2);
  const [num, setNum] = useState();
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  const onClickSuggest = async () => {
    const data = {
      type: type,
      prdyVrssRt: Number(num),
      tradeUpvotes: val,
    };
    console.log(data);
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
        <li>
          <span>전날 대비 등락율</span>
        </li>
        <GroupAmountDiv style={{ marginLeft: "22px" }}>
          <GroupWriteName
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <AmountSpan>%</AmountSpan>
        </GroupAmountDiv>
        <li>
          <span>찬성 인원</span>
        </li>
        <UpdateSlider
          name="EmergencytradeUpvotes"
          groupInfo={groupInfo}
          setVal={setVal}
          val={val}
          handleChange={handleChange}
        />
      </GroupWriteItem>
      <BtnDiv>
        <CancelBtn onClick={onClose}>취소</CancelBtn>
        <SuggestBtn onClick={onClickSuggest}>제안</SuggestBtn>
      </BtnDiv>
      <SuggestCompleteModal isOpen={isOpen} onClose={handleModalClose} />
    </>
  );
};

export default EmergencySaleRule;
