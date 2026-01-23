import { View, Text, StatusBar } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <StatusBar hidden={true}/> */}
      <StatusBar hidden={false} backgroundColor={"blue"}/>
      <View style={{flex: 1, justifyContent:'center', alignItems:"center"}}>
        <Text style={{color:"red", fontWeight:'bold',fontSize:25}}>JAI</Text>
      </View>

      <View style={{flex: 1, justifyContent:'center', alignItems:"center"}}>
        <Text style={{color:"red", fontWeight:'bold',fontSize:25}}>MATA</Text>
      </View>

      <View style={{flex: 1, justifyContent:'center', alignItems:"center"}}>
        <Text style={{color:"red", fontWeight:'bold',fontSize:25}}>DI</Text>
      </View>
    </View>
  )
}