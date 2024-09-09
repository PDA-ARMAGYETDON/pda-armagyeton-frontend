import { useEffect, useState } from "react";
import AppViewColorPage from "../../../../../components/app-view/AppViewColor";
import RoleSuggestUIPage from "./RoleSuggest.presenter";
import {
  GroupRole,
  PendingTeam,
  RoleSuggest,
} from "../../../../../lib/apis/apis";
import { useParams } from "react-router-dom";
import RoleSuggestModal from "../../../../../components/role-suggest-modal/roleSuggestModal";

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
      const res = await PendingTeam();
      setGroupInfo(res.data);
    };
    fetchGroupInfo();
  }, []);

  useEffect(() => {
    const fetchGroupRole = async () => {
      const res = await GroupRole();
      setGroupRole(res.data);
    };
    fetchGroupRole();
  }, []);

  useEffect(() => {
    const fetchSuggest = async () => {
      const res = await RoleSuggest(id);
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
        onClickMoveToCheckInvite={onClickMoveToCheckInvite}
        roleData={roleData}
        groupRole={groupRole}
        groupInfo={groupInfo}
      />
      {isOpen && (
        <RoleSuggestModal
          isOpen={isOpen}
          onClose={handlePartiModalClose}
          content={modalContent}
          groupRole={groupRole}
          groupInfo={groupInfo}
        />
      )}
    </AppViewColorPage>
  );
};

export default RoleSuggestPage;
