import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useState } from "react";
import Swiper from "react-native-swiper";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
// Data
import {
  teacherData as teacherArray,
  T_teacherData,
} from "../../data/teacherData";
// Constants
import { screenConstants } from "../util/constants";
// Component
import TeacherCard from "../components/TeacherCard";

// Type
type Props = NativeStackScreenProps<RootStackParamList, "TeacherListScreen">;

// main
const TeacherListScreen = ({}: Props) => {
  const [teacherData, setTeacherData] = useState<T_teacherData[]>(teacherArray);
  return (
    <View style={styles.container}>
      <Swiper showsPagination={false} loop={true}>
        {teacherData.map((teacher) => {
          return <TeacherCard key={teacher.name} teacher={teacher} />;
        })}
      </Swiper>
    </View>
  );
};

export default TeacherListScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: screenConstants.SCREEN_WIDTH * 0.9,
    height: screenConstants.SCREEN_HEIGHT * 0.78,
  },
});
