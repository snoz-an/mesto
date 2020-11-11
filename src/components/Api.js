export class Api{
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
            }

    getInitialCards() {
            return fetch(`${this._url}/cards`, {
            headers:  this._headers
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
      }


     getUserProfile() {
            return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers,
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
      }


      setUserProfile(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({name: data.name,
            about: data.about}),
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
      }


      addNewCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data),
    })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
      }


      newAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify(data)    
        
        })
          .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })

    }

      deleteCard(id) {
        return fetch(
          `${this._url}/cards/${id}`,
          {
            method: 'DELETE',
            headers: this._headers,
          }
        )
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })    
      }


      likeCard(id) {
        return fetch(
          `${this._url}/cards/likes/${id}`,
          {
            method: 'PUT',
            headers: this._headers,
          }
        )
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })    
      }
    
      dislikeCard(id) {
        return fetch(
          `${this._url}/cards/likes/${id}`,
          {
            method: 'DELETE',
            headers: this._headers,
          }
        )
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
          
      }

}



