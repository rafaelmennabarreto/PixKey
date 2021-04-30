import styled from "styled-components/native";
import { FAB } from "react-native-paper";
import { Dimensions, ViewProps } from "react-native";
import Colors from "../../utils/colors";

const { height } = Dimensions.get("screen");

interface ContainerProps extends ViewProps {
  navbarHeigth: number;
}

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  height: ${(props: ContainerProps) =>
    `${height - props.navbarHeigth}px` || "auto"};

  background: ${Colors.BackgroundColor};
  min-height: ${height * 0.87};
`;

export const LottieContainer = styled.View`
  height: 150px;
  width: 100%;
`;

export const FabButton = styled(FAB)`
  position: absolute;
  bottom: 30px;
  right: 15px;
`;

export const Texto = styled.Text`
  color: ${Colors.White};
  width: 70%;
  text-align: center;
`;

export const ItemListContainer = styled.FlatList``;
