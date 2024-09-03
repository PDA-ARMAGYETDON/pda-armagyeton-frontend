import * as yup from "yup";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("이름은 필수 입력입니다.")
    .min(2, "이름은 최소 2자 이상이어야 합니다.")
    .max(10, "이름은 최대 10자까지 입력할 수 있습니다."),
  password: yup
    .string()
    .required("계좌 비밀번호는 필수 입력입니다.")
    .min(4, "계좌 비밀번호는 최소 4자 이상이어야 합니다.")
    .max(6, "비밀번호는 최대 6자까지 입력할 수 있습니다."),
});

export default schema;
