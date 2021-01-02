import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const styles=StyleSheet.create({
    containerImage:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15
    },
    imageMenu:{
        width: 40,
        height: 40,
        borderRadius: 80,
        marginHorizontal: 15,
        marginVertical: 15,
    }
});

const App =()=>{
  return(
    <>
    <View style={styles.containerImage}>
      <View style={{
        borderColor: 'black',
        borderWidth: 2, borderRadius: 50, 
        fontWeight: 'bold'}}>
      <Image
        source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTyZ6ZRQxNzn65KdrSyG0ckL3PE5SNY1zDw&usqp=CAU',
        }}
        style={styles.imageMenu}> 
      </Image>
      </View>
      <Text style={{fontWeight: 'bold'}}>Podcasts</Text>
    </View>
    </>
  )
};

export default App;