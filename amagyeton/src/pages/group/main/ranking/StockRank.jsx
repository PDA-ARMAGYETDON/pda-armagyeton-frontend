import AppViewColorPage from "../../../../components/app-view/AppViewColor";
import StockRankUIPage from "./StockRank.presenter";

const StockRankPage = () => {
  const travleImages = [
    "/images/user1.png",
    "/images/user2.png",
    "/images/user3.png",
  ];

  // 랜덤 이미지 선택 함수
  const getRandomImage = () => {
    return travleImages[Math.floor(Math.random() * travleImages.length)];
  };

  const data = [
    {
      rank: 1,
      name: "우리 결혼해요",
      type: "여행",
      rate: 24.5,
      image: getRandomImage(),
    },
    {
      rank: 2,
      name: "우리 결혼해요",
      type: "여행",
      rate: 24.5,
      image: getRandomImage(),
    },
    {
      rank: 3,
      name: "우리 결혼해요",
      type: "여행",
      rate: 24.5,
      image: getRandomImage(),
    },
    {
      rank: 4,
      name: "우리 결혼해요",
      type: "여행",
      rate: 24.5,
      image: getRandomImage(),
    },
    {
      rank: 5,
      name: "우리 결혼해요",
      type: "여행",
      rate: 24.5,
      image: getRandomImage(),
    },
    {
      rank: 6,
      name: "우리 결혼해요",
      type: "여행",
      rate: 24.5,
      image: getRandomImage(),
    },
    {
      rank: 7,
      name: "우리 결혼해요",
      type: "여행",
      rate: 24.5,
      image: getRandomImage(),
    },
  ];

  return (
    <AppViewColorPage>
      <StockRankUIPage data={data} />
    </AppViewColorPage>
  );
};

export default StockRankPage;
