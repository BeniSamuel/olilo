import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabLayout from '../../../layout/TabLayout'
import Option from '../../../components/creation/Option'
import useOptionStore from '../../../store/creation_store/option.store'
import Review from '../../../components/creation/Review'
import ChallengeCreation from '../../../components/creation/ChallengeCreation'

const Creation = () => {
  const { focused } = useOptionStore()
  return (
    <TabLayout tab_name='Creation'>
      <Option />
      <View>
        { focused === "review" ? <Review /> : <ChallengeCreation />}
      </View>
    </TabLayout>
  )
}

export default Creation

const styles = StyleSheet.create({})