export const normalizeString = (value: string): string =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
