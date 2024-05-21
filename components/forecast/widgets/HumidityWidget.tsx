import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const HumidityWidget: React.FC<WidgetDimensionProps> = ({ width, height }) => {
  return (
    <Widget width={width} height={height}>
      <Widget.Header
        name="Humidity"
        Icon={MaterialCommunityIcons}
        iconProps={{ name: 'weather-windy-variant' }}
      />
      <Text
        style={[
          styles.SFRegular,
          styles.textWhite,
          {
            fontSize: 50,
            lineHeight: 50,
            marginTop: 12,
          },
        ]}
      >
        90%
      </Text>
      <Text style={{ color: 'white', marginTop: 'auto', fontSize: 16 }}>
        The dew point is 17 right now.
      </Text>
    </Widget>
  )
}

export default HumidityWidget

const styles = StyleSheet.create({
  SFRegular: {
    fontFamily: 'SF-Regular',
  },
  textWhite: {
    color: 'white',
  },
})
