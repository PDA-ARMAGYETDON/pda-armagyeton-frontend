import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const AccountSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const TextDiv = styled.div``;

export const ColorSpan = styled.span`
  color: #3f8cff;
`;

export const BigText = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const SmallText = styled.span`
  display: block;
  font-size: 0.9rem;
`;

export const User = styled.div`
  display: block;
  font-size: 0.85rem;
`;

export const FormDiv = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignupForm = styled.form`
  width: 90%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  padding: 20px 0px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignupNameDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;

  & label {
    color: #7d8592;
    font-size: 13px;
    margin-bottom: 5px;
  }

  & input {
    width: 100%;
    line-height: 1.5rem;
    padding: 10px 20px;
    border: 1px solid #d8e0f0;
    border: ${(props) =>
      props.hasError
        ? "1px solid rgba(255 , 0 , 0 , 0.5)"
        : "1px solid rgba(0,0,0,0.1)"};
    box-shadow: ${(props) =>
      props.hasError ? "0 0 5px rgba(255 , 0 , 0 , 0.5)" : "null"};
    border-radius: 10px;
  }

  & input:focus {
    outline: none;
    border-color: #306de7;
    box-shadow: 0 0 5px rgba(48, 109, 231, 0.5);
  }

  & input::placeholder {
    color: rgba(0, 0, 0, 0.3);
    font-size: 14px;
  }
`;

export const SubmitBtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SubmitBtn = styled.button`
  width: 70%;
  padding: 12px 40px;
  border: none;
  background-color: ${(props) =>
    props.isValid ? "#195efd" : "rgba(25, 94, 253, 0.6)"};

  border-radius: 14px;
  color: white;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.div`
  width: 100%;
  font-size: 12px;
  color: red;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  margin-top: 10px;
  padding-left: 5px;

  & span {
    margin-left: 10px;
  }
`;

export const ErrorIcon = styled(InfoIcon)`
  font-size: 0.9rem !important;
`;

export const ArrowIcon = styled(KeyboardArrowRightIcon)`
  color: rgba(0, 0, 0, 0.7);
  font-size: 1.2rem !important;
`;
export const CheckIcon = styled(CheckCircleIcon)`
  color: ${(props) => (props.isCheck ? "#195efd" : "rgba(0,0,0,0.4)")};
  font-size: 1.1rem !important;
  margin-right: 5px;
  transition: color 0.6s ease;
`;

export const AgreeDiv = styled.div`
  margin-top: 25px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const AgreeLeftDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    font-size: 0.8rem;
  }
`;
