export const formatCurrency = (currency: number): string =>
  Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  }).format(currency);
