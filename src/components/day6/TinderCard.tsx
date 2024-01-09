import { View, Text ,StyleSheet, Image, Dimensions} from 'react-native'
import React from 'react'
import {LinearGradient} from "expo-linear-gradient";
import Animated, { SharedValue, interpolate, useAnimatedStyle} from 'react-native-reanimated';


const screenWidth = Dimensions.get('screen').width;
export const tinderCardWidth = Dimensions.get('screen').width *0.8;

type TinderCard = {
    user: {
        image: string,
        name: string,
    };
    numOfCards: number,
    index: number,
    activeIndex: SharedValue<number>,
    translationX: SharedValue<number>,
}

export default function TinderCard({user,numOfCards,index,activeIndex,translationX}: TinderCard) {
    
    const style = useAnimatedStyle(() => ({
        opacity: interpolate(
            activeIndex.value, 
            [index-1, index, index+1],
            [1- 1/5,1,1]),
            transform: [
                {
                    scale: interpolate(activeIndex.value, [index-1, index, index+1],[0.95,1,1]),
                },
                {
                    translateY: interpolate(activeIndex.value, [index-1,index,index+1],[-30,0,0]),
                },
                {
                    translateX: activeIndex.value === index ? translationX.value : 0,
                },
                {
                    rotateZ: activeIndex.value === index ?  `${interpolate(translationX.value,[-screenWidth / 2,0,screenWidth/2],[-15,0,15])}deg` : '0deg',
                },
            ],
    }));

  return (
    <Animated.View style={[styles.card, 
    {
        zIndex: numOfCards-index, 
        opacity: 1-index * 0.2,
        transform: [
            {
            translateY: -index*30},
            {scale: 1- index * 0.05},
            ]}]}>
        <Image style={[StyleSheet.absoluteFillObject,styles.image]} source={{uri: user.image}} />

        <LinearGradient 
        colors={["transparent","rgba(0,0,0,0.8)"]}
        style={[StyleSheet.absoluteFill,styles.overlay]}
        />
      <View style={styles.footer}>
      <Text style={styles.name}>{user.name}</Text>
      </View>
    </Animated.View>
  )
};

const styles = StyleSheet.create({
    card: {
        width: tinderCardWidth,
        // height: tinderCardWidth * 1.67,
        aspectRatio: 1/1.67,
        justifyContent: "flex-end",
        position: "absolute",
        //shadows
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    footer: {
        padding: 10,
    },
    image: {
        borderRadius: 15,
    },
    overlay: {
        top: "50%",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    name: {
        fontSize: 24,
        color: "white",
        fontFamily: "InterBold",
    },
});