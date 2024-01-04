import MarkdownDisplay from '@/components/day3/MarkdownDisplay'
import { Link, Stack } from 'expo-router'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const description = `
# AirBNB Maps
`;

export default function DayDetailsScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
    <Stack.Screen options={{title: "Day 5: Maps"}}/>

    <MarkdownDisplay>{description}</MarkdownDisplay>

    <Link href={"/day5/airbnb"} asChild>
    <Button title='Go to AirBNB Map' />
    </Link>
    

    </SafeAreaView>
  );
}
