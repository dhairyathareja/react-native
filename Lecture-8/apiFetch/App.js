import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {style} from './style'
import Axios from 'axios'

const App = () => {

  const [data, setData] = useState([]);


  const fetchData = async () => {
    
    try {
      const response = await Axios.get('https://api.slingacademy.com/v1/sample-data/photos/');
      setData(response.data.photos);

    } catch (error) {
      console.log(error);
    }

  }

   useEffect(() => {
    
    fetchData();

  }, [])
    

  return (
    <View style={style.pageContainer}>

      <View style={style.headerView}>
        <Text style={style.headerText}>API Fetch</Text>
      </View>
      

      <ScrollView>

        {
          data.map((list,index)=>{
            console.log(list);
            return(
              <View key={index} style={style.post}>
                <Image source={{uri: list.url}}
                  style={style.postImage}
                />

                <Text style={style.postText}>{list.title}</Text>
              </View>
            )

          })
        }

      </ScrollView>

    </View>
  )
}

export default App