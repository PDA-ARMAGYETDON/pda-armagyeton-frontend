import { motion } from "framer-motion";
import styled from "styled-components";

const ModalOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled(motion.div)`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 300px;
  width: 70%;
  text-align: center;
`;

const CheckBtn = styled.button`
  width: 90px;
  padding: 3px 10px;
  border: none;
  color: white;
  background-color: #3f8cff;
  border-radius: 20px;
`;

const CheckCancelBtn = styled.button`
  width: 90px;
  padding: 3px 10px;
  border: none;
  color: white;
  background-color: #979797;
  border-radius: 20px;
`;

const RoleVoteModal = ({
  isOpen,
  onClose,
  onConfirmVote,
  handlePartiModalClose,
  currentVoteType,
}) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    handlePartiModalClose();
  };
  console.log(currentVoteType);

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ModalContent
        initial={{ y: "-100px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100px", opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            fontSize: "1rem",
            fontWeight: "600",
            display: "flex",
            flexDirection: "column",
            marginBottom: "30px",
          }}
        >
          {currentVoteType === "PROS" ? (
            <span>찬성하시겠습니까?</span>
          ) : (
            <span>반대하시겠습니까?</span>
          )}

          <span>한 번 투표하면 재투표할 수 없어요</span>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <CheckBtn onClick={onConfirmVote} style={{}}>
            예
          </CheckBtn>
          <CheckCancelBtn onClick={handleClose}>아니요</CheckCancelBtn>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default RoleVoteModal;
