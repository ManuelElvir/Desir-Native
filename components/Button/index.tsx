import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'


export const Button = ({ title, icon, color, backgroundColor, onPress, height=0, size=16 }: { title: string, icon: any, color: string, backgroundColor: string, onPress: () => void, height:number, size: number }) => {
    return (
      <TouchableHighlight style={{ width: 160 }} onPress={(e) => { onPress() }}>
        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', backgroundColor: backgroundColor, paddingVertical: 6, borderRadius: 5, minHeight:height }}>
          {icon}
          <Text style={{ color: color, fontWeight: '600', fontSize: size, marginStart: icon!==null?10:0 }}>{title}</Text>
        </View>
      </TouchableHighlight>
    )
}