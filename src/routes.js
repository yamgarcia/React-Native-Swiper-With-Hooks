import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SomeComponent from "./pages/Detail";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name='SomeComponent' component={SomeComponent} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
