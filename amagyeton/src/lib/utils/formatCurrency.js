export const formatCurrency = (amount) => {
  if (typeof amount !== "number") {
    return amount;
  }

  return new Intl.NumberFormat("ko-KR", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(amount);
};
