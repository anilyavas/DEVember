import MarkdownDisplay from '@/components/day3/MarkdownDisplay'
import { Link, Stack } from 'expo-router'
import { Button,StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const description = `
# Authentication
AWS Amplify v6 Authentication`;

export default function DayDetailsScreen() {
  return (
    <SafeAreaView edges={['bottom']} style={{flex:1}}>
    <Stack.Screen options={{title: "Day 9: Authentication"}}/>

    <MarkdownDisplay>{description}</MarkdownDisplay>

    <Link href={"/day9/protected"} asChild>
    <Button title='Go to protected page' />
    </Link>
    

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
