import * as S from "./MyInfo.style";
import FooterNav from "../../../components/footer-nav/FooterNav";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "./UserOutModal";
import { GetUserInfo, LogoutUser } from "../../../lib/apis/apis";

const MyInfoUIPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await GetUserInfo();
        setLoginId(response.data.loginId);
        setUserName(response.data.name);
        setEmail(response.data.email);
        setAddress(response.data.address);
        setAddressDetail(response.data.addressDetail);
      } catch (error) {
        console.error("Failed to fetch user info", error);
      }
    };

    fetchUserInfo();
  }, []);

  const onClickPageBack = () => {
    navigate(-1);
  };

  const onEditClick = () => {
    navigate("/myinfo/edit");
  };

  const onPInfoEditClick = () => {
    navigate(`/group/${id}/myinfo/p`);
  };

  const onWithdrawClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmWithdraw = async () => {
    await WithdrawUser();
    setIsModalOpen(false);
  };

  const onLogoutClick = async () => {
    sessionStorage.setItem("logoutSuccess", "true");
    await LogoutUser();
    localStorage.removeItem("TOKEN");
    navigate("/login");
  };

  return (
    <>
      <S.Container>
        <S.BackIcon onClick={onClickPageBack} />
        <S.Header>
          <S.Title>내 정보</S.Title>
          <S.InfoEditIcon onClick={onEditClick} />
        </S.Header>

        <S.UserInfoContainer>
          <S.UserInfoRow>
            <S.Label>아이디</S.Label>
            <S.Value>{loginId}</S.Value>
          </S.UserInfoRow>

          <S.UserInfoRow>
            <S.Label>이름</S.Label>
            <S.Value>{userName}</S.Value>
          </S.UserInfoRow>

          <S.UserInfoRow>
            <S.Label>이메일</S.Label>
            <S.Value>{email}</S.Value>
          </S.UserInfoRow>

          <S.UserInfoRow>
            <S.Label>주소</S.Label>
            <S.Value>{address}</S.Value>
          </S.UserInfoRow>

          <S.UserInfoRow>
            <S.Label></S.Label>
            <S.Value>{addressDetail}</S.Value>
          </S.UserInfoRow>

          <S.UserInfoRow>
            <S.Label>비밀번호</S.Label>
            <S.Button onClick={onPInfoEditClick}>수정</S.Button>
          </S.UserInfoRow>
        </S.UserInfoContainer>

        {/* 로그아웃, 회원탈퇴 */}
        <S.ActionSection>
          <S.LogoutRow onClick={onLogoutClick}>
            <S.OutIcon />
            <span>로그아웃</span>
          </S.LogoutRow>

          <S.WithdrawRow onClick={onWithdrawClick}>
            <S.WithdrawIcon />
            <span>회원탈퇴</span>
          </S.WithdrawRow>
        </S.ActionSection>
      </S.Container>

      {isModalOpen && (
        <Modal onClose={closeModal} onConfirm={confirmWithdraw} />
      )}

      {/* 하단 네비게이션 */}
      <FooterNav />
    </>
  );
};

export default MyInfoUIPage;
