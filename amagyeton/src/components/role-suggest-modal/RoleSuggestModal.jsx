import DisbandRule from "./DisbandRule/DisbandRule";
import EmergencySaleRule from "./EmergencySaleRule/EmergencySaleRule";
import PaymentRule from "./PaymentRule/PaymentRule";
import * as S from "./RoleSuggestModal.style";
import TradingRule from "./TradingRule/TradingRule";

const RoleSuggestModal = ({
  isOpen,
  onClose,
  content,
  groupRole,
  groupInfo,
}) => {
  if (!isOpen || !content) return null;

  const ruleComponents = {
    PAY_FEE: PaymentRule,
    UPVOTE_NUMBER: TradingRule,
    URGENT_SALE: EmergencySaleRule,
    DISBAND: DisbandRule,
  };

  const titleToRuleType = {
    납부규칙: "PAY_FEE",
    매매규칙: "UPVOTE_NUMBER",
    "긴급 매도규칙": "URGENT_SALE",
    "모임 해체 규칙": "DISBAND",
  };

  const renderRuleContent = (type) => {
    const ruleType = titleToRuleType[type];
    const RuleComponent = ruleComponents[ruleType];
    return RuleComponent ? (
      <RuleComponent
        key={type}
        onClose={onClose}
        groupInfo={groupInfo}
        type={ruleType}
      />
    ) : (
      <p key={type}>해당 규칙에 대한 내용이 없습니다.</p>
    );
  };

  return (
    <S.ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <S.ModalContent
        initial={{ y: "-100px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100px", opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <label>{`${content.title} 수정 제안하기`}</label>
        {renderRuleContent(content.title)}
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default RoleSuggestModal;
