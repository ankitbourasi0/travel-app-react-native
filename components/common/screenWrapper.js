import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../themes/theme'

const ScreenWrapper = ({children}) => {
  return (
    <View style={styles.screenWrapper}>
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    screenWrapper:{
        paddingTop: Platform.OS === 'ios' ? 60 :0, 
        paddingHorizontal: 16,
        paddingBottom: 20,
        backgroundColor: COLORS.BACKGROUND,
        minHeight:'100%'
    },
})