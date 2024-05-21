import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const PressureWidget: React.FC<WidgetDimensionProps> = ({ width, height }) => {
  return (
    <Widget width={width} height={height}>
      <Widget.Header
        name="Pressure"
        Icon={MaterialCommunityIcons}
        iconProps={{ name: 'car-brake-low-pressure' }}
      />
      <Widget.Body
        extraStyle={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <AntDesign name="loading1" size={100} color="white" />
      </Widget.Body>
    </Widget>
  )
}

export default PressureWidget

const styles = StyleSheet.create({})
