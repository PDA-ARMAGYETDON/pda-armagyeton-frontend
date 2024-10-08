import styled from "styled-components";
import UpdateSlider from "../../slider-bar/UpdateSliderBar";
import { useState } from "react";
import { RoleVoteSuggest } from "../../../lib/apis/apis";
import { useParams } from "react-router-dom";
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

const TradingRule = ({ onClose, groupInfo, type }) => {
  const [val, setVal] = useState(2);
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  const onClickSuggest = async () => {
    const data = {
      type: type,
      tradeUpvotes: val,
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

  console.log(groupInfo);
  return (
    <>
      <GroupWriteItem>
        <li>
          <span>찬성 인원</span>
        </li>
        <UpdateSlider
          name="tradeUpvotes"
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

export default TradingRule;
