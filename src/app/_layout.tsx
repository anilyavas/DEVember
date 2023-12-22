import { Stack } from "expo-router";
import {useFonts, Inter_900Black} from "@expo-google-fonts/inter";
import {AmaticSC_400Regular,AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";

export default function RootLayout(){
    const [fontsLoaded,fontsError] = useFonts({
        Inter: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
      });
      useEffect(() => {
        if(fontsLoaded || fontsError){
          SplashScreen.hideAsync();
        };
      },[fontsLoaded,fontsError]);
    
      if(!fontsLoaded && !fontsError){
        return null;
      }
    return (
        <Stack screenOptions={{}}>
            <Stack.Screen name="index" options={{title: "DEVember"}}/>
        </Stack>
    );
}