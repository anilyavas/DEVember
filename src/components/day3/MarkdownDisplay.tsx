import { PropsWithChildren } from "react";
import { StyleSheet,ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";


export default function MarkdownDisplay({children}:PropsWithChildren) {
  return (
    <ScrollView  contentInsetAdjustmentBehavior="automatic" style={styles.page}>
        <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

const markdownStyles = StyleSheet.create({
    heading1: {
        fontFamily: "InterBlack",
        color: "#212020",
        marginBottom: 5,
        marginTop: 10,
        lineHeight: 40,
    },
    heading2: {
        fontFamily: "InterBold",
        color: "#404040",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 30,
    },
    body: {
        fontSize: 16,
        lineHeight: 24,
    }
});
const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1,
        padding: 10,
        borderRadius: 10,
    },
});

