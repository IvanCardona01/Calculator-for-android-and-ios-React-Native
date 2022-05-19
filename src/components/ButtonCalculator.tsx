import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

interface Props{
    text: string;
    color?: string;
    width?: boolean
    action: (numberText: string ) => void
}

export const ButtonCalculator = ({ text, color = "#2D2D2D", width = false, action}: Props) => {
  return (
    <TouchableNativeFeedback onPress={ () => action(text) } background={ TouchableNativeFeedback.Ripple( (width)?'black':'white', false, (width)?92:40)}>
          <View style={{ ...styles.button, backgroundColor: color, width: (width)? 180: 80}}>
            <Text style={{ ...styles.textButton, color: (color == "#9B9B9B")? 'black': 'white'}}>{ text }</Text>
        </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    textButton: {
        fontSize: 30, fontWeight: 'bold'
    },
})
