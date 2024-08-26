import * as yup from "yup";

const schemaStep1 = yup.object().shape({
  username: yup
    .string()
    .required("이름은 필수 입력입니다.")
    .min(2, "이름은 최소 2자 이상이어야 합니다.")
    .max(20, "이름은 최대 20자까지 입력할 수 있습니다."),
  id: yup
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

const schemaStep2 = yup.object().shape({
  email: yup
    .string()
    .email("유효하지 않은 이메일 형식입니다.")
    .required("이메일은 필수 입력 항목입니다."),
});

export { schemaStep1, schemaStep2 };
