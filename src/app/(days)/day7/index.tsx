import MarkdownDisplay from '@/components/day3/MarkdownDisplay'
import { Link, Stack } from 'expo-router'
import { Button,StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const description = `
# IOS Voice Memos
`;

export default function DayDetailsScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
    <Stack.Screen options={{title: "Day 7: IOS Voice Memos"}}/>

    <MarkdownDisplay>{description}</MarkdownDisplay>

    <Link href={"/da7/"} asChild>
    <Button title='Go to' />
    </Link>
    

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
