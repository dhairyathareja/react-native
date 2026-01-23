import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import {customStyle} from "./style";

export default function App() {
  return (
    <View style={customStyle.mainContainer}>
      <StatusBar backgroundColor={'blue'}/>
      <View style={customStyle.shape}>
        <Text style={customStyle.text}>Jai Mata Di</Text>
      </View>
      
    </View>
  )
}

