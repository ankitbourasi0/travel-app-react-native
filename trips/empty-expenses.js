import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { IMAGES } from '../assets/assets'

const EmptyExpenses = () => {
  return (
    <View style={styles.emptyExpenses}>
      <Image source={IMAGES.EMPTYEXPENSES} style={styles.banner}/>
      <Text style={styles.message}>You have't recorded any expenses for this trip/.</Text>

    </View>
  )
}

export default EmptyExpenses

const styles = StyleSheet.create({
    banner:{
        height:240,
        width:240
    },
    emptyExpenses:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },message:{
        fontSize:14,fontWeight:'600'
    }
})