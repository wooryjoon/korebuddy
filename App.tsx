// import "react-native-gesture-handler";
// React Native 내장 컴포넌트
import { StyleSheet } from "react-native";
// React
import React from "react";
// Library

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Component
import LoginScreen from "./src/screens/LoginScreen";
import TeacherListScreen from "./src/screens/TeacherListScreen";
import TeacherDetailPage from "./src/screens/TeacherDetailPage";
import { T_teacherData } from "./data/teacherData";

// Type
export type RootStackParamList = {
  LoginScreen: undefined;
  TeacherListScreen: undefined;
  TeacherDetailPage: { teacher: T_teacherData };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          contentStyle: style.rootScreen,
          headerStyle: {
            backgroundColor: "#5DB321",
          },
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "",
          }}
        />
        <Stack.Screen
          name="TeacherListScreen"
          component={TeacherListScreen}
          options={{
            title: "",
          }}
        />
        <Stack.Screen
          name="TeacherDetailPage"
          component={TeacherDetailPage}
          options={{
            title: "",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0F5BE",
  },
});
