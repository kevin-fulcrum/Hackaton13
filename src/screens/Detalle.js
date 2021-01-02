import React from 'react'
import {View, Text, StyleSheet, Image, FlatList, Animated} from 'react-native'

const styles=StyleSheet.create({
    container1:{
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    container2:{
        flex: 0.6,
    },
    imagePrincipal:{
        width:150,
        height: 150,
        borderRadius: 40,
    },
    imageSecundario:{
        width:50,
        height: 50,
        borderRadius: 10,
        marginLeft: 30
    },
    textDetalle:{
        fontWeight: 'bold',
        fontSize: 50,
        marginLeft: 20
    },
    textDetalleDetalle: {
        fontSize: 20,
        marginLeft: 20
    },
});

const Detalle =({route})=>{
  return(
    <>
    <View style={styles.container1}>
      <Image
        source={{
        uri: route.params.url,
        }}
        style={styles.imagePrincipal}> 
      </Image>
      <Image
        source={{
        uri: 'https://cdn.icon-icons.com/icons2/566/PNG/128/heart_icon-icons.com_54351.png',
        }}
        style={styles.imageSecundario}> 
      </Image>
    </View>
    <View style={styles.container2}>
        <Text style={styles.textDetalle}>{route.params.title}</Text>
        <Text style={styles.textDetalleDetalle}>{route.params.descripcion}</Text>
    </View>
    </>
  )
};

export default Detalle;
