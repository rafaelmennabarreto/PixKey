import { PixKeySchemaName } from "./pixKeySchema";

const PixSchemaName = "Pix";

const PixSchema = {
  name: PixSchemaName,
  properties: {
    id: "string",
    name: "string",
    pixKey: `${PixSchemaName}[]`,
  },
};

export { PixSchemaName, PixSchema };
