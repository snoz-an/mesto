export class UserInfo {

    constructor({name, about, avatarSelector}) {
              this._name = document.querySelector(name),
              this._about = document.querySelector(about)
              this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo() {
        const data = {
              name: this._name.textContent,
              about: this._about.textContent,
        }
        return data
    }

    setUserInfo(data) {
              this._name.textContent  = data.name;
              this._about.textContent = data.about;
        }

        avatarUserInfo(link) {
            this._avatar.src = link;
        }
}