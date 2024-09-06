import { useNavigate } from "react-router-dom";
import * as S from "./header-stock-search.style";

const HeaderStockSearchPage = () => {
  const navigate = useNavigate();

  const onClickPageBack = () => {
    navigate(-1);
  };

  return (
    <>
      <S.MoblieDivHeader>
        <div onClick={onClickPageBack}>
          <S.BackIcon />
        </div>
        <S.SearchDiv>
          <S.SearchInput type="text" />
          <S.SearchIcon />
        </S.SearchDiv>
      </S.MoblieDivHeader>
    </>
  );
};

export default HeaderStockSearchPage;
