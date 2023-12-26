import { Text, View, StyleSheet,SafeAreaView,Pressable } from "react-native"
import {  Stack, router } from "expo-router";
import {FontAwesome5} from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { GestureDetector,Gesture } from "react-native-gesture-handler";



const onboardingSteps = [
    {
        icon: "snowflake",
        title: "Welcome #DEVember",
        description: "Daily React Native tutorials during December",
    },
    {
        icon: "people-arrows",
        title: "Learn and grow together",
        description: "Learn by building 24 projects with React Native and Expo",
    },
    {
        icon: "people-arrows",
        title: "Education for children",
        description: "Contribute to the fundraiser to help save the children in their effort of providing education to every child",
    },
]
export default function OnboardingScreen() {

    const [screenIndex, setScreenIndex] = useState(0);
    const data = onboardingSteps[screenIndex];
    const onContinue = () => {
        const isLastScreen = screenIndex === onboardingSteps.length -1 ;
        if(isLastScreen){
        endOnboarding();
        }else{
        setScreenIndex(screenIndex+1);
        }
    };
    const endOnboarding = () => {
        setScreenIndex(0);
        router.back();
    };
    const fling = Gesture.Fling().onEnd((event) => {
        console.log("fling");
    }
    );

    return (
        
        <SafeAreaView style={styles.page}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="light"/>
            <GestureDetector gesture={fling}>
            <View style={styles.pageContent}>
                <View style={styles.stepIndicatorContainer}>
                    {onboardingSteps.map((step,index) => (
                    <View style={[styles.stepIndicator, {backgroundColor: index === screenIndex ? "#cef202" : "grey"  }]} />
                   ))}
                </View>
            <FontAwesome5 style={styles.image} name={data.icon} size={100} color="#cef202" />
            <View style={styles.footer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <View style={styles.buttonsRow}>
                <Text onPress={endOnboarding} style={styles.buttonText}>Skip</Text>
            <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
            </View>
            </View>
            </View>
            </GestureDetector>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    page: {
        justifyContent: "center",
        flex: 1,
        backgroundColor: "#15141a",
        padding: 20,
    },
    pageContent: {
        flex: 1,
        padding: 20,
    },
    stepIndicatorContainer: {
        flexDirection: "row",
        gap: 8,
        marginHorizontal: 15,
    },
    stepIndicator: {
        flex: 1,
        height: 3,
        backgroundColor: "grey",
        borderRadius: 10,
    },
    image: {
        alignSelf: "center",
        margin: 20,
        marginTop: 50,
    },
    
    title: {
        color: "#fdfdfd",
        fontSize: 50,
        fontFamily: "InterBlack",
        letterSpacing: 1.5,
        marginVertical: 10,
    },
    description: {
        color: "gray",
        fontSize: 20,
        fontFamily: "Inter",
        lineHeight: 28,
    },
    footer: {
        marginTop: "auto",
    },
    buttonsRow: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    button: {
        backgroundColor: "#302e38",
        borderRadius: 50,
        alignItems: "center",
        flex: 1,
    },
    buttonText: {
        color: "#fdfdfd",
        fontFamily: "InterSemi",
        fontSize: 16,
        padding: 15,
        paddingHorizontal: 25,
    },
})