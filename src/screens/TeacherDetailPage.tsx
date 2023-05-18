import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../App";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "TeacherDetailPage">;
const TeacherDetailPage = ({ route }: Props) => {
  const teacher = route.params.teacher;
  return (
    <View>
      <Text>{teacher.name}</Text>
    </View>
  );
};

export default TeacherDetailPage;

const styles = StyleSheet.create({});
