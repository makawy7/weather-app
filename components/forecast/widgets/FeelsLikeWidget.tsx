import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'

const FeelsLikeWidget: React.FC<WidgetDimensionProps> = ({ width, height }) => {
  return (
    <Widget width={width} height={height}>
      <Text style={{ color: 'white' }}>FeelsLikeWidget</Text>
    </Widget>
  )
}

export default FeelsLikeWidget

const styles = StyleSheet.create({})
