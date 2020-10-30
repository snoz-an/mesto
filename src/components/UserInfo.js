export class UserInfo {

    constructor({name, activity}) {
              this._name = document.querySelector(name),
              this._activity = document.querySelector(activity)
    }

    getUserInfo() {
        const data = {
              name: this._name.textContent,
              activity: this._activity.textContent,
        }
        return data
    }

    setUserInfo(data) {
              this._name.textContent  = data.name;
              this._activity.textContent = data.activity;
        }
}