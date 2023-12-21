import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import DayListItem from './src/components/core/DayListItem';
import {useFonts, Inter_900Black} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((val,index) => index+1);

export default function App() {
  const [fontsLoaded,fontsError] = useFonts({
    Inter: Inter_900Black,
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
    <View style={styles.container}>

      <FlatList 
      data={days} 
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.column}
      renderItem={({item}) => (
        <DayListItem  day={item}/>
      )}
      numColumns={2}
      />
      

   { /*  {days.map((day) => (
        <View style={styles.box} key={day}>
        <Text style={styles.text}>{day}</Text>
      </View>
      ))} */}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  }
});
