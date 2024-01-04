import { View, Text,StyleSheet, Image, ViewStyle } from 'react-native'
import React from 'react'
import apartments from "@assets/data/day5/appartments.json";

type ApartmentListItem = {
  apartment: (typeof apartments)[0];
  containerStyle?: ViewStyle;
}; 

export default function ApartmentListItem({apartment, containerStyle}: ApartmentListItem) {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{uri: apartment.image}} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{apartment.title}</Text>
        <Text style={styles.description}>Stay at this apartment for an affordable price</Text>
        <View style={styles.footer}>
      <Text style={styles.price}>$ {apartment.price} night</Text>
      <Text style={styles.price}>* {apartment.rating} ({apartment.stars})</Text>
      </View>
      </View>
    </View>
  )
};
const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        flexDirection: "row",
        borderRadius: 20,
        overflow: "hidden",
    },
    title: {
      fontFamily: "InterBold",
      marginBottom: 10,
      fontSize: 16,
    },
    description: {
      color: "grey",
    },
    image: {
      width: 150,
      aspectRatio: 1,
      backgroundColor: "grey",
    },
    rightContainer: {
      padding: 10,
      flex: 1,
    },
    price: {
      fontFamily: "InterBold",
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: "auto",
    },
})