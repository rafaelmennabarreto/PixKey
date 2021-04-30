import { TextInputMaskTypeProp as types } from "react-native-masked-text";

enum KeyTypes {
  aleatorio = 1,
  cpf,
  cnpj,
  telefone,
  email,
}

namespace KeyTypes {
  export function getTypeString(type: KeyTypes): types {
    const { telefone, cnpj, cpf } = KeyTypes;
    switch (type) {
      case cpf:
        return "cpf";

      case cnpj:
        return "cnpj";

      case telefone:
        return "cel-phone";

      default:
        return "custom";
    }
  }
}

export default KeyTypes;
