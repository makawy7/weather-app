import { StyleSheet } from 'react-native'
import React from 'react'
import Widget, { WidgetDimensionProps } from './base/Widget'
import { AntDesign, Entypo } from '@expo/vector-icons'
import {
  Canvas,
  Circle,
  Line,
  LinearGradient,
  vec,
} from '@shopify/react-native-skia'

const AirQualityWidget: React.FC<WidgetDimensionProps> = ({
  width,
  height,
}) => {
  return (
    <Widget width={width} height={height}>
      <Widget.Header
        name="AIR QUALITY"
        Icon={Entypo}
        iconProps={{ name: 'air' }}
      />
      <Widget.Body text="3-Low Health Risk">
        <Canvas
          style={{
            height: 15,
            marginTop: 8,
          }}
        >
          <Line
            p1={vec(0, 5)}
            p2={vec(width, 5)}
            strokeWidth={5}
            style="stroke"
          >
            <LinearGradient
              start={vec(0, 0)}
              end={vec(width, 0)}
              colors={['#3859B2', '#E64497']}
            />
          </Line>
          <Circle
            cx={0}
            cy={5}
            r={5}
            color="white"
            transform={[{ translateX: 20 }]}
          />
        </Canvas>
      </Widget.Body>
      <Widget.Footer
        text="See more"
        Icon={AntDesign}
        iconProps={{ name: 'right' }}
        extraStyle={{
          borderTopWidth: 0.5,
          borderTopColor: 'rgba(173, 139, 139, 0.2)',
          paddingTop: 10,
        }}
      />
    </Widget>
  )
}

export default AirQualityWidget

const styles = StyleSheet.create({})
