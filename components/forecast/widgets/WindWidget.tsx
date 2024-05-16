import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'

const WindWidget: React.FC<WidgetDimensionProps> = ({ width, height }) => {
  return (
    <Widget width={width} height={height}>
      <Text style={{ color: 'white' }}>WindWidget</Text>
    </Widget>
  )
}

export default WindWidget

const styles = StyleSheet.create({})
