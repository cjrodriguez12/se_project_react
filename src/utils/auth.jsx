import { baseUrl } from "./constants";
import processServerResponse from "./serverResponse";
import { headers } from "./constants";
//Login user
export const loginUser = (email, password) => {
  return fetch(`${baseUrl}/signin`, {
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
  return fetch(`${baseUrl}/signup`, {
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
export const updateUserData = (token, name, avatar) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: { ...headers, Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      name,
      avatar,
    }),
  }).then(processServerResponse);
};
