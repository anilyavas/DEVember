import { Link, Stack } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'
export default function index() {
  return (
    <View>
    <Stack.Screen options={{title: "Day 2"}}/>
    <Text>index</Text>
    <Link href={"/day2/onboarding"} asChild>
    <Button title='Go to onboarding' />
    </Link>
    </View>
  )
}
