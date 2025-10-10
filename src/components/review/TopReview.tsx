import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import reviews from '../../data/review/review.data'
import { bg_colors } from '../../theme/color.theme'
import useSignupStoreType from '../../store/signup_store/signup.store'

const TopReview = () => {
  return (
    <View>
      <View>
        <Image source={require("../../../assets/common/back-icon.png")}/>
      </View>

      <View>
        {
            reviews.map((review, idx) => (
                 <View
                            key={idx}
                            style={{
                              backgroundColor:
                                review.id >= idx
                                  ? bg_colors.button_bg_active
                                  : bg_colors.button_bg_inactive,
                              width: 55,
                              height: 4,
                              borderRadius: 12,
                            }}
                          />
            ))
        }
      </View>

      <View>

      </View>
    </View>
  )
}

export default TopReview

const styles = StyleSheet.create({})