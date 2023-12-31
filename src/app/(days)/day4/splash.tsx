import { View, Button } from 'react-native'
import LottieView from "lottie-react-native";
import { useRef } from 'react';
import { Stack } from 'expo-router';

const AnimationScreen = () => {
    const animation = useRef<LottieView>(null);
  return (
    <View style={{alignItems: "center",justifyContent: "center",flex: 1,backgroundColor: "black"}}>
      <Stack.Screen options={{headerShown: false}}/>
           <LottieView
           autoPlay
           style={{
             width: "80%",
             maxWidth: 400,
           }}
           source={require('@assets/lottie/netflix.json')}
         />
    </View> 
  )
}

export default AnimationScreen;