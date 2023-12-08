// Type: Config file for Lenbox API calls
export const lenboxConfig = {
  clientKey: process.env.NEXT_PUBLIC_LENBOX_VD,
  authKey: process.env.NEXT_PUBLIC_LENBOX_AUTH_KEY,
  apiCreditUrl: process.env.NEXT_PUBLIC_LENBOX_API_URL,
  apiCreditCardUrl: process.env.NEXT_PUBLIC_LENBOX_API_URL_CB,
};
