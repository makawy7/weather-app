import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Weather } from '../../models/Weather'
import { DEGRE_SYMBOL } from '../../utils/Constants'
import useApplicationDimensions from '../../hooks/useApplicationDimensions'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type WeatherInfoProps = {
  weather: Weather
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weather }) => {
  const { city, temperature, condition, high, low } = weather
  const { height, width } = useApplicationDimensions()
  const infoHeight = height * 0.2168246445
  const { top } = useSafeAreaInsets()
  const InfoTopMargin = top + 51
  return (
    <View
      style={{
        height: infoHeight,
        justifyContent: 'space-between',
        marginTop: InfoTopMargin,
        alignItems: 'center',
      }}
    >
      <Text style={styles.cityText}>{city}</Text>
      <Text style={styles.temperatureText}>
        {temperature}{DEGRE_SYMBOL}
      </Text>
      <Text style={styles.conditionText}>{condition}</Text>
      <Text style={styles.minMaxText}>
        H:{high}
        {DEGRE_SYMBOL}   L:{low}
        {DEGRE_SYMBOL}
      </Text>
    </View>
  )
}

export default WeatherInfo

const styles = StyleSheet.create({
  cityText: {
    fontFamily: 'SF-Regular',
    fontSize: 34,
    lineHeight: 41,
    color: 'white',
  },
  temperatureText: {
    fontFamily: 'SF-Thin',
    fontSize: 96,
    lineHeight: 105,
    color: 'white',
  },
  conditionText: {
    fontFamily: 'SF-Semibold',
    color: 'rgba(235,235,245,0.6)',
    fontSize: 20,
    lineHeight: 24,
  },
  minMaxText: {
    fontFamily: 'SF-Semibold',
    color: 'white',
    fontSize: 20,
    lineHeight: 24,
  },
})
