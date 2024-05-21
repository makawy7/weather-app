import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'
import { FontAwesome6 } from '@expo/vector-icons'
import { DEGRE_SYMBOL } from '../../../utils/Constants'

const FeelsLikeWidget: React.FC<WidgetDimensionProps> = ({ width, height }) => {
  return (
    <Widget width={width} height={height}>
      <Widget.Header
        name="Feels like"
        Icon={FontAwesome6}
        iconProps={{ name: 'temperature-half' }}
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
        19{DEGRE_SYMBOL}
      </Text>
      <Text style={{ color: 'white', marginTop: 'auto', fontSize: 16 }}>
        Similar to the actual temperature.
      </Text>
    </Widget>
  )
}

export default FeelsLikeWidget

const styles = StyleSheet.create({
  SFRegular: {
    fontFamily: 'SF-Regular',
  },
  textWhite: {
    color: 'white',
  },
})
