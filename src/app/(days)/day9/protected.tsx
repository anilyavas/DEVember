import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ProtectedScreen() {
  return (
    <View>
      <Text style={{ fontFamily: "InterBold", fontSize: 30 }}>ProtectedScreen</Text>
      <Text style={{ fontFamily: "InterSemi", fontSize: 20 }}>You should see this page only if you are authenticated</Text>
    </View>
  )
}
const styles = StyleSheet.create({});