import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'
import { Ionicons } from '@expo/vector-icons'
import {
  Canvas,
  Circle,
  Line,
  LinearGradient,
  vec,
} from '@shopify/react-native-skia'

const UvIndexWidget: React.FC<WidgetDimensionProps> = ({ width, height }) => {
  return (
    <Widget width={width} height={height}>
      <Widget.Header
        name="UV Index"
        Icon={Ionicons}
        iconProps={{ name: 'sunny' }}
      />
      <Widget.Body>
        <Text
          style={[
            styles.SFRegular,
            styles.textWhite,
            { fontSize: 40, lineHeight: 40 },
          ]}
        >
          4
        </Text>
        <Text
          style={[
            styles.SFRegular,
            styles.textWhite,
            { fontSize: 30, lineHeight: 30 },
          ]}
        >
          Moderate
        </Text>
        <Canvas style={{ height: 10, marginTop: 13 }}>
          <Line p1={vec(0, 5)} p2={vec(width, 5)} strokeWidth={5}>
            <LinearGradient
              start={vec(0, 5)}
              end={vec(width, 5)}
              colors={['#3859B2', '#E64497']}
            />
          </Line>
          <Circle cx={5} cy={5} r={5} color="white" />
        </Canvas>
      </Widget.Body>
    </Widget>
  )
}

export default UvIndexWidget

const styles = StyleSheet.create({
  SFRegular: {
    fontFamily: 'SF-Regular',
  },
  SFSemiBild: {
    fontFamily: 'SF-Semibold',
  },
  SFThin: {
    fontFamily: 'SF-Thin',
  },
  textWhite: {
    color: 'white',
  },
})
