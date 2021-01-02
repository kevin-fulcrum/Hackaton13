import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
 
const styles=StyleSheet.create({
    constainerCard:{
        flex: 0.6,
        marginHorizontal: 30,
        marginVertical: 30,
        borderRadius: 20,
        backgroundColor: '#E9E6E6',
    },
    imagenes:{
        flexDirection: 'row'
    },
    imageCard: {
        width: 40,
        height: 40
    }
});

const Card =()=>{
  return(
    <>
    <View style={styles.constainerCard}>
        <TouchableOpacity style={styles.imagenes}>
        <View>
            <Image
            source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTyZ6ZRQxNzn65KdrSyG0ckL3PE5SNY1zDw&usqp=CAU',
            }}
            style={styles.imageCard}> 
            </Image>
        </View>
        <View>
            <Image
            source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTyZ6ZRQxNzn65KdrSyG0ckL3PE5SNY1zDw&usqp=CAU',
            }}
            style={styles.imageCard}> 
            </Image>
        </View>
        </TouchableOpacity>
        <Text>card</Text>
    </View>
    </>
  )
};

export default Card;