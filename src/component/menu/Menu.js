import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {Data} from '../../resource/Data'
 
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

const Menu =()=>{
  return(
    <>
    <View style={styles.containerImage}>
      <View style={{
        borderColor: 'black',
        borderWidth: 2, borderRadius: 50, 
        fontWeight: 'bold'}}>
      <Image
        source={{
        uri: 'https://opencollective-production.s3.us-west-1.amazonaws.com/ac548f60-9349-11ea-963a-edacd12cbe10.jpg',
        }}
        style={styles.imageMenu}> 
      </Image>
      </View>
      <Text style={{fontWeight: 'bold'}}>{Data[0].descripcion}</Text>
    </View>
    </>
  )
};

export default Menu;