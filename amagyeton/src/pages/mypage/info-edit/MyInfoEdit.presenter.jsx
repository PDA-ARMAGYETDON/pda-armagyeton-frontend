import * as S from "./MyInfoEdit.style";
import FooterNav from "../../../components/footer-nav/FooterNav";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetUserInfo, UpdateUserInfo } from "../../../lib/apis/apis";
import AddressModal from "../../signup/AddressModal";

const MyInfoEditUIPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await GetUserInfo();
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

  const handleSave = async () => {
    await UpdateUserInfo({ name: userName, email, address, addressDetail });
    navigate(-1);
  };

  const onClickAddressSearch = () => {
    setIsOpen((prev) => !prev);
    setIsModalOpen(true);
  };

  const handleAddressComplete = (data) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsOpen(false);
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <S.Container>
        <S.BackIcon onClick={onClickPageBack} />
        <S.Header>
          <S.Title>내 정보 수정</S.Title>
        </S.Header>

        <S.UserInfoContainer>
          <S.UserInfoRow>
            <S.Label>이름</S.Label>
            <S.Value
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </S.UserInfoRow>

          <S.UserInfoRow>
            <S.Label>이메일</S.Label>
            <S.Value value={email} onChange={(e) => setEmail(e.target.value)} />
          </S.UserInfoRow>

          <S.UserInfoRow>
            <S.Label>주소</S.Label>
            <S.Value
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onClick={onClickAddressSearch}
            />
            <S.Value
              value={addressDetail}
              onChange={(e) => setAddressDetail(e.target.value)}
            />
          </S.UserInfoRow>

          <S.Button onClick={handleSave}>저장</S.Button>
        </S.UserInfoContainer>
      </S.Container>

      <AddressModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        handleAddressComplete={handleAddressComplete}
      />

      {/* 하단 네비게이션 */}
      <FooterNav />
    </>
  );
};

export default MyInfoEditUIPage;
