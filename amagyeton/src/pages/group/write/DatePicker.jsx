import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import "./DatePickerPage.css"; // CSS 파일 import

const DatePickerWrapper = styled.div`
  .input-datepicker {
    width: 100%;
    border-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px;
  }
`;

function DatePickerPage(props) {
  const today = new Date();
  const oneYearLater = new Date(today.setFullYear(today.getFullYear() + 1));

  return (
    <DatePickerWrapper>
      <DatePicker
        dateFormat="yyyy-MM-dd"
        className="input-datepicker"
        minDate={new Date()}
        maxDate={oneYearLater}
        closeOnScroll={true}
        placeholderText="체크인 날짜 선택"
        selected={props.checkInDate}
        onChange={(date) => {
          props.handleCheckDate(date);
          props.setValue(props.fieldName, date, { shouldValidate: true });
        }}
      />
    </DatePickerWrapper>
  );
}

export default DatePickerPage;
