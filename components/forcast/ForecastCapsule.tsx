import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Forecast } from '../../models/Weather'
import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia'
import { DEGRE_SYMBOL } from '../../utils/Constants'
import { convertDateTo12HrFormat } from '../../utils/DateHelper'

type ForcastCapsuleProps = {
  forecast: Forecast
  width: number
  height: number
  radius: number
}

const ForecastCapsule: React.FC<ForcastCapsuleProps> = ({
  forecast,
  width,
  height,
  radius,
}) => {
  const { date, icon, probability, temperature } = forecast
  const timeToDisplay = convertDateTo12HrFormat(date)
  const capsuleOpacity = timeToDisplay.toLowerCase() === 'now' ? 1 : 0.2
  const probabilityOpacity = probability ? 1 : 0
  return (
    <View style={{ width: width, height: height }}>
      <Canvas style={{ ...StyleSheet.absoluteFillObject }}>
        <RoundedRect
          x={0}
          y={0}
          r={radius}
          height={height}
          width={width}
          color={`rgba(72,49,157,${capsuleOpacity})`}
        >
          <Shadow dx={1} dy={1} blur={0} color="rgba(255,255,255,0.25)" inner />
        </RoundedRect>
      </Canvas>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 19,
        }}
      >
        <Text style={styles.time}>{timeToDisplay}</Text>
        <View>
          <Image
            source={icon}
            style={{ width: width / 2, height: width / 2 }}
          />
          <Text style={[styles.probability, { opacity: probabilityOpacity }]}>
            {probability}%
          </Text>
        </View>
        <Text style={styles.temperature}>
          {temperature}
          {DEGRE_SYMBOL}
        </Text>
      </View>
    </View>
  )
}

export default ForecastCapsule

const styles = StyleSheet.create({
  time: {
    fontFamily: 'SF-Semibold',
    fontSize: 15,
    lineHeight: 20,
    color: 'white',
  },
  probability: {
    fontFamily: 'SF-Semibold',
    fontSize: 13,
    lineHeight: 18,
    color: '#40CBD8',
    textAlign: 'center',
  },
  temperature: {
    fontFamily: 'SF-Regular',
    lineHeight: 24,
    fontSize: 20,
    color: 'white',
    letterSpacing: 0.38,
  },
})