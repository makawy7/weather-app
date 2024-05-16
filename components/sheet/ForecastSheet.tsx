import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import ForecastSheetBackground from './ForecastSheetBackground'
import useApplicationDimensions from '../../hooks/useApplicationDimensions'
import ForecastControl from './elements/ForecastControl'
import Seperator from './elements/Seperator'
import { hourly, weekly } from '../../data/ForecastData'
import ForecastScroll from '../forecast/ForecastScroll'
import { ForecastType } from '../../models/Weather'
import UvIndexWidget from '../forecast/widgets/UvIndexWidget'
import AirQualityWidget from '../forecast/widgets/AirQualityWidget'
import { ScrollView } from 'react-native-gesture-handler'
import SunriseWidget from '../forecast/widgets/SunriseWidget'
import WindWidget from '../forecast/widgets/WindWidget'
import RainfallWidget from '../forecast/widgets/RainfallWidget'
import FeelsLikeWidget from '../forecast/widgets/FeelsLikeWidget'
import HumidityWidget from '../forecast/widgets/HumidityWidget'
import VisibilityWidget from '../forecast/widgets/VisibilityWidget'
import PressureWidget from '../forecast/widgets/PressureWidget'

const ForecastSheet = () => {
  const { width, height } = useApplicationDimensions()
  const snapPoints = ['38.5%', '86%']
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100)
  const cornerRadius = 44
  const capsuleRadius = 30
  const capsuleHeight = height * 0.17
  const capsuleWidth = width * 0.15
  const [selectedForecast, setSelectedForecast] = useState<ForecastType>(
    ForecastType.Hourly
  )
  const standardWidgetSize = width * 0.44
  const widgetSpacingX = width * 0.04
  const widgetSpacingY = width * 0.026

  return (
    <BottomSheet
      snapPoints={snapPoints}
      handleIndicatorStyle={{
        width: 45,
        height: 5,
        backgroundColor: 'rgba(0,0,0,0,.3)',
      }}
      backgroundComponent={() => (
        <ForecastSheetBackground
          width={width}
          height={firstSnapPoint}
          cornerRadius={cornerRadius}
        />
      )}
    >
      <ForecastControl
        selectedForecast={selectedForecast}
        width={width}
        onPress={(forecasttype: ForecastType) => {
          setSelectedForecast(forecasttype)
        }}
      />
      <Seperator width={width} height={3} />
      <ScrollView>
        <ForecastScroll
          forecasts={selectedForecast === ForecastType.Hourly ? hourly : weekly}
          capsuleWidth={capsuleWidth}
          capsuleHeight={capsuleHeight}
          capsuleRadius={capsuleRadius}
        />
        <View
          style={{
            flex: 1,
            paddingTop: 30,
            paddingBottom: 50,
            alignItems: 'center',
          }}
        >
          <AirQualityWidget
            width={standardWidgetSize * 2 + widgetSpacingX}
            height={150}
          />
          <View
            style={{
              paddingHorizontal: widgetSpacingX,
              paddingVertical: widgetSpacingY,
              rowGap: widgetSpacingY,
              columnGap: widgetSpacingX,
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <UvIndexWidget
              width={standardWidgetSize}
              height={standardWidgetSize}
            />
            <SunriseWidget
              width={standardWidgetSize}
              height={standardWidgetSize}
            />
            <WindWidget
              width={standardWidgetSize}
              height={standardWidgetSize}
            />
            <RainfallWidget
              width={standardWidgetSize}
              height={standardWidgetSize}
            />
            <FeelsLikeWidget
              width={standardWidgetSize}
              height={standardWidgetSize}
            />
            <HumidityWidget
              width={standardWidgetSize}
              height={standardWidgetSize}
            />
            <VisibilityWidget
              width={standardWidgetSize}
              height={standardWidgetSize}
            />
            <PressureWidget
              width={standardWidgetSize}
              height={standardWidgetSize}
            />
          </View>
        </View>
      </ScrollView>
    </BottomSheet>
  )
}

export default ForecastSheet

const styles = StyleSheet.create({})
