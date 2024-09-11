import { motion } from "framer-motion";
import styled from "styled-components";

// 바텀 모달 배경 스타일
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: white;
  width: 100%;
  max-width: 480px;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;

  & li::marker {
    color: #3f8cff;
  }
`;

// Define role messages
const roleMessages = {
  bargain: {
    title: "매매 규칙",
    subTitle: [
      {
        title: "찬성 인원",
        info: "매매 제안이 올라오면, 해당 매매를 실행하기 위해서는 모임의 일정 수 이상의 인원이 찬성해야 합니다. 구체적으로, 제안이 승인되기 위해서는 모임 구성원 중 [정해진 인원 수]명이 매매에 찬성해야 합니다. 이 규칙은 매매 결정의 신뢰성과 공정성을 높이기 위한 절차입니다.",
      },
    ],
  },
  emergencyBargain: {
    title: "긴급 매도 규칙",
    subTitle: [
      {
        title: "전일 대비 등락율",
        info: "전일 대비 등락률이 설정한 기준 이하로 하락할 경우, 자동으로 매도할 수 있는 규칙이에요. 이 규칙을 통해 손실을 최소화하고, 자산을 보호할 수 있습니다.",
      },
      {
        title: "찬성 인원",
        info: "팀 내에서 설정된 찬성 인원 수 만큼 동의해야 원하는 종목을 매도할 수 있는 규칙입니다.",
      },
    ],
  },
  sell: {
    title: "매도 규칙",
    subTitle: [
      {
        title: "전일 대비 등락율",
        info: "매도 제안이 이루어질 때, 전일 대비 등락률을 기준으로 매도 여부를 결정합니다. 구체적으로, 주가가 전일 대비 [정해진 등락률]% 이하로 떨어지면 매도를 실행합니다. 이 규칙은 손실을 제한하고 투자 리스크를 관리하기 위한 절차입니다.”",
      },
    ],
  },
  buy: {
    title: "매수 규칙",
    subTitle: [
      {
        title: "찬성 인원",
        info: "매수 제안이 올라오면, 해당 매수를 실행하기 위해서는 모임의 [정해진 인원 수]명이 찬성해야 합니다. 즉, 제안을 승인하기 위해서는 모임 구성원 중 [정해진 인원 수]명이 매수에 동의해야 합니다. 이 규칙은 매수 결정의 신뢰성과 공정성을 확보하기 위한 절차입니다.",
      },
    ],
  },
  dissolution: {
    title: "해체 규정",
    subTitle: [
      {
        title: "전날 수익률",
        info: "팀의 해체는 전체 수익률을 기준으로 결정됩니다. 구체적으로, 전체 수익률이 [최대 증가율]% 이상 증가하거나 [최소 하락율]% 이하로 하락하면 팀을 해체합니다. 이 규칙은 팀의 성과를 명확히 평가하고, 목표 달성 여부에 따라 팀의 존속 여부를 결정하기 위한 절차입니다.",
      },
    ],
  },
};

const RoleModal = ({ isOpen, onClose, role }) => {
  const message = roleMessages[role] || {
    title: "Default Title",
    subTitle: ["Default message for unknown role."],
  };

  return isOpen ? (
    <Backdrop onClick={onClose}>
      <ModalContent
        initial={{ y: "100%" }} // Initial position
        animate={{ y: "0%" }} // Animation when opening
        exit={{ y: "100%" }} // Animation when closing
        transition={{ type: "spring", stiffness: 300, damping: 30 }} // Animation settings
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <span
          style={{
            fontWeight: "700",
            fontSize: "1.5rem",
          }}
        >
          {message.title}
        </span>
        <ul style={{ marginTop: "30px" }}>
          {message.subTitle.map((e, i) =>
            typeof item === "string" ? (
              <li key={i} style={{ marginBottom: "20px" }}>
                {e}
              </li>
            ) : (
              <li key={i} style={{ marginBottom: "20px" }}>
                <strong>{e.title}</strong>
                <br />
                <span
                  style={{
                    color: "#6D6D6D",
                    fontSize: "0.9rem",
                    display: "inline-block",
                    marginTop: "10px",
                  }}
                >
                  {e.info}
                </span>
              </li>
            )
          )}
        </ul>
      </ModalContent>
    </Backdrop>
  ) : null;
};

export default RoleModal;
