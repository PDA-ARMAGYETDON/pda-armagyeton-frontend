import { useNavigate } from "react-router-dom";
import * as S from "./header-chat.style";
import { useState } from "react";

const HeaderChatPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const onClickPageBack = () => {
    navigate(-1);
  };

  const toggleDrawer = () => {
    console.log("Drawer toggled");
    setOpen(!open);
  };

  return (
    <>
      {open && <S.DrawerCustom open={open} onClose={toggleDrawer} />}
      <S.MoblieDivHeader>
        <S.BackIcon onClick={onClickPageBack} />
        <S.MenuIcon onClick={toggleDrawer} />
      </S.MoblieDivHeader>
    </>
  );
};

export default HeaderChatPage;
