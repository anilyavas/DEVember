import { Link, Stack } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function index() {
  return (
    <View>
    <Stack.Screen options={{title: "Day 3"}}/>
    <Text>index</Text>
    <Link href={"/day3/editor"} asChild>
    <Button title='Go to editor' />
    </Link>
    </View>
  )
}
