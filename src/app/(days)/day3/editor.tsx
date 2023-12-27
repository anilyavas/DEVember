import { StyleSheet, View,TextInput, Text, Pressable } from "react-native";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { useState } from "react";

const template = `# Sample Markdown Content

Hello **World**!
`;

export default function EditorScreen() {
    const [content,setContent] = useState(template);
    const [tab,setTab] = useState("edit");
  return (
    <View style={styles.page}>
        <View style={styles.tabsContainer}>
            <Pressable onPress={() => setTab("edit")} style={[styles.tab,{borderColor: tab === "edit"?"mediumorchid": "grey"}]}>
            <Text style={styles.tabText}>Edit</Text>
            </Pressable>
            <Pressable onPress={() => setTab("preview")} style={[styles.tab,{borderColor: tab === "preview"?"mediumorchid": "grey"}]}>
            <Text style={styles.tabText}>Preview</Text>
            </Pressable>

        </View>
        {tab === "edit" ? (<TextInput value={content} onChangeText={setContent} multiline numberOfLines={50} style={styles.input} />)
: <MarkdownDisplay>{content}</MarkdownDisplay>}
    </View>
  );
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: "whitesmoke",
        flex: 1,
        padding: 10,
        
    },
    input: {
        backgroundColor: "white",
        flex: 1,
        padding: 20,
        paddingTop: 20,
        borderRadius: 10,
        fontSize: 16,
    },
    tab: {
        flex: 1,
        padding: 10,
        borderColor: "grey",
        borderWidth: 2,
        alignItems: "center",
        borderRadius: 10,
    },
    tabsContainer: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 10,
    },
    tabText: {
        fontFamily: "InterBold",
    },
});

