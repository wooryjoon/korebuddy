import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { T_teacherData } from "../../data/teacherData";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useNavigation } from "@react-navigation/native";
type TeacherCardNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Props = {
  teacher: T_teacherData;
};

const TeacherCard = ({ teacher }: Props) => {
  const navigation = useNavigation<TeacherCardNavigationProp>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.topContainer}
        onPress={() => {
          navigation.navigate("TeacherDetailPage", { teacher });
        }}
      >
        <Image source={teacher.source} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        {/* Like Button */}
        <View style={styles.likeContainer}>
          <Text>likeContainer</Text>
        </View>
        {/* TeacherInfo */}
        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{teacher.name}</Text>
            <Text style={styles.age}>{teacher.age}</Text>
          </View>
        </View>
        <View style={styles.disLikeContainer}>
          <Text>disLikeContainer</Text>
        </View>
      </View>
    </View>
  );
};

export default TeacherCard;

//********************************Styles ************************************************************

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden",
    shadow: {
      ...Platform.select({
        ios: {
          shadowColor: "#ffffff",
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
        },
        android: {
          elevation: 4,
        },
      }),
    },
  },
  topContainer: {
    width: "100%",
    flex: 0.85,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  bottomContainer: {
    flex: 0.15,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  likeContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignContent: "center",
  },
  nameContainer: {
    flex: 0.5,
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 23,
    fontWeight: "bold",
  },
  age: {
    fontSize: 15,
  },
  ageContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },

  disLikeContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
});
