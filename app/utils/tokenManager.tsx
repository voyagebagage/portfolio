import Cookies from "js-cookie";

const TOKEN_NAME = "userToken";

export const setToken = (token: string) => {
  Cookies.set(TOKEN_NAME, token);
};

export const getToken = (): string | null => {
  return Cookies.get(TOKEN_NAME) || null;
};

export const removeToken = () => {
  Cookies.remove(TOKEN_NAME);
};
