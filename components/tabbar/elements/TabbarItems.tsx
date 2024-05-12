import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import MapIcon from '../icons/MapIcon'
import ListIcon from '../icons/ListIcon'
import TrapeziodBackground from './TrapeziodBackground'
import useApplicationDimensions from '../../../hooks/useApplicationDimensions'
import CircleButton from './CircleButton'

const TabbarItems = () => {
  const { width, height } = useApplicationDimensions()
  const trapeziodWidth = width * 0.68
  const trapeziodHeight = height * 0.12
  const circleRadius = (trapeziodHeight * 0.51) / 2
  const buttonCenterX = width / 2 - circleRadius
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        alignItems: 'center',
      }}
    >
      <MapIcon />
      <TrapeziodBackground width={trapeziodWidth} height={trapeziodHeight} />
      <Pressable
        style={{
          ...StyleSheet.absoluteFillObject,
          left: buttonCenterX,
          width: circleRadius * 2,
          height: circleRadius * 2,
          top: 5,
        }}
      >
        {({ pressed }) => (
          <CircleButton radius={circleRadius} pressed={pressed} />
        )}
      </Pressable>
      <ListIcon />
    </View>
  )
}

export default TabbarItems

const styles = StyleSheet.create({})
