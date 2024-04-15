const baseUrl = "http://localhost:3001";
//const headers = { "Content-Type": "application/json" };
//load cards from server
export const getInitialCards = () => {
  return fetch(`${baseUrl}/items`).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Error: ${res.status}`);
    }
  });
};
export const deleteCards = (id) => {
  /// grab id from card-send id to this api call-delete card from html
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Error: ${res.status}`);
    }
  });
};
export const postCards = (modalInputs) => {
  const { name, imageUrl, weather } = modalInputs;
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Error: ${res.status}`);
    }
  });
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
