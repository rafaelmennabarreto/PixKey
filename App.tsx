import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { stackRoutes } from "./src/route";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "./src/utils/colors";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {stackRoutes.map((s, i) => (
          <Stack.Screen
            key={i}
            name={s.RouteName}
            component={s.Component}
            options={{
              headerTintColor: "white",
              title: s.Title,
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: Colors.BackgroundColor,
              },
              headerTitleStyle: { alignSelf: "center" },
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
