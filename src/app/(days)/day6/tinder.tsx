import { View,StyleSheet } from 'react-native'
import React from 'react'
import TinderCard from '@/components/day6/TinderCard'
import { Stack } from 'expo-router';
import { interpolate, useSharedValue, withDecay, withSpring} from "react-native-reanimated";
import { Gesture, GestureDetector } from 'react-native-gesture-handler';


const users = [
  {
  id: 1,
  image: "https://via.placeholder.com/300",
  name: "Dani"
},
{
  id: 2,
  image: "https://via.placeholder.com/300",
  name: "Jon"
},
{
  id: 3,
  image: "https://via.placeholder.com/300",
  name: "Alice"
},
{
  id: 4,
  image: "https://via.placeholder.com/300",
  name: "Carl"
},
{
  id: 5,
  image: "https://via.placeholder.com/300",
  name: "Kelsey"
},
];

export default function TinderScreen() {
    const activeIndex = useSharedValue(0);
    const translationX = useSharedValue(0);

    const gesture = Gesture.Pan()
    .onBegin((event) => console.log("onBegin:"))
    .onChange((event) => {
      translationX.value = event.translationX;
      // activeIndex.value = interpolate();
    })
    .onStart((event) => console.log("onStart:"))
    .onEnd((event) => {
      translationX.value = withSpring(0);
      if(Math.abs(event.velocityX) > 400){
        translationX.value === withSpring(Math.sign(event.velocityX)*500,{velocity:event.velocityX});
        activeIndex.value = interpolate(translationX.value, [Math.abs(event.velocityX),0],[activeIndex.value]);
      }
    })
    .onFinalize((event) => console.log("onFinalize:"))
    ;


  return (
    <GestureDetector gesture={gesture}>
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Stack.Screen options={{headerShown: false}}/>
      {users.map((user,index) => (
              <TinderCard key={user.id} user={user} numOfCards={users.length} index={index} activeIndex={activeIndex} translationX={translationX} />
      ))}
    </View>
    </GestureDetector>
  )
}
const styles = StyleSheet.create({});