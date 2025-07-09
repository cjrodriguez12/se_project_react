import processServerResponse from "./serverResponse";

const baseUrl = "http://localhost:3000";
const headers = { "Content-Type": "application/json" };
//load cards from server
export const getInitialCards = () => {
  return fetch(`${baseUrl}/items`).then(processServerResponse);
};
//delete Item Card grabbing Id
export const deleteCards = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(processServerResponse);
};
//Adds new Card to database
export const postCards = (itemCard) => {
  const { name, imageUrl, weather } = itemCard;
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(processServerResponse);
};
