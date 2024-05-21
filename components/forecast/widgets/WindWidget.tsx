import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'
import { Feather, Fontisto } from '@expo/vector-icons'

const WindWidget: React.FC<WidgetDimensionProps> = ({ width, height }) => {
  return (
    <Widget width={width} height={height}>
      <Widget.Header name="Wind" Icon={Feather} iconProps={{ name: 'wind' }} />
      <Widget.Body
        extraStyle={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Fontisto name="compass-alt" size={110} color="white" />
      </Widget.Body>
    </Widget>
  )
}

export default WindWidget

const styles = StyleSheet.create({})
