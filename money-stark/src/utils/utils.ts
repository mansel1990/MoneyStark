export const formatRupee = (amount: number) => {
  let strAmount = amount.toString();

  let parts = strAmount.split(".");

  let integerPart = parts[0];

  let decimalPart = parts.length > 1 ? "." + parts[1] : "";

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return "₹" + integerPart + decimalPart;
};
