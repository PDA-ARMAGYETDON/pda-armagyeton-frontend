import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const CustomSlider = styled(Slider)`
  color: white;
  height: 23px;

  & .MuiSlider-rail {
    height: 15px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  & .MuiSlider-track {
    height: 15px;
    background-image: linear-gradient(
      270deg,
      rgba(63, 140, 255, 0.5) 0%,
      rgba(63, 140, 255, 0.1) 100%
    );
  }

  & .MuiSlider-markLabel {
    width: 15px;
    height: 15px;
    font-size: 0.875rem;
    position: absolute;
    top: 40px;
    right: -70px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
  }

  & .MuiSlider-markLabelActive {
    width: 15px;
    height: 15px;
    font-size: 0.875rem;
    position: absolute;
    top: 40px;
    left: 50px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export default function UpdateSlider(props) {
  const MAX = props.groupInfo.headCount;
  const MIN = 2;
  const marks = [
    {
      value: MIN,
      label: `${MIN}명`,
    },
    {
      value: MAX,
      label: `${MAX}명`,
    },
  ];

  return (
    <Box sx={{ width: "90%" }}>
      <CustomSlider
        marks={marks}
        step={1}
        value={props.val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={props.handleChange}
      />
    </Box>
  );
}
