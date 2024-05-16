import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'

const SunriseWidget: React.FC<WidgetDimensionProps> = ({ width, height }) => {
  return (
    <Widget width={width} height={height}>
      <Text style={{ color: 'white' }}>SunriseWidget</Text>
    </Widget>
  )
}

export default SunriseWidget

const styles = StyleSheet.create({})
