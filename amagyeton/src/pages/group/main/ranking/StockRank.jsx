import React, { useEffect, useState } from "react";
import AppViewColorPage from "../../../../components/app-view/AppViewColor";
import StockRankUIPage from "./StockRank.presenter";
import { fetchRankingData } from "../../../../lib/apis/apis";

const StockRankPage = () => {
  const [data, setData] = useState([]);
  const [selectedSeedMoney, setSelectedSeedMoney] = useState(1000000);
  const [curType, setCurType] = useState(0);

  // seedMoney에 맞는 데이터를 가져오는 함수
  const loadRankingData = async (seedMoney) => {
    try {
      const result = await fetchRankingData(seedMoney);
      setData(result.data.data);
    } catch (error) {
      console.error("랭킹 데이터를 가져오는 중 오류 발생:", error);
    }
  };

  // 페이지가 처음 로드될 때 기본 데이터 로드
  useEffect(() => {
    loadRankingData(selectedSeedMoney);
  }, []);

  // 탭 클릭 시 seedMoney 변경 및 데이터 로드
  const handleSeedMoneyChange = (seedMoney, i) => {
    setSelectedSeedMoney(seedMoney);
    loadRankingData(seedMoney);
    setCurType(i);
  };
  const travleImages = [
    "/images/user1.png",
    "/images/user2.png",
    "/images/user3.png",
  ];

  // 랜덤 이미지 선택 함수
  const getRandomImage = () => {
    return travleImages[Math.floor(Math.random() * travleImages.length)];
  };

  return (
    <AppViewColorPage>
      <StockRankUIPage
        data={data}
        handleSeedMoneyChange={handleSeedMoneyChange}
        curType={curType}
      />
    </AppViewColorPage>
  );
};

export default StockRankPage;
