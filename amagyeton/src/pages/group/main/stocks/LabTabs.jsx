import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import LineChart from "./StockChart";
import styled from "styled-components";
import OrderBook from "./OrderBook";

// 스타일 컴포넌트
const DateBtnDiv = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px; /* 상단에 여백 추가 */
`;

const DateBtn = styled.div`
  width: 24%;
  padding: 6px 0px;
  background-color: ${(props) =>
    props.selected ? "rgba(0, 0, 0, 0.04)" : "white"};
  color: ${(props) => (props.selected ? "black" : "rgba(0, 0, 0, 0.5)")};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 애니메이션 추가 */
`;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ chartData }) {
  const [value, setValue] = React.useState(0);
  const [selectedDate, setSelectedDate] = React.useState("1일");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Box sx={{ width: "100%", minHeight: "500px", height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        {/* Tabs 컴포넌트의 display 속성을 flex로 설정하고, justifyContent를 center로 설정합니다 */}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {/* Tab 컴포넌트의 width를 50%로 설정합니다 */}
          <Tab label="차트" {...a11yProps(0)} sx={{ width: "50%" }} />
          <Tab label="호가" {...a11yProps(1)} sx={{ width: "50%" }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <LineChart chartData={chartData} />
        <DateBtnDiv>
          <DateBtn
            selected={selectedDate === "1일"}
            onClick={() => handleDateChange("1일")}
          >
            1일
          </DateBtn>
          <DateBtn
            selected={selectedDate === "1주일"}
            onClick={() => handleDateChange("1주일")}
          >
            1주일
          </DateBtn>
          <DateBtn
            selected={selectedDate === "1달"}
            onClick={() => handleDateChange("1달")}
          >
            1달
          </DateBtn>
          <DateBtn
            selected={selectedDate === "1년"}
            onClick={() => handleDateChange("1년")}
          >
            1년
          </DateBtn>
        </DateBtnDiv>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <OrderBook />
      </CustomTabPanel>
    </Box>
  );
}
