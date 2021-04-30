import React from "react";
import { ViewStyle } from "react-native";
import { Button } from "react-native-paper";
import KeytTypes from "../enums/keyTypes";

interface OutlinedButtonProps {
  labelTextColor?: string;
  onPress?: (keyType: KeytTypes) => void;
  activeKey?: KeytTypes;
  keyType?: KeytTypes;
  style?: ViewStyle;
}

const OutlinedButton: React.FC<OutlinedButtonProps> = (props) => (
  <Button
    mode="outlined"
    color="white"
    style={props.style}
    onPress={() => {
      if (props.onPress && props.keyType) props.onPress(props.keyType);
    }}
    contentStyle={{
      borderWidth: 2,
      borderColor: "white",
      backgroundColor:
        props.activeKey && props.keyType && props.activeKey === props.keyType
          ? "red"
          : "black",
    }}
  >
    {props.children}
  </Button>
);

export default OutlinedButton;
