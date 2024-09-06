import * as yup from "yup";

const schema = yup.object().shape({
  loginId: yup
    .string()
    .required("아이디는 필수 입력입니다.")
    .min(4, "아이디는 최소 4자 이상이어야 합니다.")
    .max(20, "아이디는 최대 20자까지 입력할 수 있습니다."),
  password: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .min(4, "비밀번호는 최소 4자 이상이어야 합니다.")
    .max(20, "비밀번호는 최대 20자까지 입력할 수 있습니다."),
});

export default schema;
