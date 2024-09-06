import { motion } from "framer-motion";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

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
  max-width: 0px;
  min-width: 400px;
  text-align: center;
`;

const AddressModal = ({ isOpen, onClose, handleAddressComplete }) => {
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
        <DaumPostcode onComplete={handleAddressComplete} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddressModal;
