import styled from "styled-components";

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
    bottom: 20px;
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
  border-left: ${(props) => (props.isCheck ? "2px solid #3F8CFF" : "none")};
  cursor: pointer;
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
