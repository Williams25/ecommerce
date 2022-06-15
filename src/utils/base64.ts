import { encode, decode } from "js-base64";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const encoded = (item: any): string => encode(JSON.stringify(item));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const decoded = (item: any): string => decode(JSON.stringify(item));
