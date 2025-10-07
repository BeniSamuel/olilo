import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import achievements from '../../data/achievements/achievements.data'
import AchievementCard from './AchievementCard'
import dimensions from '../../theme/dimension.theme'

const YourStatistics = () => {
  // Group achievements by pairs [odd, even]
  const groupedAchievements = []
  for (let i = 0; i < achievements.length; i += 2) {
    groupedAchievements.push(achievements.slice(i, i + 2))
  }

  return (
    <View style={styles.container}>
      <View style={styles.header_section}>
        <Text style={styles.header_title}>Your Statistics</Text>
        <Image source={require("../../../assets/account/stats.png")} style={styles.header_image}/>
      </View>

      {/* Loop through grouped achievements */}
      <View style={styles.achievements_container}>
        {groupedAchievements.map((pair, index) => (
          <View key={index} style={styles.row}>
            {pair.map((achievement) => (
              <View
                key={achievement.id}
                style={[
                  styles.card_wrapper,
                  achievement.id % 2 === 0 ? styles.rightCard : styles.leftCard,
                ]}
              >
                <AchievementCard
                  count={achievement.count}
                  category={achievement.category}
                  icon={achievement.icon}
                />
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  )
}

export default YourStatistics

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingVertical: dimensions.height * 0.015,
    paddingHorizontal: dimensions.width * 0.035,
    gap: 20,
  },
  header_section: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  header_image: {
    width: 15,
    height: 15,
  },
  header_title: {
    fontFamily: "montserrat-semibold",
  },
  achievements_container: {
    flexDirection: "column",
    gap: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card_wrapper: {
    width: "45%",
  },
  leftCard: {
    alignSelf: "flex-start",
  },
  rightCard: {
    alignSelf: "flex-end",
  },
})
