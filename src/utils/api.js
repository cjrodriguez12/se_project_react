const baseUrl = "http://localhost:3001";
//const headers = { "Content-Type": "application/json" };
//load cards from server
export const getInitialCards = () => {
  const Api = fetch(`${baseUrl}/items`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Error: ${res.status}`);
    }
  });
  return Api;
};
// refactor duplicate code i.e authorization and fetch
//   getCardsById(id) {
//     return fetch(`${this._baseUrl}/items/${id}`);
//   }
//load user info from server
//   loadInfo() {
//     return fetch(`${this._baseUrl}/users/me`).then(this._handleResponse);
//   }
//editing profile
//   updateInfo(modalInputs) {
//     const { title, description } = modalInputs;
//     return fetch(`${this._baseUrl}/users/me`, {
//       method: "PATCH",
//       headers: this._headers,
//       body: JSON.stringify({
//         name: title,
//         about: description,
//       }),
//     }).then((res) => {
//       this._handleResponse(res);
//     });
//   }
//   updateAvatar(modalInputs) {
//     const { Url } = modalInputs;
//     return fetch(`${this._baseUrl}/users/me/avatar`, {
//       method: "PATCH",
//       headers: this._headers,
//       body: JSON.stringify({
//         avatar: Url,
//       }),
//     }).then((res) => {
//       this._handleResponse(res);
//     });
//   }
//Post new card to Api
//   postCards(modalInputs) {
//     const { place, Url } = modalInputs;
//     //let id;
//     return fetch(`${this._baseUrl}/cards`, {
//       method: "POST",
//       body: JSON.stringify({
//         name: place,
//         link: Url,
//       }),
//     }).then((res) => {
//       return this._handleResponse(res);
//     });
//   }
//   deleteCards(id) {
//     /// grab id from card-send id to this api call-delete card from html
//     return fetch(`${this._baseUrl}/items/${id}`, {
//       method: "DELETE",
//     }).then((res) => {
//       this._handleResponse(res);
//     });
//   }
//}
