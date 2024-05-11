import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapIcon from '../icons/MapIcon'
import ListIcon from '../icons/ListIcon'
import TrapeziodBackground from './TrapeziodBackground'

const TabbarItems = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 32,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <MapIcon />
      <TrapeziodBackground />
      <ListIcon />
    </View>
  )
}

export default TabbarItems

const styles = StyleSheet.create({})
