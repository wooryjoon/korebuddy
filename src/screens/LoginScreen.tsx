import React from "react";
import { useState } from "react";
// inline Components
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
// Components
import LoginButton from "../components/LoginButton";

export default function LoginScreen({ navigation }: any): JSX.Element {
  const [id, setId] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title2}>KoreBuddy</Text>
      <View style={styles.container}>
        <Text style={styles.formMessage1}>click Here to make Account</Text>
        <View style={styles.id}>
          <TextInput
            placeholder="Username"
            value={id}
            onChangeText={idInputHandler}
          />
        </View>
        <View style={styles.pwd}>
          <TextInput
            placeholder="Password"
            value={pwd}
            onChangeText={pwdInputHandler}
          />
        </View>
        <LoginButton
          onPress={() => {
            navigation.navigate("TeacherListScreen");
          }}
        ></LoginButton>
      </View>
    </View>
  );
  function idInputHandler(enteredText: string) {
    setId(enteredText);
  }
  function pwdInputHandler(enteredPwd: string) {
    setPwd(enteredPwd);
  }
  function confirmInputHandler() {
    if (id !== "admin" && pwd !== "admin") {
      Alert.alert("Invalid Account!", "Please Check Your ID or Password!", [
        { text: "OK", style: "cancel", onPress: resetInputHandler },
      ]);
      return false;
    }
    return true; // app.tsx로 올바른 유저 정보라고 넘겨줌
  }
  function resetInputHandler() {
    setId("");
    setPwd("");
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: "auto",
  },

  title2: {
    color: "black",
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  container: {
    // justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 500,
    // borderWidth: 1,
    // borderColor: "white",
  },
  formMessage1: {
    color: "lightgray",
    fontSize: 15,

    textAlign: "center",
    marginBottom: 20,
  },
  formMessage2: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  id: {
    width: 340,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 30,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  pwd: {
    width: 340,
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
});
