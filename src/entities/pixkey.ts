import { v4 } from "uuid";
import KeyTypes from "../enums/keyTypes";

export default class PixKey {
  private _id: string;
  private _key: string;
  private _isPrincipal: boolean;
  private _type: KeyTypes;

  constructor(key: string, type: KeyTypes, isPrincipal: boolean) {
    this._id = v4();
    this._key = key;
    this._isPrincipal = isPrincipal;
    this._type = type;
  }

  get Id() {
    return this._id;
  }

  get Key() {
    return this._key;
  }

  get IsPrincipal() {
    return this._isPrincipal;
  }

  get Type() {
    return this._type;
  }
}
