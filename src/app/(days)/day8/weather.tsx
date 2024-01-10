import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const url = `https://api.openweathermap.org/data/2.5/weather?lat=41.451733&lon=31.791344&appid=31cdf7c2dad66944c8801a652ff06d61&units=metric`;

export default function WeatherScreen() {

    const [weather,setWeather] = useState();

    const fetchWeather =  async () => {
        // fetch data
        console.log("Fetch data");

        const results =  await fetch(url);
        const data = await results.json();
        console.log(JSON.stringify(data, null, 2));
        setWeather(data);
    };

    useEffect(() => {
        fetchWeather();
    },[]);

    

  return (
    <View>
      <Text>WeatherScreen</Text>
    </View>
  )
}