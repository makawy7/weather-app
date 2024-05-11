import { Canvas, LinearGradient, Path, vec } from '@shopify/react-native-skia'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type ArcProps = {
  tabbarHeight: number
  width: number
}

const ArcComponent: React.FC<ArcProps> = ({ tabbarHeight, width }) => {
  const arcPath = `M 0 6 Q ${width / 2} ${
    tabbarHeight / 1.8
  } ${width} 6 V ${tabbarHeight} H 0 Z`
  const arcBorder = `M 0 6 Q ${width / 2} ${tabbarHeight / 1.8} ${width} 6`
  return (
    <Canvas style={{ height: tabbarHeight, ...StyleSheet.absoluteFillObject }}>
      <Path path={arcPath}>
        <LinearGradient
          start={vec(width / 2, 0)}
          end={vec(width / 2, tabbarHeight)}
          colors={['rgba(58,58,106,0.26)', 'rgba(37,36,76,0.26)']}
        />
      </Path>
      <Path
        path={arcBorder}
        style="stroke"
        strokeWidth={0.5}
        color={'rgba(117,130,244,0.5)'}
      />
    </Canvas>
  )
}
const styles = StyleSheet.create({})

export default ArcComponent
