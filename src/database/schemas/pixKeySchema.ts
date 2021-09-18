import { PixSchemaName } from "./pixSchema";

const PixKeySchemaName = "PixKey";

const PixKeySchema = {
  name: PixKeySchemaName,
  properties: {
    id: "string",
    key: "string",
    isPrincipal: "bool",
    type: "int",
    pix: {
      type: "linkingObjects",
      objectType: PixSchemaName,
      property: "pixKey",
    },
  },
};

export { PixKeySchemaName, PixKeySchema };
