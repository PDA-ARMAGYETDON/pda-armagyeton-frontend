import { motion } from "framer-motion";
import styled from "styled-components";
import travleImage from "../../../public/images/travel.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { ChangeAuth, UserTeams } from "../../lib/apis/apis";
import { useNavigate } from "react-router-dom";
import base64 from "base-64";

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

const CheckListModal = ({ isOpen, onClose, onSelectTeam }) => {
  const [teamData, setTeamData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      const result = await UserTeams();
      console.log(result);
      if (result) {
        setTeamData(result.data);
      }
    };
    fetchTeams();
  }, []);

  const onClickMoveToTeam = (team) => async () => {
    try {
      onSelectTeam(team);

      const res = await ChangeAuth(team.teamId);
      const newToken = res.data.jwtToken;

      const payload = newToken.split(".")[1];
      const decodedPayload = base64.decode(payload);
      const decodedData = JSON.parse(decodedPayload);

      localStorage.setItem("TOKEN", `Bearer ${newToken}`);

      // Navigate based on team status
      if (team.status === "PENDING") {
        navigate(`/group/${team.teamId}/pending`);
      } else {
        navigate(`/group/${team.teamId}`);
      }
    } catch (error) {
      console.error("Error fetching token or navigating:", error);
    }
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
          {teamData.map((team, i) => (
            <ListItem key={i} onClick={onClickMoveToTeam(team)}>
              <ListItemLeft>
                <UserLogo></UserLogo>
                <span>{team?.name}</span>
              </ListItemLeft>
              {team.status !== "PENDING" ? (
                <div>
                  <Complete />
                </div>
              ) : (
                <div>
                  <Pending>진행중</Pending>
                </div>
              )}
            </ListItem>
          ))}
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
