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
  width: 70px;
  color: white;
  background-color: black;
  border-radius: 20px;
`;

const NonMemberModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
        <p style={{ fontSize: "1rem", fontWeight: "600" }}>
          로그인을 먼저 해주세요
        </p>
        <CheckBtn onClick={onClose}>확인</CheckBtn>
      </ModalContent>
    </ModalOverlay>
  );
};

export default NonMemberModal;
