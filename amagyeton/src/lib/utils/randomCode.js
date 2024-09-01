// utils/generateInviteCode.js

/**
 * 랜덤 초대코드를 생성하는 함수
 * @param {number} length - 초대코드의 길이
 * @returns {string} - 생성된 랜덤 초대코드
 */
export function generateInviteCode(length = 8) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
