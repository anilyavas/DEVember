import MarkdownDisplay from '@/components/day3/MarkdownDisplay'
import { Link, Stack } from 'expo-router'
import { Button,StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const description = `
# Weather Application
Work with the Microphone and Audio playback
`;

export default function DayDetailsScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
    <Stack.Screen options={{title: "Day 8: WeatherApp"}}/>

    <MarkdownDisplay>{description}</MarkdownDisplay>

    <Link href={"/day8/memos"} asChild>
    <Button title='Go to weather app' />
    </Link>
    

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
