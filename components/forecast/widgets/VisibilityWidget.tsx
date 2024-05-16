import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'

const VisibilityWidget: React.FC<WidgetDimensionProps> = ({
  width,
  height,
}) => {
  return (
    <Widget width={width} height={height}>
      <Text style={{ color: 'white' }}>VisibilityWidget</Text>
    </Widget>
  )
}

export default VisibilityWidget

const styles = StyleSheet.create({})
