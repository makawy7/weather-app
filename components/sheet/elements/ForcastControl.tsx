import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { Canvas, Line, LinearGradient, vec } from '@shopify/react-native-skia'
import { ForecastType } from '../../../models/Weather'

type ForcastControlProps = {
  onPress: (forecastType: ForecastType) => void
  selectedForecast: ForecastType
  width: number
}

const ForcastControl: React.FC<ForcastControlProps> = ({
  onPress,
  width,
  selectedForecast,
}) => {
  const [textWidth, setTextWidth] = useState(0)
  const onTextLayout = (event: LayoutChangeEvent) => {
    setTextWidth(event.nativeEvent.layout.width)
  }
  const textHeight = 22
  const spacingX = 32
  const underlineSpacingLeft =
    selectedForecast === ForecastType.Hourly
      ? spacingX
      : width - (spacingX + textWidth)
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
        <TouchableOpacity onPress={() => onPress(ForecastType.Hourly)}>
          <Text onLayout={onTextLayout} style={styles.forcastText}>
            Hourly Forcast
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPress(ForecastType.Weekly)}>
          <Text style={styles.forcastText}>Weekly Forcast</Text>
        </TouchableOpacity>
      </View>
      <Canvas
        style={{
          width: textWidth,
          height: strokeWidth,
          ...StyleSheet.absoluteFillObject,
          left: underlineSpacingLeft,
          top: textHeight,
        }}
      >
        <Line p1={vec(0, 0)} p2={vec(textWidth, 0)} strokeWidth={strokeWidth}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(textWidth, 0)}
            colors={['rgba(147,112,177,0)', '#b07edb', 'rgba(147,112,177,0)']}
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
