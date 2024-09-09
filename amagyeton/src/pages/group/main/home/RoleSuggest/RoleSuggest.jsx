import { useEffect, useState } from "react";
import AppViewColorPage from "../../../../../components/app-view/AppViewColor";
import RoleSuggestUIPage from "./RoleSuggest.presenter";
import { GroupRole, PendingTeam, RoleData } from "../../../../../lib/apis/apis";
import { useParams } from "react-router-dom";
import RoleSuggestModal from "../../../../../components/role-suggest-modal/RoleSuggestModal";

const RoleSuggestPage = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [groupRole, setGroupRole] = useState();
  const [groupInfo, setGroupInfo] = useState();
  const [roleData, setRoleData] = useState({
    payFeeOffers: [],
    urgentSaleOffers: [],
    upvoteNumberOffers: [],
    disbandOffers: [],
  });

  useEffect(() => {
    const fetchGroupInfo = async () => {
      const res = await PendingTeam(id);
      setGroupInfo(res.data);
    };
    fetchGroupInfo();
  }, []);

  useEffect(() => {
    const fetchGroupRole = async () => {
      const res = await GroupRole();
      console.log(res);
      setGroupRole(res.data);
    };
    fetchGroupRole();
  }, []);

  useEffect(() => {
    const fetchSuggest = async () => {
      const res = await RoleData(id);
      console.log(res);
      setRoleData(res.data);
    };
    fetchSuggest();
  }, []);

  const onClickMoveToCheckInvite = (title, content) => () => {
    setModalContent({
      title,
      type: content.map((rule) => ({
        ...rule,
        type: rule.type,
      })),
    });
    setIsOpen(true);
  };

  const handlePartiModalClose = () => {
    console.log("close");
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <AppViewColorPage>
      <RoleSuggestUIPage
        handlePartiModalClose={handlePartiModalClose}
        onClickMoveToCheckInvite={onClickMoveToCheckInvite}
        roleData={roleData}
        groupRole={groupRole}
        groupInfo={groupInfo}
      />
      <RoleSuggestModal
        isOpen={isOpen}
        onClose={handlePartiModalClose}
        content={modalContent}
        groupRole={groupRole}
        groupInfo={groupInfo}
      />
    </AppViewColorPage>
  );
};

export default RoleSuggestPage;
