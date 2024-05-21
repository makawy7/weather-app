import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'
import { Feather } from '@expo/vector-icons'
import {
  Canvas,
  Circle,
  Line,
  LinearGradient,
  Path,
  Skia,
  vec,
} from '@shopify/react-native-skia'

const SunriseWidget: React.FC<WidgetDimensionProps> = ({ width, height }) => {
  const sineWave = () => {
    function mapXfromZeroToPI(value: number, width: number) {
      const inputStart = 20
      const inputEnd = width

      const outputStart = 0
      const outputEnd = Math.PI

      if (width <= inputStart) throw new Error('error')
      const scale = (outputEnd - outputStart) / (inputEnd - inputStart)

      return outputStart + (value - inputStart) * scale
    }
    const path = Skia.Path.Make()
    path.moveTo(20, 45)
    const coordinates = new Array()
    for (let x = 20; x <= width - 50; x++) {
      let y = Math.sin(mapXfromZeroToPI(x, width - 50)) * 40
      y = 45 - y
      path.lineTo(x, y)
      coordinates.push({ x, y })
    }
    return { path, coordinates }
  }

  const { path, coordinates } = sineWave()
  return (
    <Widget width={width} height={height}>
      <Widget.Header
        name="Sunrise"
        Icon={Feather}
        iconProps={{ name: 'sunrise' }}
      />
      <Widget.Body extraStyle={{ marginTop: 5 }}>
        <Text style={[styles.SFRegular, styles.textWhite, { fontSize: 40 }]}>
          5:28 AM
        </Text>
        <Canvas style={{ height: '100%' }}>
          {/* <Path
            path={`M 10 45 C 40 0, ${width - 70} 0, ${width - 40} 45`}
            style="stroke"
            strokeWidth={5}
          > */}
          <Path path={path} style="stroke" strokeWidth={5}>
            <LinearGradient
              start={vec(0, 0)}
              end={vec(width, 0)}
              colors={['#9badde', '#879ae0']}
            />
          </Path>
          <Circle
            cx={coordinates[10].x}
            cy={coordinates[10].y}
            r={6}
            color="white"
          ></Circle>
          {/* </Path> */}
          <Line
            p1={vec(0, 45)}
            p2={vec(width, 45)}
            color="white"
            strokeWidth={1}
            style="stroke"
          />
        </Canvas>
        <Text style={{ color: 'white', marginTop: 'auto', fontSize: 16 }}>
          Sunset: 7:25
        </Text>
      </Widget.Body>
    </Widget>
  )
}

export default SunriseWidget

const styles = StyleSheet.create({
  SFRegular: {
    fontFamily: 'SF-Regular',
  },

  SFThin: {
    fontFamily: 'SF-Thin',
  },
  textWhite: {
    color: 'white',
  },
})
