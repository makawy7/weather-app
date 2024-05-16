import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'

const UvIndexWidget: React.FC<WidgetDimensionProps> = ({ width, height }) => {
  return (
    <Widget width={width} height={height}>
      <Text style={{ color: 'white' }}>UV Index</Text>
    </Widget>
  )
}

export default UvIndexWidget

const styles = StyleSheet.create({})
