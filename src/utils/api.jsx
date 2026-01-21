import processServerResponse from "./serverResponse";
import { baseUrl } from "../utils/constants";
import { headers } from "../utils/constants";
//load cards from server
export const getInitialCards = () => {
  return fetch(`${baseUrl}/items`).then(processServerResponse);
};
//delete Item Card grabbing Id
export const deleteCards = (id) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: { ...headers, Authorization: `Bearer ${token}` },
  }).then(processServerResponse);
};
//Adds new Card to database

export const postCards = (itemCard) => {
  const { name, imageUrl, weather } = itemCard;
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { ...headers, Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(processServerResponse);
};
