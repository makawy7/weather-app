import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'
import { MaterialIcons } from '@expo/vector-icons'

const VisibilityWidget: React.FC<WidgetDimensionProps> = ({
  width,
  height,
}) => {
  return (
    <Widget width={width} height={height}>
      <Widget.Header
        name="visibility"
        Icon={MaterialIcons}
        iconProps={{ name: 'visibility' }}
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
        8 km
      </Text>
      <Text style={{ color: 'white', marginTop: 'auto', fontSize: 16 }}>
        Similar to the actual temperature.
      </Text>
    </Widget>
  )
}

export default VisibilityWidget

const styles = StyleSheet.create({
  SFRegular: {
    fontFamily: 'SF-Regular',
  },
  textWhite: {
    color: 'white',
  },
})
