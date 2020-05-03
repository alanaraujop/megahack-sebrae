export const formatMoney = (data) => {
  return (
    "R$" +
    parseFloat(data.toString().replace(",", ".")).toFixed(2).replace(".", ",")
  );
};
