import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabLayout from '../../../layout/TabLayout'
import UserProfile from '../../../components/account/UserProfile'
import FollowingStats from '../../../components/account/FollowingStats'

const Account = () => {
  return (
    <TabLayout tab_name='Account'>
      <View>
        <UserProfile />
        <FollowingStats />
      </View>
    </TabLayout>
  )
}

export default Account

const styles = StyleSheet.create({})