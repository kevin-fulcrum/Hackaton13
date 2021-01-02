import React from 'react'
import {View, Text, StyleSheet, Image, FlatList, Animated} from 'react-native'
import Menu from './src/component/menu/Menu'
import {Data} from './src/resource/Data'
import Card from './src/component/card/Card'

const styles=StyleSheet.create({
    textTitle:{
      fontSize: 30,
      marginRight: 160,
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
    },
    container2: {
      flex: 0.2,
      flexDirection: 'row',
    },
    container3: {
      flex: 0.65,
    },
});

const App =()=>{
  const scrollX = new Animated.Value(0);
  return(
    <>
    <View style={styles.containerInit}>
      <Text style={styles.textTitle}>Podcasts</Text>
      <Image
        source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTyZ6ZRQxNzn65KdrSyG0ckL3PE5SNY1zDw&usqp=CAU',
        }}
        style={styles.imagePerfil}> 
      </Image>
    </View>
    <View style={styles.container2}>
        <FlatList
          data={Data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return <Menu item={item.item} />;
          }}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false}
          )}
        />
    </View>
    <Text style={styles.textTitle}>Populer</Text>
    <View style={styles.container3}>
    <Card></Card>
    </View>
    </>
  )
};

export default App;
