import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native'
import React, { ElementType } from 'react'

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

type IconProps = {
  name: string
  color?: string
  size?: number
}

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

type WidgetHeaderProps = {
  Icon: ElementType<any>
  name: string
  iconProps: IconProps
}

Widget.Header = ({ Icon, name, iconProps }: WidgetHeaderProps) => {
  return (
    <View style={styles.flexRowBase}>
      <Icon
        color={iconProps.color || 'rgba(235,235,245,0.6)'}
        name={iconProps.name}
        size={iconProps.size || 20}
      />
      <Text style={styles.title}>{name}</Text>
    </View>
  )
}

type WidgetBodyProps = {
  children: React.ReactNode
  extraStyle?: StyleProp<ViewStyle>
}

Widget.Body = ({ children, extraStyle }: WidgetBodyProps) => {
  return (
    <View style={[{ flex: 1, justifyContent: 'center' }, extraStyle]}>
      {children}
    </View>
  )
}

type WidgetFooterProps = {
  text: string
  Icon: ElementType<any>
  iconProps: IconProps
  extraStyle?: StyleProp<ViewStyle>
}

Widget.Footer = ({ text, Icon, iconProps, extraStyle }: WidgetFooterProps) => {
  return (
    <View
      style={[
        styles.flexRowBase,
        styles.justifyBetween,
        styles.autoMarginTop,
        extraStyle,
      ]}
    >
      <Text style={styles.footerText}>{text}</Text>
      <Icon
        color={iconProps.color || 'rgba(235,235,245,0.6)'}
        name={iconProps.name}
        size={iconProps.size || 20}
      />
    </View>
  )
}

export default Widget

const styles = StyleSheet.create({
  flexRowBase: {
    flexGrow: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  autoMarginTop: {
    marginTop: 'auto',
  },
  title: {
    fontFamily: 'SF-Semibold',
    fontSize: 16,
    lineHeight: 16,
    color: 'rgba(235, 235, 245, 0.6)',
    paddingLeft: 6,
  },
  footerText: {
    fontFamily: 'SF-Regular',
    fontSize: 18,
    lineHeight: 18,
    color: 'white',
  },
  largeText: {
    fontFamily: 'SF-Semibold',
    color: 'white',
    fontSize: 34,
    lineHeight: 34,
  },
})
