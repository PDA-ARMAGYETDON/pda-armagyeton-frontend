import * as yup from "yup";
import { formatCurrency } from "../../../lib/utils/formatCurrency";

const schemaStep1 = yup.object().shape({
  name: yup
    .string()
    .min(3, "모임명은 최소 3자 이상 작성해야합니다.")
    .max(10, "모임명은 최대 10자 이하로 작성해야합니다.")
    .required("모임명을 입력해주세요."),
  headCount: yup
    .number()
    .min(2, "모임인원은 최소 2명 이상이어야 합니다.")
    .max(5, "모임인원은 최대 5명입니다.")
    .required("모임인원을 입력해주세요."),
  category: yup.string().required("카테고리를 선택해주세요."),
  endAt: yup.string().required("모임 종료일을 선택해주세요."),
});

const schemaStep2 = (count) =>
  yup.object().shape({
    baseAmt: yup
      .number()
      .typeError("금액은 숫자만 입력할 수 있습니다.")
      .max(
        parseInt(50000000 / parseInt(count)),
        `최대 금액은 ${formatCurrency(
          parseInt(50000000 / parseInt(count))
        )}원 입니다`
      )
      .required("1인당 초기 투자금을 입력해주세요."),
    depositAmt: yup
      .number()
      .typeError("금액은 숫자만 입력할 수 있습니다.")
      .max(
        parseInt(50000000 / parseInt(count)),
        `최대 금액은 ${formatCurrency(
          parseInt(50000000 / parseInt(count))
        )}원 입니다`
      )
      .required("1인당 기간별 납부 금액을 입력해주세요."),
    payDate: yup.date().required("납부시작일을 설정해주세요"),
    period: yup.string().required("납부주기를 설정해주세요"),
  });

const schemaStep3 = yup.object().shape({
  tradeUpvotes: yup.number().required("찬성 인원을 설정해주세요"),
  prdyVrssRt: yup
    .number()
    .typeError("전날 대비 등락율은 숫자만 입력 가능합니다")
    .min(5, "전날 대비 등락율은 5%가 최소입니다")
    .max(30, "전날 대비 등락율은 30%가 최대입니다")
    .required("전날 대비 등락율을 설정해주세요"),
  urgentTradeUpvotes: yup.number().required("찬성 인원을 설정해주세요"),
});

const schemaStep4 = yup.object().shape({
  maxProfitRt: yup
    .number()
    .typeError("전체 수익률은 숫자만 입력 가능합니다")
    .required("전체 수익률을 설정해주세요"),

  maxLossRt: yup
    .number()
    .typeError("전체 수익률은 숫자만 입력 가능합니다")
    .required("전체 수익률을 설정해주세요"),
});
export { schemaStep1, schemaStep2, schemaStep3, schemaStep4 };
