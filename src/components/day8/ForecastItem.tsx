import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { WeatherForecast } from '@/app/(days)/day8/weather'
import dayjs from "dayjs";

export default function ForecastItem({forecast}:{forecast: WeatherForecast}) {
  return (
    <View style={styles.container}>
      <Text style={styles.temperature}>{Math.round(forecast.main.temp)}°</Text>
      <Text style={styles.date}>{dayjs(forecast.dt*1000).format('ddd ha')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "ghostwhite",
        padding: 10,
        height: "100%",
        aspectRatio: 9/16,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    temperature: {
        fontFamily: "InterBlack",
        fontSize: 35,
        color: "grey",
        marginVertical: 10,
    },
    date: {
        fontFamily: "Inter",
        color: "grey",
        fontSize: 16,
    }
})