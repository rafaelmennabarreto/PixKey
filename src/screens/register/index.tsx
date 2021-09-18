import React, { useState } from "react";
import { ScrollView } from "react-native";
import {
  Container,
  Text,
  MaskedInput,
  InnerContainer,
  ButtonOutlined,
  NormalInput,
  Input,
  TipoChaveContainer,
} from "./styles";
import { TextInputMaskTypeProp as types } from "react-native-masked-text";
import KeyTypes from "../../enums/keyTypes";
import ActionButton from "../../components/actionButton";
import { useHeaderHeight } from "@react-navigation/stack";

const Register: React.FC = () => {
  const [pixValue, setPixvalue] = useState("");
  const [keyType, setKeyType] = useState<types>("cpf");
  const [activeKey, setActiveKey] = useState<KeyTypes>(KeyTypes.aleatorio);
  const headerHeight = useHeaderHeight();

  const selectKey = (selectedKeyType: KeyTypes) => {
    setKeyType(KeyTypes.getTypeString(selectedKeyType));
    setActiveKey(selectedKeyType);
    setPixvalue("");
  };

  const getMaskedInput = () => (
    <MaskedInput
      value={pixValue}
      onChangeText={(val) => setPixvalue(val)}
      type={keyType}
    />
  );

  const getNormalInput = () => <NormalInput />;

  const save = () => {};

  const buttonOutlinedData = [
    { text: "Cpf", keyType: KeyTypes.cpf },
    { text: "Cnpj", keyType: KeyTypes.cnpj },
    { text: "E-mail", keyType: KeyTypes.email },
    { text: "Celular", keyType: KeyTypes.telefone },
    { text: "Aleatória", keyType: KeyTypes.aleatorio },
  ];

  return (
    <ScrollView>

      <Container behavior="padding" navbarHeight={headerHeight}>

        <InnerContainer>
          <Text> Tipo de Chave </Text>
          <TipoChaveContainer>
            {buttonOutlinedData.map((b, i) => (
              <ButtonOutlined
                key={i}
                activeKey={activeKey}
                keyType={b.keyType}
                onPress={selectKey}
              >
                {b.text}
              </ButtonOutlined>
            ))}
          </TipoChaveContainer>
        </InnerContainer>

        <InnerContainer>
          <Text> Name </Text>
          <Input render={getNormalInput} />
        </InnerContainer>

        <InnerContainer>
          <Text>Chave</Text>
          {keyType === "custom" ? (
            <Input render={getNormalInput} />
          ) : (
            <Input render={getMaskedInput} />
          )}
        </InnerContainer>

        <InnerContainer
          style={{ flexDirection: "row", justifyContent: "space-evenly" }}
        >
          <ActionButton borderColor="red">Voltar</ActionButton>
          <ActionButton onPress={save} borderColor="green">Salvar</ActionButton>
        </InnerContainer>

      </Container>
    </ScrollView>
  );
};

export default Register;
