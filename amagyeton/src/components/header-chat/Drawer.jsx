import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

const DrawerWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 100%;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  width: 70%;
  max-width: 400px;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;

export const DrawerCustom = ({ open, onClose }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (open) {
      controls.start({ x: 0 });
    } else {
      controls.start({ x: "50%" });
    }
  }, [open, controls]);

  return (
    <>
      {open ? (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <DrawerWrapper
            animate={controls}
            initial={{ x: "100%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div style={{ padding: "20px" }}>Drawer Content</div>
          </DrawerWrapper>
        </Overlay>
      ) : null}
    </>
  );
};

export default DrawerCustom;
