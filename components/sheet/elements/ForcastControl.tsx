import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { Canvas, Line, LinearGradient, vec } from '@shopify/react-native-skia'

const ForcastControl = () => {
  const [textWidth, setTextWidth] = useState(0)
  const onTextLayout = (event: LayoutChangeEvent) => {
    setTextWidth(event.nativeEvent.layout.width)
  }
  const textHeight = 22
  const spacingX = 32
  const strokeWidth = 5
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: spacingX,
          height: textHeight,
        }}
      >
        <TouchableOpacity>
          <Text onLayout={onTextLayout} style={styles.forcastText}>
            Hourly Forcast
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forcastText}>Weekly Forcast</Text>
        </TouchableOpacity>
      </View>
      <Canvas
        style={{
          width: textWidth,
          height: strokeWidth,
          marginLeft: spacingX,
          ...StyleSheet.absoluteFillObject,
          top: textHeight,
        }}
      >
        <Line p1={vec(0, 0)} p2={vec(textWidth, 0)} strokeWidth={strokeWidth}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(textWidth, 0)}
            colors={[
              'rgba(147,112,177,0)',
              '#b07edb',
              'rgba(147,112,177,0)',
            ]}
          />
        </Line>
      </Canvas>
    </>
  )
}

export default ForcastControl

const styles = StyleSheet.create({
  forcastText: {
    fontFamily: 'SF-Semibold',
    fontSize: 15,
    lineHeight: 20,
    color: 'rgba(235,235,245,0.6)',
  },
})
