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
    imageCardx: {
        width: 80,
        height: 80,
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 20
    },
    imageCardS:{
        width: 40,
        height: 40,
        marginLeft: 180,
        marginTop: 40,
        borderRadius: 20
    },
    titleCard: {
        marginLeft: 20,
        marginTop: 30,
        fontWeight: 'bold'
    },
    titleCardDetall:{
        marginLeft: 20,
        marginTop: 10,
    },
});

const Card =({navigation, item})=>{
  return(
    <>
    <TouchableOpacity onPress={()=>{navigation.navigate('Detalle')}} style={styles.constainerCard}>
        <View style={styles.imagenes}>
        <View>
            <Image
            source={{
            uri: item.url,
            }}
            style={styles.imageCardx}> 
            </Image>
        </View>
        <View>
            <Image
            source={{
            uri: 'https://cdn.icon-icons.com/icons2/1132/PNG/512/1486348532-music-play-pause-control-go-arrow_80458.png',
            }}
            style={styles.imageCardS}> 
            </Image>
        </View>
        </View>
        <Text style={styles.titleCard}>{item.title}</Text>
        <Text style={styles.titleCardDetall}>{item.descripcion}</Text>
    </TouchableOpacity>
    </>
  )
};

export default Card;