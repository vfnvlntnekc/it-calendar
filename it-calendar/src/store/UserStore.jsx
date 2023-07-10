import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = true;
    this._user = {};
    this._login = "";

    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }
  setLogin(login) {
    this._login = login;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
  get login() {
    return this._login;
  }
}
