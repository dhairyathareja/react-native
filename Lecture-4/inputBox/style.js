import {StyleSheet} from 'react-native';

const style=StyleSheet.create({

    pageContainer:{
        flex:1,
        backgroundColor:'black',
    },
    headerView:{
        alignItems:'center',
        marginTop:'10%'
    },
    header:{
        color:'red',
        fontSize:50,  
    },
    inputBox:{
        borderColor:'white',
        borderRadius:25,
        borderWidth:2,
        padding:'2%',
        margin:'5%',
    },
    displayView:{
        flex:1,
        justifyContent:'center',
        padding:'10%',
    },
    text:{
        color:'blue',
        fontSize:20,
    }
    

})

export default style;