import React from 'react'
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    calculatorScreen: {
        flex: 1,
        backgroundColor: 'black',
        padding: 12,

        
    },
    containerResult: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-end'
    },
    miniResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 25,
        textAlign: 'right'
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right'
    },
    file:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
    },
});
