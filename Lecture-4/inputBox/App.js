import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import style from './style'

const App = () => {

  const [inputVal, setInputVal] = useState('');
  return (
    <View style={style.pageContainer}>
        
        <View style={style.headerView}>
          <Text style={style.header}>Input Box</Text>
        </View>
        
        <View>
          <TextInput 
            style={style.inputBox}
            value={inputVal}
            onChangeText={value=>{setInputVal(value)}}
            placeholder='Write message here...'
          />
      </View>

      <View style={style.displayView}>
          <Text style={style.text}>{inputVal}</Text>
      </View>

      <View>
        <Button title='Clear' onPress={()=>setInputVal('')}></Button>
      </View>

    </View>
  )
}
export default App