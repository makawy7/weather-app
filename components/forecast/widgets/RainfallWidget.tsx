import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'
import { FontAwesome6 } from '@expo/vector-icons'

const RainfallWidget: React.FC<WidgetDimensionProps> = ({ width, height }) => {
  return (
    <Widget width={width} height={height}>
      <Widget.Header
        name="Rainfall"
        Icon={FontAwesome6}
        iconProps={{ name: 'droplet' }}
      />

      <Widget.Body>
        <Text
          style={[
            styles.SFRegular,
            styles.textWhite,
            {
              fontSize: 34,
              lineHeight: 34,
              marginTop: 12,
            },
          ]}
        >
          1.8 mm in last hour
        </Text>
        <Text style={{ color: 'white', marginTop: 'auto', fontSize: 16 }}>
          1.2 mm expected in next 24h.
        </Text>
      </Widget.Body>
    </Widget>
  )
}

export default RainfallWidget

const styles = StyleSheet.create({
  SFRegular: {
    fontFamily: 'SF-Regular',
  },
  textWhite: {
    color: 'white',
  },
})
