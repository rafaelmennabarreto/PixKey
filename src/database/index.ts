import Realm from "realm";
import { PixKeySchema } from "./schemas/pixKeySchema";
import { PixSchema } from "./schemas/pixSchema";

export class Db {
  static get GetDatabase() {
    return Realm.open({
      schema: [PixSchema, PixKeySchema],
    });
  }

  static async Write(schemaName: string, value: any) {
    const db = await this.GetDatabase;
    return db.write(() => db.create(schemaName, value));
  }

  static async GetById<T>(schemaName: string, id: string) {
    const db = await this.GetDatabase;
    return db.objects<T | any>(schemaName).filter((m) => m.id === id)[0] || "";
  }

  static async GetAll(schemaName: string) {
    const db = await this.GetDatabase;
    return db.objects(schemaName) || [];
  }
}
