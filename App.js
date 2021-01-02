import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const styles=StyleSheet.create({
    textTitle:{
      fontSize: 30,
      marginRight: 160,
      fontWeight: 'bold'
    },
    containerInit:{
      flex: 0.15,
      flexDirection:  'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagePerfil:{
      width: 50,
      height: 50,
      borderRadius: 50,
    }
});

const App =()=>{
  return(
    <View style={styles.containerInit}>
      <Text style={styles.textTitle}>Podcasts</Text>
      <Image
        source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTyZ6ZRQxNzn65KdrSyG0ckL3PE5SNY1zDw&usqp=CAU',
        }}
        style={styles.imagePerfil}> 
      </Image>
    </View>
  )
};

export default App;
