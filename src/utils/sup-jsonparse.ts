export const supJsonParse = (value: string) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    return "";
  }
};
