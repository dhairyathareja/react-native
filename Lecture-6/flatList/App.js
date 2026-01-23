import { View, Text, StyleSheet, ScrollView, TextInput, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [inputVal, setInputVal] = useState('');

  const [data, setData] = useState([  
    {id:1, name:"Vaishnavi"},
    {id:2, name:"Aksh"},
    {id:3, name:"Priyansh"},
    {id:4, name:"Harshit"},
    {id:5, name:"Dhairya"},
    {id:6, name:"Prince"},
    {id:7, name:"Akshat"},
    {id:8, name:"Daksh"},
    {id:9, name:"Ayush"},
    {id:10, name:"Ronak"},
    {id:11, name:"Rishu"},
  ])

  function updateList(newName) {
    setData([...data,{id:data.length+1,name:newName.trim()}])
    setInputVal('');
  }

  return (
    <View style={style.pageContainer}>
      
      <View style={style.headerContainer}>
        <Text style={style.header}>List</Text>
      </View>

      <View style={style.inputContainer}>
          <TextInput 
            style={style.inputBox}
            value={inputVal}
            onChangeText={value=>{setInputVal(value)}}
            placeholder='Write Name here...'
          />
          <Button title='Add' onPress={()=>{updateList(inputVal)}}></Button>
      </View>

      {/* <ScrollView> */}

        <FlatList
        keyExtractor={(item)=>item.id}
        numColumns={2}
        data={data}
        renderItem={({item})=>{
          return(
            <View 
              style={[style.item, (item.id%2==0) ? style.itemEven : style.itemOdd]}>
              <Text style={style.listText}>{item.name}</Text>
            </View>
          )
        }}
        >

        </FlatList>

      {/* </ScrollView> */}

    </View>
  )
}


const style=StyleSheet.create({
  
  pageContainer:{
    flex:1,
    backgroundColor:'black'

  },
  headerContainer:{
    alignItems:'center',
    marginTop:'10%',
  },
  header:{
      color:'red',
      fontSize:75,
      fontWeight:'bold'
  },
  item:{
    marginTop:10,
    alignItems:'center',
    marginHorizontal:20,
    borderRadius:25,
    width:'41.5%',
  },
  itemEven:{
    backgroundColor:'gold'
  },
  itemOdd:{
    backgroundColor:'#cccc'
  },
  listText:{
    fontSize:30,
    color:'blue',
    padding:10,
  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  inputBox:{
        borderColor:'white',
        borderRadius:25,
        borderWidth:2,
        padding:'3%',
        margin:'5%',
        width:'60%'
    },
})

export default App