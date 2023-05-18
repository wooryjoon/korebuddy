import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
type Props = {
  onPress: any;
};

export default function PrimaryButton({ onPress }: Props) {
  return (
    <View style={style.container}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [style.submit, style.pressed] : style.submit
        }
        onPress={onPress}
      >
        <Text style={style.submitText}>Go</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: 120,
    height: 40,
    // margin: 4,
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor: "",
    justifyContent: "center",
    alignItems: "center",
  },
  submit: {
    width: 120,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  submitText: {
    color: "gray",
    fontSize: 20,
  },
  pressed: {
    opacity: 0.75,
  },
});
