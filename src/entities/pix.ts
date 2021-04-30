import { v4 } from "uuid";
import PixKey from "./pixkey";

export default class Pix {
  private _id: string;
  private _name: string;
  private _keys: PixKey[];

  constructor(name: string, key: PixKey) {
    this._id = v4();
    this._name = name;
    this._keys = [key];
  }

  get Id() {
    return this._id;
  }

  get Name() {
    return this._name;
  }

  get Keys() {
    return this._keys;
  }

  get PrincipalKey() {
    return this._keys.filter((k) => k.IsPrincipal)[0];
  }
}
