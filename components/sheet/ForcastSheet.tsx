import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import ForcastSheetBackground from './ForcastSheetBackground'
import useApplicationDimensions from '../../hooks/useApplicationDimensions'
import ForcastControl from './elements/ForcastControl'
import Seperator from './elements/Seperator'
import { hourly, weekly } from '../../data/ForecastData'
import ForecastScroll from '../forcast/ForecastScroll'
import { ForecastType } from '../../models/Weather'

const ForcastSheet = () => {
  const { width, height } = useApplicationDimensions()
  const snapPoints = ['38.5%', '86%']
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100)
  const cornerRadius = 44
  const capsuleRadius = 30
  const capsuleHeight = height * 0.17
  const capsuleWidth = width * 0.15
  const [selectedForecast, setSelectedForcast] = useState<ForecastType>(
    ForecastType.Hourly
  )
  return (
    <BottomSheet
      snapPoints={snapPoints}
      handleIndicatorStyle={{
        width: 45,
        height: 5,
        backgroundColor: 'rgba(0,0,0,0,.3)',
      }}
      backgroundComponent={() => (
        <ForcastSheetBackground
          width={width}
          height={firstSnapPoint}
          cornerRadius={cornerRadius}
        />
      )}
    >
      <ForcastControl
        selectedForecast={selectedForecast}
        width={width}
        onPress={(forecasttype: ForecastType) => {
          setSelectedForcast(forecasttype)
        }}
      />
      <Seperator width={width} height={3} />
      <ForecastScroll
        forecasts={selectedForecast === ForecastType.Hourly ? hourly : weekly}
        capsuleWidth={capsuleWidth}
        capsuleHeight={capsuleHeight}
        capsuleRadius={capsuleRadius}
      />
    </BottomSheet>
  )
}

export default ForcastSheet

const styles = StyleSheet.create({})
