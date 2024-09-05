import * as S from "./Mypage.style";
import HeaderMyPage from "../../../../components/header-mypage/header-mypage";
import FooterNav from "../.././../../components/footer-nav/FooterNav";
import { formatCurrency } from "../../../../lib/utils/formatCurrency";

const MyPageUIPage = () => {
  const data = [
    {
      date: "8.20 화요일",
      info: [
        {
          name: "주식회사 SM 굿즈샵",
          price: "-30,000원",
        },
        {
          name: "출금(모임투자-에스파는",
          price: "-30,000,000원",
        },
      ],
    },
    {
      date: "7.20 화요일",
      info: [
        {
          name: "출금(모임투자-에스파는...",
          price: "-30,000원",
        },
        {
          name: "출금(모임투자-에스파는",
          price: "-30,000,000원",
        },
      ],
    },
    {
      date: "6.20 화요일",
      info: [
        {
          name: "출금(모임투자-에스파는...",
          price: "-30,000원",
        },
        {
          name: "출금(모임투자-에스파는",
          price: "-30,000,000원",
        },
      ],
    },
    {
      date: "5.20 화요일",
      info: [
        {
          name: "출금(모임투자-에스파는...",
          price: "-30,000원",
        },
        {
          name: "출금(모임투자-에스파는",
          price: "-30,000,000원",
        },
      ],
    },
  ];
  return (
    <>
      <HeaderMyPage />
      <S.Section>
        <S.ItemDiv>
          <S.AccountInfo>
            <S.AccountInfoDetail>
              <span>[신한] 주식 종합 계좌</span>
              <span>270-00-000011 [01] CMA RP</span>
            </S.AccountInfoDetail>
            <S.AccountInfoPrice>
              <span>{`${formatCurrency(25000000)}원`}</span>
            </S.AccountInfoPrice>
          </S.AccountInfo>
        </S.ItemDiv>
        <S.ItemDiv>
          <S.Title>거래 내역</S.Title>
          <S.Tansaction>
            {data.map((e, i) => {
              return (
                <div key={i} style={{ marginBottom: "30px" }}>
                  <S.TansactionDate>{e.date}</S.TansactionDate>
                  {e.info.map((infoItem, j) => (
                    <S.TansactionDetail key={j}>
                      <span>{infoItem.name}</span>
                      <span>{infoItem.price}</span>
                    </S.TansactionDetail>
                  ))}
                </div>
              );
            })}
          </S.Tansaction>
        </S.ItemDiv>
      </S.Section>
      <FooterNav />
    </>
  );
};

export default MyPageUIPage;
