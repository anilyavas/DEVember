import { View,Text,StyleSheet } from "react-native";

type DayListItem = {
    day: number;
}

export default function DayListItem({day}:DayListItem){
    return (
        <View style={styles.box} >
        <Text style={styles.text}>{day}</Text>
      </View>
    )
}

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
  },
});