import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
import { Container, FabButton, Texto, LottieContainer } from "./style";
import LottieView from "lottie-react-native";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const headerBarHeight = useHeaderHeight();

  const toRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <Container navbarHeigth={headerBarHeight}>
      <LottieContainer>
        <LottieView
          source={require("../../assets/animations/nothing.json")}
          autoPlay
        />
      </LottieContainer>
      <Texto>
        Nenhuma chave cadastrada no sistema, para cadastrar uma chave clique no
        botão de mais logo abaixo =)
      </Texto>
      <FabButton icon="plus" onPress={toRegister} />
    </Container>
  );
};

export default Home;
