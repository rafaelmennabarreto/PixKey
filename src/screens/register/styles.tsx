import styled from "styled-components/native";
import { TextInputMask } from "react-native-masked-text";
import OutlinedButton from "../../components/outlinedButton";
import { TextInput } from "react-native-paper";
import { Dimensions, KeyboardAvoidingViewProps } from "react-native";
import Colors from "../../utils/colors";

const Screen = Dimensions.get("window");

interface containerProps extends KeyboardAvoidingViewProps {
  navbarHeight: number;
}

export const Container = styled.KeyboardAvoidingView`
  display: flex;
  flex: 1;

  height: ${(props: containerProps) =>
    `${Screen.height - props.navbarHeight}px` || "auto"};

  background-color: ${Colors.White};
  min-height: ${Screen.height * 0.87};
  padding-left: 10px;
  padding-right: 10px;
  background: ${Colors.BackgroundColor};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  min-height: 130px;
  align-items: center;
`;

export const TipoChaveContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;

export const Text = styled.Text`
  color: ${Colors.White};
  width: 100%;
  font-size: 14px;
  font-weight: bold;
`;

export const NormalInput = styled.TextInput`
  height: 40px;
  color: white;
  border-bottom-width: 2px;
  border-bottom-color: ${Colors.White};
`;

export const Input = styled(TextInput)`
  height: 140px;
  width: 100%;
  background: transparent;
  color: ${Colors.White};
  color: yellow;
`;

export const MaskedInput = styled(TextInputMask)`
  height: 40px;
  color: white;
  border-bottom-width: 2px;
  border-bottom-color: ${Colors.White};
`;

export const ButtonOutlined = styled(OutlinedButton)`
  width: auto;
  margin-bottom: 6px;
  margin-left: 1.5%;
  margin-right: 1.5%;
`;
