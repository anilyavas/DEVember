import { View, Text, ActivityIndicator,StyleSheet,FlatList,ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from "expo-location";
import ForecastItem from '@/components/day8/ForecastItem';
import { Stack } from 'expo-router';

const BASE_URL = `https://api.openweathermap.org/data/2.5`;
const OPEN_WEATHER_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY;
const bgImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-images/1.jpg';


type MainWeather ={
    temp: number;
    feels_like : number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
};
type Weather = {
  name: string;
  main: MainWeather;
};
export type WeatherForecast = {
  main: MainWeather;
  dt: number;

}
export default function WeatherScreen() {

    const [weather,setWeather] = useState<Weather>();
    const [location,setLocation] = useState<Location.LocationObject>();
    const [errorMsg,setErrorMsg] = useState('');
    const [forecast,setForecast] = useState<WeatherForecast[]>();

    useEffect(() => {
      (async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted'){
          setErrorMsg('Permission to access location was denied');
          return;
        } 
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    },[])

    useEffect(() => {
      if(location){
        fetchWeather();
        fetchForecast();
      }
    },[location]);

    const fetchWeather =  async () => {
      if(!location){
        return;
      }

      
      
      const results =  await fetch(`${BASE_URL}/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPEN_WEATHER_KEY}&units=metric`);
      const data = await results.json();
      console.log(JSON.stringify(data, null, 2));
      setWeather(data);
  };

  const fetchForecast = async () => {
    // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    if(!location){
      return;
    };
    const results =  await fetch(`${BASE_URL}/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPEN_WEATHER_KEY}&units=metric`);
    
    const data = await results.json();
    console.log(JSON.stringify(data, null, 2));
    setForecast(data.list);
  };
      

    if(!weather){
      return <ActivityIndicator /> ;
    }
    

  return (
    <ImageBackground source={{uri: bgImage}} style={styles.container}>
      <View style={{...StyleSheet.absoluteFillObject, backgroundColor: "rgba(0,0,0,0.5)"}}/>
      <Stack.Screen options={{headerShown: false}}/>
    <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
      <Text style={styles.location}>{weather.name}</Text>
      <Text style={styles.temperature}>{Math.floor(weather.main.temp)}°</Text>
      </View>
      <FlatList showsHorizontalScrollIndicator={false} style={{flexGrow: 0, height: 200, marginBottom: 40}} contentContainerStyle={{gap: 10,paddingHorizontal: 10}} horizontal data={forecast} renderItem={({item}) => 
      <ForecastItem forecast={item} />
      }/>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  location: {
    fontFamily: "Inter",
    fontSize: 30,
    color: "lightgrey",
  },
  temperature: {
    fontFamily: "InterBlack",
    fontSize: 150,
    color: "#FEFEFE",

  },
});