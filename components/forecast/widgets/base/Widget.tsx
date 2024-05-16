import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native'
import React from 'react'

export type WidgetDimensionProps = {
  width: number
  height: number
}

type WidgetProps = {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  width: number
  height: number
} & ViewProps

const Widget = ({ children, style, width, height }: WidgetProps) => {
  return (
    <View
      style={[
        {
          width: width,
          height: height,
          borderWidth: 0.25,
          borderRadius: 25,
          borderColor: 'white',
          padding: 15,
          backgroundColor: '#201C48',
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

Widget.Header = () => {}
Widget.Body = () => {}
Widget.Footer = () => {}

export default Widget

const styles = StyleSheet.create({})
