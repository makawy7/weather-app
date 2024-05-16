import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'

const RainfallWidget: React.FC<WidgetDimensionProps> = ({ width, height }) => {
  return (
    <Widget width={width} height={height}>
      <Text style={{ color: 'white' }}>RainfallWidget</Text>
    </Widget>
  )
}

export default RainfallWidget

const styles = StyleSheet.create({})
