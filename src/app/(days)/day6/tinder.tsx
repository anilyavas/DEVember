import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import TinderCard from '@/components/day6/TinderCard'
import { Stack } from 'expo-router';
import { useSharedValue} from "react-native-reanimated";


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
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Stack.Screen options={{headerShown: false}}/>
      {users.map((user,index) => (
              <TinderCard key={user.id} user={user} numOfCards={users.length} index={index} activeIndex={activeIndex} />
      ))}
    </View>
  )
}
const styles = StyleSheet.create({});