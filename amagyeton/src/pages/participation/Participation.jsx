import { useState, useRef, useEffect } from "react";
import ParticipationUIPage from "./Participation.presenter";
import { useNavigate, useLocation } from "react-router-dom";

const ParticipationPage = () => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const inputRefs = useRef([]);
  const CODE_LENGTH = 6;

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const codeFromUrl = query.get("code") || "";
    if (codeFromUrl.length === 6) {
      const newCode = codeFromUrl.toUpperCase().split("");
      setCode(newCode);
      codeCheck(newCode);
    }
  }, [location.search]);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value.toUpperCase();
    setCode(newCode);
    codeCheck(newCode);

    if (value && index < CODE_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (event) => {
    const paste = event.clipboardData.getData("text").toUpperCase();
    if (paste.length <= CODE_LENGTH) {
      const newCode = paste.split("").slice(0, CODE_LENGTH);
      setCode(newCode);
      codeCheck(newCode);
      newCode.forEach((char, i) => {
        if (inputRefs.current[i]) inputRefs.current[i].value = char;
      });
      event.preventDefault();
    }
  };

  const codeCheck = (value) => {
    if (value.join("").length === CODE_LENGTH) setCheck(true);
    else setCheck(false);
  };

  const onClickMoveToCheckInvite = () => {
    navigate("/");
  };

  return (
    <ParticipationUIPage
      code={code}
      setCode={handleCodeChange}
      handleKeyDown={handleKeyDown}
      handlePaste={handlePaste}
      check={check}
      CODE_LENGTH={CODE_LENGTH}
      onClickMoveToCheckInvite={onClickMoveToCheckInvite}
      inputRefs={inputRefs}
    />
  );
};

export default ParticipationPage;
