import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import dimensions from '../../../theme/dimension.theme'

const Premium = () => {
  return (
    <View style={styles.container}>
      <Text>Premium</Text>
    </View>
  )
}

export default Premium

const styles = StyleSheet.create({
  container: {
    paddingTop: dimensions.height * 0.055,
    paddingHorizontal: dimensions.width * 0.025
  }
})