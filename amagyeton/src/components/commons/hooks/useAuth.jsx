import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import base64 from "base-64";

export const useAuth = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("TOKEN");
      if (!token) {
        setIsModalOpen(true);
        return;
      }

      try {
        const payload = token.split(".")[1];
        const decodedPayload = base64.decode(payload);
        const decodedData = JSON.parse(decodedPayload);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decodedData.exp < currentTime) {
          setIsModalOpen(true);
          localStorage.removeItem("TOKEN");
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("토큰이 유효하지 않습니다.", error);
        setIsModalOpen(true);
        localStorage.removeItem("TOKEN");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleModalClose = () => {
    setIsModalOpen(false);
    void navigate("/access");
  };

  return { isAuthenticated, isModalOpen, handleModalClose };
};
