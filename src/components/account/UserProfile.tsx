import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import dimensions from '../../theme/dimension.theme'
import { text } from '../../theme/color.theme'

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inform_container}>
        <Image source={require("../../../assets/account/user.png")}/>
        <TouchableOpacity style={styles.button_container}>
          <Image source={require("../../../assets/account/edit_icon.png")}/>
        </TouchableOpacity>
      </View>
      <View style={styles.text_container}>
        <Text style={styles.name_text}>Beni Samuel</Text>
        <Text style={styles.joined_text}>Joined since 13 September 2025</Text>
      </View>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    paddingVertical: dimensions.height * 0.035,
    gap: 20
  },
  inform_container: {
    position: "relative"
  },
  button_container: {
    position: "absolute",
    bottom: 0,
    right: 0
  },
  text_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6
  },
  name_text: {
    fontFamily: "montserrat-semibold",
    color: text.headers
  },
  joined_text: {
    fontFamily: "montserrat-medium",
    color: text.color
  }
})