import StockViewPage from "../../../../../components/app-view/StockView";
import StockSearchUIPage from "./Stock.search.presenter";

const StockSearchPage = () => {
  return (
    <StockViewPage>
      <StockSearchUIPage />
    </StockViewPage>
  );
};

export default StockSearchPage;
