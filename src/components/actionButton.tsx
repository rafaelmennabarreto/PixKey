import React from "react";
import { ViewStyle } from "react-native";
import { Button } from "react-native-paper";

interface SaveButtonProps {
  borderColor?: string;
  onPress?: () => void;
  style?: ViewStyle;
}

const ActionButton: React.FC<SaveButtonProps> = (props) => {
  return (
    <Button
      mode="outlined"
      color="white"
      style={props.style}
      onPress={() => {
        if (props.onPress) props.onPress();
      }}
      contentStyle={{
        borderWidth: 2,
        borderColor: props.borderColor,
      }}
    >
      {props.children}
    </Button>
  );
};

export default ActionButton;
