import AppViewColorPage from "../../../../components/app-view/AppViewColor";
import DashboardUIPage from "./Dashboard.presenter";

const DashboardPage = () => {
  return (
    <AppViewColorPage>
      <DashboardUIPage />
    </AppViewColorPage>
  );
};

export default DashboardPage;
