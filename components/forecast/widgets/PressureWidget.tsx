import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'

const PressureWidget: React.FC<WidgetDimensionProps> = ({ width, height }) => {
  return (
    <Widget width={width} height={height}>
      <Text style={{ color: 'white' }}>PressureWidget</Text>
    </Widget>
  )
}

export default PressureWidget

const styles = StyleSheet.create({})
