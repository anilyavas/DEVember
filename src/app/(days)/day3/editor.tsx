import { View, Text,StyleSheet } from "react-native";
import Markdown from "react-native-markdown-display";

const copy = `# Sample Markdown Content

## Introduction
Welcome to this sample markdown document. Markdown is a lightweight markup language for 

## Section 1: Markdown Basics

- **Bold Text:** Use ** or __ to make text bold. Example: **This is bold**
- *Italic Text:* Use * or _ to make text italic. Exmaple: *This is italic* 

## Subsection: Lists

1. Numbered lists are easy
2. Just start with a nmber and a dot
3. Like this!

- Bullet lists are also simple
- Use a dash and a space
- Like this!

## Section 2: Advance Topics

## Images and Links

- To add an image: '![Alt text](URL)'
- To create a link: '[Link text](URL)'

### Code Blocks
`;

export default function EditorScreen() {
  return (
    <View style={styles.page}>
        <Markdown>{copy}</Markdown>
    </View>
  );
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1,
        padding: 10,
    },
});

