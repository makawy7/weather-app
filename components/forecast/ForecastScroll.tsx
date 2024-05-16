import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Forecast } from '../../models/Weather'
import ForecastCapsule from './ForecastCapsule'
import { ScrollView } from 'react-native-gesture-handler'

type ForecastScrollProps = {
  forecasts: Forecast[]
  capsuleWidth: number
  capsuleHeight: number
  capsuleRadius: number
}

const ForecastScroll: React.FC<ForecastScrollProps> = ({
  forecasts,
  capsuleWidth,
  capsuleHeight,
  capsuleRadius,
}) => {
  return (
    <>
      <ScrollView
        horizontal
        style={{
          paddingTop: 20,
          paddingLeft: 20,
          paddingBottom: 10,
          flexGrow: 0,
        }}
        contentContainerStyle={{
          flex: 1,
          flexDirection: 'row',
          gap: 12,
        }}
      >
        {forecasts.map((forecast, index) => (
          <ForecastCapsule
            key={index}
            forecast={forecast}
            width={capsuleWidth}
            height={capsuleHeight}
            radius={capsuleRadius}
          />
        ))}
      </ScrollView>
    </>
  )
}

export default ForecastScroll

const styles = StyleSheet.create({})
