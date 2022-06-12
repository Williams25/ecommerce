import { encoded, decoded } from "utils/base64";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createSessionStorage = (item: any, key: string) => {
  window.sessionStorage.setItem(key, encoded(item));
};

export const getSessionStorage = (key: string) => {
  return decoded(window.sessionStorage.getItem(key));
};

export const removeItemSessionStorage = (key: string) => {
  window.sessionStorage.removeItem(key);
};
