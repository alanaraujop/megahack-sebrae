export const formatMoney = (data) => {
  return parseFloat(data.toString().replace(",", "."))
    .toFixed(2)
    .replace(".", ",");
};
