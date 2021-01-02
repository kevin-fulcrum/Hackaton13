import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const styles=StyleSheet.create({
    
});

const App =()=>{
  return(
    <View>
      <Text>Podcasts</Text>
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