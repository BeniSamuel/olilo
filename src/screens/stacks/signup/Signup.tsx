import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import TopBar from '../../../components/signup/TopBar'
import { bg_colors } from '../../../theme/color.theme'
import signup_data from '../../../data/signup/signup.data'
import Form from '../../../components/signup/Form'
import useSignupStoreType from '../../../store/signup_store/signup.store'
import { useNavigation } from '@react-navigation/native'

interface itemType {
  id: number;
  question: string;
}

const Signup = () => {
  const flatListRef = useRef<FlatList>(null);
  const { section, setSection, logout } = useSignupStoreType();
  const navigation = useNavigation();

  const handleNext = () => {
    if (section < signup_data.length - 1 && section !== 4) {
      flatListRef.current?.scrollToIndex({ index: section + 1, animated: true })
      setSection(section + 1)
    } else {
      navigation.navigate("AfterSignup")
      logout();
    }
  }

  const handleBack = () => {
    if (section > 0) {
      flatListRef.current?.scrollToIndex({ index: section - 1, animated: true });
      setSection(section -1)
    } else {
      navigation.goBack()
    }
  }

  const renderItem: ListRenderItem<itemType> = ({item}) => {
    return (
      <Form question={item.question} handleNext={handleNext}/>
    )
  }

  return (
    <View style={styles.container}>
      <TopBar handleBack={handleBack}/>
      <View style={styles.content_container}>
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
  },
  content_container: {
    flex: 1
  }
})