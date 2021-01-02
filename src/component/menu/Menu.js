import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
 
const styles=StyleSheet.create({
    containerImage:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15
    },
    imageMenu:{
        width: 60,
        height: 60,
        marginHorizontal: 15,
        marginVertical: 15,
    }
});

const Menu =({item})=>{
  return(
    <>
    <View style={styles.containerImage}>
      
      <Image
        source={{
        uri: item.url,
        }}
        style={styles.imageMenu}> 
      </Image>
      <Text style={{fontWeight: 'bold'}}>{item.descripcion}</Text>
    </View>
  </>
  )
};

export default Menu;