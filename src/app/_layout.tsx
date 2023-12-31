import { Stack } from "expo-router";
import {useFonts, Inter_900Black,Inter_600SemiBold, Inter_400Regular,Inter_700Bold} from "@expo-google-fonts/inter";
import {AmaticSC_400Regular,AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc";
import { useEffect, useState } from "react";
import { SplashScreen } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AnimatedSplashScreen from "@/components/day4/AnimatedSplashScreen";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout(){
  const [appReady,setAppReady] = useState(false);
  const [splashAnimationFinished,setSplashAnimationFinished] = useState(false);
  const showAnimatedSplash = !appReady || !splashAnimationFinished;
  
    const [fontsLoaded,fontsError] = useFonts({
        Inter: Inter_400Regular,
        InterSemi: Inter_600SemiBold,
        InterBold: Inter_700Bold,
        InterBlack: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
      });
      useEffect(() => {
        if(fontsLoaded || fontsError){
          //SplashScreen.hideAsync();
          setAppReady(true);
        };
      },[fontsLoaded,fontsError]);

      if(showAnimatedSplash){
        return (<AnimatedSplashScreen onAnimationFinish={(isCancelled) => {
          if(!isCancelled){
            setSplashAnimationFinished(true)
          }
        }}
        />)
      }

    return (
      <GestureHandlerRootView style={{flex: 1}}>
         
            <Animated.View style={{flex: 1}} entering={FadeIn} >
            <Stack screenOptions={{}}>
            <Stack.Screen name="index" options={{title: "DEVember"}}/>
        </Stack>
        </Animated.View>
          
        </GestureHandlerRootView>
    );
}