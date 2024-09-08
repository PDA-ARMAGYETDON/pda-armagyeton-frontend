import { useEffect } from "react";
import AppViewColorPage from "../../../../components/app-view/AppViewColor";
import GroupMainUIPage from "./GroupMain.presenter";
import { useNavigate, useParams } from "react-router-dom";

const GroupMainPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    localStorage.setItem("activeIndex", 0);
  }, []);

  useEffect(() => {
    console.log("changes");
  }, [id]);

  const onClickGroupRole = () => {
    navigate(`/group/${id}/groupRole`);
  };
  const onClicruleProposal = () => {
    navigate(`/group/${id}/roleSuggest`);
  };
  const onClickSaleProposal = () => {};
  return (
    <AppViewColorPage>
      <GroupMainUIPage
        onClickGroupRole={onClickGroupRole}
        onClickruleProposal={onClicruleProposal}
        onClickSaleProposal={onClickSaleProposal}
      />
    </AppViewColorPage>
  );
};

export default GroupMainPage;
