import { useEffect } from "react";
import AppViewColorPage from "../../../../components/app-view/AppViewColor";
import GroupMainUIPage from "./GroupMain.presenter";

const GroupMainPage = () => {
  useEffect(() => {
    localStorage.setItem("activeIndex", 0);
  }, []);
  return (
    <AppViewColorPage>
      <GroupMainUIPage />
    </AppViewColorPage>
  );
};

export default GroupMainPage;
