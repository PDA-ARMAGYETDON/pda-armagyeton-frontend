// import { useEffect, useState } from "react";
// import axiosInstance from "../../../../lib/apis/axiosInstance";
import AppViewColorPage from "../../../../components/app-view/AppViewColor";
import GroupMainUIPage from "./GroupMain.presenter";
import { useNavigate, useParams } from "react-router-dom";

const GroupMainPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // URL의 파라미터로부터 teamId를 가져옴
  // const [data, setData] = useState([]); // 서버로부터 받은 데이터를 저장할 상태
  // const [eventSource, setEventSource] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("TOKEN"); // 로컬스토리지에서 토큰 가져오기

  //   // 서버와 인증을 먼저 수행하기 위해 axios 사용
  //   axios
  //     .get(`http://localhost:8082/api/accounts/sum-realtime/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token.split(" ")[1]}`,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then(() => {
  //       // 인증이 성공하면 SSE 연결 시작
  //       const newEventSource = new EventSource(
  //         `http://localhost:8082/api/accounts/sum-realtime/${id}`
  //       );

  //       newEventSource.onmessage = function (event) {
  //         try {
  //           const newData = JSON.parse(event.data);
  //           console.log("Received data:", newData);
  //           setData((prevData) => [...prevData, ...newData]);
  //         } catch (error) {
  //           console.error("Error parsing event data:", error);
  //         }
  //       };

  //       newEventSource.onerror = function (error) {
  //         console.error("EventSource 에러 발생:", error);
  //         newEventSource.close(); // 에러가 발생하면 연결 종료
  //         setEventSource(null);
  //       };

  //       setEventSource(newEventSource);
  //     })
  //     .catch((error) => {
  //       console.error("Authorization Error: ", error);
  //     });

  //   // 컴포넌트가 언마운트 될 때 EventSource 연결을 닫음
  //   return () => {
  //     if (eventSource) {
  //       eventSource.close();
  //       setEventSource(null);
  //     }
  //   };
  // }, [id]);

  // 다른 페이지로 이동하는 네비게이션 핸들러들
  const onClickGroupRole = () => {
    navigate(`/group/${id}/groupRole`);
  };

  const onClickruleProposal = () => {
    console.log("click");
    navigate(`/group/${id}/roleSuggest`);
  };

  const onClickSaleProposal = () => {
    console.log("Clicked Sale Proposal");
  };

  return (
    <AppViewColorPage>
      <GroupMainUIPage
        onClickGroupRole={onClickGroupRole}
        onClickruleProposal={onClickruleProposal}
        onClickSaleProposal={onClickSaleProposal}
      />
    </AppViewColorPage>
  );
};

export default GroupMainPage;
