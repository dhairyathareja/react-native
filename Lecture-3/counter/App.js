import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const App = () => {

  const [counter, setcounter] = useState(0);
  const increment = () =>{
    setcounter(counter+1);
  }

  const decrement = () =>{
    if(counter>0){
      setcounter(counter-1);
    }
  }

  return (
    <View style={style.container}>

      <View>
            <Text style={style.header}>Counter App</Text>
      </View> 


      <View style={style.counterContainer}>
        <TouchableOpacity style={style.btn} onPress={decrement}>
            <View>
              <Text style={style.btnText}>-</Text>
            </View>
        </TouchableOpacity>

        <Text style={style.counterText}>{counter}</Text>
        
        <TouchableOpacity style={style.btn} onPress={increment}>
          <View>
              <Text style={style.btnText}>+</Text>
          </View> 
        </TouchableOpacity> 
      </View>

    </View>
  )
}

const style= StyleSheet.create({
  container:{
    backgroundColor:'black',
    flex:1,
    alignItems:'center',
    
  },
  btn:{
    fontSize:50,
    borderRadius:25,
    width:50,
    backgroundColor:'red',
  },
  btnText:{
    textAlign: 'center',
    fontSize:25
  },
  counterText:{
    color:'gold',
    fontSize:50
  },
  header:{
    fontSize:50,
    textAlign:'center',
    color:'blue',
    marginBottom:50
  },
  counterContainer:{
    justifyContent:'space-around',
    alignItems:'center',
    flexDirection:'row',
    width:'70%',
    marginTop:70
  }


});

export default App