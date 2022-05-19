import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../themes/AppTheme'
import { ButtonCalculator } from '../components/ButtonCalculator';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

    const { 
        previousNumber,
        numberActual,
        clearNum,
        changeSigne,
        removeLastNumber,
        buttonSplit,
        makeNumber,
        buttonMultiply,
        buttonSubstract,
        buttonAdd,
        result
    } = useCalculator();

  return (
    <View style={ styles.calculatorScreen }>
        <View style={ styles.containerResult }>
            <Text style={ styles.miniResult }>{ previousNumber }</Text>
            <Text style={ styles.result } numberOfLines={1} adjustsFontSizeToFit>
                { numberActual }
            </Text>
        </View>

        <View style={ styles.file }>
            <ButtonCalculator text="C" color="#9B9B9B" action={ clearNum }/>
            <ButtonCalculator text="+/-" color="#9B9B9B" action={ changeSigne }/>
            <ButtonCalculator text="DEL" color="#9B9B9B" action={ removeLastNumber }/>
            <ButtonCalculator text="/" color="#FF9427" action={ buttonSplit }/>
        </View>

        <View style={ styles.file }>
            <ButtonCalculator text="7" action={ makeNumber }/>
            <ButtonCalculator text="8" action={ makeNumber }/>
            <ButtonCalculator text="9" action={ makeNumber }/>
            <ButtonCalculator text="X" color="#FF9427" action={ buttonMultiply }/>
        </View>

        <View style={ styles.file }>
            <ButtonCalculator text="4" action={ makeNumber }/>
            <ButtonCalculator text="5" action={ makeNumber }/>
            <ButtonCalculator text="6" action={ makeNumber }/>
            <ButtonCalculator text="-" color="#FF9427" action={ buttonSubstract }/>
        </View>

        <View style={ styles.file }>
            <ButtonCalculator text="1" action={ makeNumber }/>
            <ButtonCalculator text="2" action={ makeNumber }/>
            <ButtonCalculator text="3" action={ makeNumber }/>
            <ButtonCalculator text="+" color="#FF9427" action={ buttonAdd }/>
        </View>

        <View style={ styles.file }>
            <ButtonCalculator text="0" width action={ makeNumber }/>
            <ButtonCalculator text="." action={ makeNumber }/>
            <ButtonCalculator text="=" color="#FF9427" action={ result }/>
        </View>
    </View>
  )
}
