import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'

const AirQualityWidget: React.FC<WidgetDimensionProps> = ({
  width,
  height,
}) => {
  return (
    <Widget width={width} height={height}>
      <Text style={{ color: 'white' }}>Air Quality</Text>
    </Widget>
  )
}

export default AirQualityWidget

const styles = StyleSheet.create({})
