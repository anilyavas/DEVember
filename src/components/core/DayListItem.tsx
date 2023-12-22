import { Text,StyleSheet,Pressable } from "react-native";
import { Link } from "expo-router";

type DayListItem = {
    day: number;
}

export default function DayListItem({day}:DayListItem){
    return (
      <Link href={`/day${day}`} asChild>
        <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text> 
      </Pressable>
      </Link>
    )
};

const styles = StyleSheet.create({
box: {
    backgroundColor: "#F9EDe3",
    flex: 1,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,
},
text: {
    color: "#9B4521",
    fontSize: 70,
    fontFamily: "AmaticBold",
  },
});