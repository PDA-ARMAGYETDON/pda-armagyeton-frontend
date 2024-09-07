import { motion } from "framer-motion";
import styled from "styled-components";
import travleImage from "../../../public/images/travel.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { UserTeams } from "../../lib/apis/apis";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedGroupId } from "../../store/reducers/Group";

// 바텀 모달 배경 스타일
const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  max-width: 480px;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: linear-gradient(to right, #b4d0fa, #5b69e5);
  width: 100%;
  max-width: 480px;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 50px 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & li::marker {
    color: #3f8cff;
  }
`;

const ListDiv = styled.div`
  width: 96%;
  border-radius: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 0px;
  margin-bottom: 20px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    cursor: pointer;
  }
`;

const ListItemLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CurUserLogo = styled.div`
  width: 70px;
  height: 70px;
  background-image: url(${travleImage});
  border: 3px solid white;
  background-size: cover;
  border-radius: 50%;
  margin-right: 10px;
  position: absolute;
  left: 50% - 70px;
  top: -30px;
`;

const UserLogo = styled.div`
  width: 33px;
  height: 33px;
  background-image: url(${travleImage});
  background-size: cover;
  margin-right: 10px;
`;

const Complete = styled(CheckCircleIcon)`
  color: #3f8cff;
  font-size: 1.3rem !important;
`;

const Pending = styled.span`
  background-color: #ff55da;
  padding: 4px 8px;
  border-radius: 30px;
  color: white;
  font-size: 0.6rem;
`;

const AddGroupDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 0px;

  &:hover {
    cursor: pointer;
  }
`;

const AddGroup = styled(AddIcon)`
  border-radius: 50%;
  font-size: 1.7 !important;
`;
const CheckListModal = ({ isOpen, onClose }) => {
  const [teamData, setTeamData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTeams = async () => {
      const result = await UserTeams();
      if (result) {
        console.log(result.data);
        setTeamData(result.data);
      }
    };
    fetchTeams();
  }, []);

  console.log(teamData);

  const onClickMoveToTeam = (e) => () => {
    if (e.status === null) {
      navigate(`/group/${e.teamId}/pending`);
    } else {
      navigate(`/group/${e.teamId}`);
    }
    console.log(e);
    dispatch(setSelectedGroupId(e.teamId));
  };
  return isOpen ? (
    <Backdrop onClick={onClose}>
      <ModalContent
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CurUserLogo></CurUserLogo>
        <ListDiv>
          {teamData.map((e, i) => {
            return (
              <ListItem key={i} onClick={onClickMoveToTeam(e)}>
                <ListItemLeft>
                  <UserLogo></UserLogo>
                  <span>{e.teamId}</span>
                </ListItemLeft>
                {e.status !== null ? (
                  <div>
                    <Complete />
                  </div>
                ) : (
                  <div>
                    <Pending>진행중</Pending>
                  </div>
                )}
              </ListItem>
            );
          })}
          {/* <ListItem>
            <ListItemLeft>
              <UserLogo></UserLogo>
              <span>에스파는 나야</span>
            </ListItemLeft>
            <div>
              <Complete />
            </div>
          </ListItem>

          <ListItem>
            <ListItemLeft>
              <UserLogo></UserLogo>
              <span>제주도 가자</span>
            </ListItemLeft>
            <div>
              <Pending>진행중</Pending>
            </div>
          </ListItem> */}

          <AddGroupDiv onClick={() => navigate(`/group/write`)}>
            <ListItemLeft>
              <div
                style={{
                  backgroundColor: "#F8F8F8",
                  borderRadius: "50%",
                  padding: "5px",
                  marginRight: "10px",
                  width: "33px",
                  height: "33px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AddGroup />
              </div>
              <span style={{ fontSize: "0.8rem", color: "rgba(0,0,0,0.8)" }}>
                새로운 모임 생성하기
              </span>
            </ListItemLeft>
            <div></div>
          </AddGroupDiv>
        </ListDiv>
      </ModalContent>
    </Backdrop>
  ) : null;
};

export default CheckListModal;
