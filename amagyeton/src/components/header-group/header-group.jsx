import { useNavigate } from "react-router-dom";
import * as S from "./header-group.style";
import { useState } from "react";
import CheckListModal from "./CheckListModal";

const HeaderGroupPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickPageBack = () => {
    navigate(-1);
  };

  const closeRoleModal = () => {
    setIsModalOpen(false);
  };

  const openCheckListModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <CheckListModal isOpen={isModalOpen} onClose={closeRoleModal} />
      )}
      <S.MoblieDivHeader>
        <div onClick={onClickPageBack}>
          <S.BackIcon />
        </div>
        <div>
          <span onClick={openCheckListModal}>
            에스파는 나야 <S.CheckListIcon />
          </span>
        </div>
        <div></div>
      </S.MoblieDivHeader>
    </>
  );
};

export default HeaderGroupPage;
