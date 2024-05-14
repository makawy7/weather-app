import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import ForcastSheetBackground from './ForcastSheetBackground'
import useApplicationDimensions from '../../hooks/useApplicationDimensions'

const ForcastSheet = () => {
  const { width, height } = useApplicationDimensions()
  const snapPoints = ['38.5%', '86%']
  const firstSnapPoint = height * (parseFloat(snapPoints[0]) / 100)
  const cornerRadius = 44
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
    ></BottomSheet>
  )
}

export default ForcastSheet

const styles = StyleSheet.create({})
