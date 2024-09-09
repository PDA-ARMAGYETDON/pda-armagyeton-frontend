import * as S from "./MyInfo.style";

const Modal = ({ onClose, onConfirm }) => {
  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.ModalIcon src="/images/user_out.svg" alt="탈퇴" />
        <S.ModalTitle>정말 탈퇴하시겠어요?</S.ModalTitle>
        <S.ModalDescription>탈퇴 버튼 선택 시 계정은</S.ModalDescription>
        <S.ModalDescription>삭제되며 복구되지 않습니다.</S.ModalDescription>
        <S.ModalButtonContainer>
          <S.ModalConfirmButton onClick={onConfirm}>탈퇴</S.ModalConfirmButton>
          <S.ModalCancelButton onClick={onClose}>취소</S.ModalCancelButton>
        </S.ModalButtonContainer>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default Modal;
