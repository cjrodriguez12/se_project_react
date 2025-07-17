import { baseUrl } from "../utils/constants";
import processServerResponse from "./serverResponse";
import headers from "../utils/constants";
//Login user
export const loginUser = (email, password) => {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(processServerResponse);
};
//Register user
export const registerUser = (email, password, name, avatar) => {
  return fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email,
      password,
      name,
      avatar,
    }),
  }).then(processServerResponse);
};
export const getUserData = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: { ...headers, Authorization: `Bearer ${token}` },
  }).then(processServerResponse);
};
