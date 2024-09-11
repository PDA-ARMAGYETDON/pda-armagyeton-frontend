import { useNavigate, useParams } from "react-router-dom";
import * as S from "./header-stock-search.style";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setSelectedInviteCode } from "../../store/reducers/Group";
import { SearchStocks } from "../../lib/utils/Stock";

const HeaderStockSearchPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  const onClickPageBack = () => {
    navigate(-1);
  };

  const handleSearchSubmit = () => {
    const stock = SearchStocks.find((item) => item.name === searchTerm);

    if (stock) {
      dispatch(setSelectedInviteCode(stock.code));
      navigate(`/group/${id}/stocks/${stock.code}`);
    } else {
      console.error("Stock not found");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <>
      <S.MoblieDivHeader>
        <div onClick={onClickPageBack}>
          <S.BackIcon />
        </div>
        <S.SearchDiv>
          <S.SearchInput
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="종목명을 입력하세요"
          />
          <S.SearchIcon onClick={handleSearchSubmit} />{" "}
        </S.SearchDiv>
      </S.MoblieDivHeader>
    </>
  );
};

export default HeaderStockSearchPage;
