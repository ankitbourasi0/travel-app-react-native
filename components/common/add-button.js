import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const AddButton = props => {
    const {buttonText,onPress} =props
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.addButton}>
            <Text style={styles.buttonText}>
            {buttonText? buttonText : "ADD"}
            </Text>
        </View>
    </TouchableOpacity>
  )
}

export default AddButton
const styles = StyleSheet.create({
    addButton:{
        backgroundColor:'#FF8083',
        paddingVertical:12,
        borderRadius:18,
        display:'flex',
        alignItems:'center'
    },
    buttonText:{
        color:'white',
        fontSize:18,
        fontWeight:'700',

    }
})