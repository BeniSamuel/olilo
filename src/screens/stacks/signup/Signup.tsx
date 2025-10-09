import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import TopBar from '../../../components/signup/TopBar'
import { bg_colors } from '../../../theme/color.theme'
import signup_data from '../../../data/signup/signup.data'
import Form from '../../../components/signup/Form'

interface itemType {
  id: number;
  question: string;
}

const Signup = () => {
  const flatListRef = useRef<FlatList>(null);

  const renderItem: ListRenderItem<itemType> = ({item}) => {
    return (
      <Form question={item.question} />
    )
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <View>
        <FlatList 
          ref={flatListRef}
          data={signup_data}
          keyExtractor={(_: {id: number, question: string},index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bg_colors.main_bg
  }
})