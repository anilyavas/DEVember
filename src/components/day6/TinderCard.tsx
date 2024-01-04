import { View, Text ,StyleSheet, Image, Dimensions} from 'react-native'
import React from 'react'

const profile = {
    id: 1,
    image: "https://via.placeholder.com/300",
    name: "Dani"
}

export const tinderCardWidth = Dimensions.get("screen").width *0.8;

export default function TinderCard() {
  return (
    <View style={styles.card}>
        <Image style={[StyleSheet.absoluteFillObject,styles.image]} source={{uri: profile.image}} />
      <Text style={styles.name}>{profile.name}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    card: {
        width: tinderCardWidth,
        // height: tinderCardWidth * 1.67,
        aspectRatio: 1/1.67,
        justifyContent: "flex-end",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    image: {
        borderRadius: 15,
    },
    name: {
        fontSize: 24,
        color: "white",
    },
});