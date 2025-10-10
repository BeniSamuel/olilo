import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { bg_colors } from '../../../theme/color.theme'
import { StatusBar } from 'expo-status-bar'
import dimensions from '../../../theme/dimension.theme'
import TopReview from '../../../components/review/TopReview'

const Review = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='dark'/>
      <TopReview />
    </View>
  )
}

export default Review

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bg_colors.main_bg,
    paddingVertical: dimensions.height * 0.035,
    paddingHorizontal: dimensions.width * 0.035
  }
})