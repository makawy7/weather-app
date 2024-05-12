import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ArcComponent from './elements/ArcComponent'
import useApplicationDimensions from '../../hooks/useApplicationDimensions'
import TabbarItems from './elements/TabbarItems'

const WeatherTabbar = () => {
  const { height, width } = useApplicationDimensions()
  const tabbarHeight = height * 0.1
  
  return (
    <View
      style={{
        height: tabbarHeight,
        ...StyleSheet.absoluteFillObject,
        top: height - tabbarHeight,
        justifyContent: 'flex-end',
      }}
    >
      <ArcComponent tabbarHeight={tabbarHeight} width={width} />
      <TabbarItems />
    </View>
  )
}

export default WeatherTabbar
const styles = StyleSheet.create({})
