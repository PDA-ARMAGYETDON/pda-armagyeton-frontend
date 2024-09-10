import styled from "styled-components";
import { GoPlus } from "react-icons/go";
import { FaUserLarge } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

export const Section = styled.section`
  padding: 30px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 700;
`;

export const SectionItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RoleDiv = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 5px rgba(48, 109, 231, 0.5);
  overflow: hidden;
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.7);
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;

  & label {
    color: #3f8cff;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;

  .slick-slide {
    padding: 10px;
    border-radius: 20px;
    position: relative;
  }

  .slick-dots {
    position: absolute !important;
    bottom: 0px;
    display: flex !important;
    justify-content: center;
    align-items: center;
    gap: 2px;
    width: 100%;
    box-sizing: border-box;
  }

  .slick-dots li {
    margin: 0;
  }

  .slick-dots li button:before {
    color: #456efe;
    font-size: 7px;
  }

  .slick-dots li.slick-active button:before {
    color: #456efe;
  }
`;

export const AddRoleSuggest = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 1.5rem !important;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const PlusIcon = styled(GoPlus)``;

export const RoleInfoDiv = styled.div`
  margin-top: 50px;
`;

export const RoleInfoItem = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-left: ${(props) =>
    props.accept ? "" : props.isCheck ? "2px solid #3F8CFF" : ""};
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    z-index: 1;
    pointer-events: none;
    display: ${(props) => (props.accept ? "block" : "none")};
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;

export const AgreeButton = styled.button`
  padding: 5px 35px;
  background-color: #01df02;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 0.9rem;
`;

export const DisagreeButton = styled.button`
  padding: 5px 35px;
  background-color: #d40101;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 0.9rem;
`;

export const Participant = styled(FaUserLarge)`
  font-size: 1.2rem;
  margin-right: 5px;
  color: ${(props) => (props.isActive ? "#2AED57" : "#929292")};
`;

export const Voter = styled.div``;

export const NonSuggest = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  aspect-ratio: 4/3;

  & div {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const NonIcon = styled(MdCancel)`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

export const GroupWriteItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;

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
