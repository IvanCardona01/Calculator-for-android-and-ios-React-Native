import { useRef, useState } from "react";

enum Operator {
    add, substract, multiply, split
}

export const useCalculator = () => {

    const [previousNumber, setPreviousNumber] = useState('')
    const [numberActual, setNumberActual] = useState('');
    const lastOperation = useRef<Operator>()
    
    const clearNum = () => {
        if ( numberActual == ''){
            setPreviousNumber('')
        }
        setNumberActual('');
    }

    const makeNumber = (numberText: string) => {
        if (numberActual.includes('.') && numberText == '.') return;

        if( numberActual.length == 0 && numberText == '.') return;

        if (numberActual.startsWith('0') || numberActual.startsWith('-0')){

            if (numberText == '.'){
                setNumberActual(numberActual + numberText)
            }else if (numberActual.startsWith('0') && !numberActual.includes('.')){
                setNumberActual(numberText)
            }else if(numberText == '0' && numberActual.includes('.')){
                setNumberActual(numberActual + numberText)

            }else if(numberText == '0' && !numberActual.includes('.')){
                setNumberActual(numberActual)
            }else{
                setNumberActual( numberActual + numberText)
            }

        }else{
            setNumberActual( numberActual + numberText)   
        }
    }

    const changeSigne = () => {

        if (numberActual == '') return;

        if (numberActual.includes('-')){
            setNumberActual(numberActual.replace('-', ''))
        }else{
            setNumberActual( '-' + numberActual)
        }
    }

    const removeLastNumber = () =>{
        if (numberActual.length == 2 && numberActual.charAt(0) == '-'){
            setNumberActual('')
            return
        }
        let positionLastNumber = numberActual.length-1
        setNumberActual(numberActual.substring(0, positionLastNumber))
    }

    const changeNumberPosition = () => {
        if(numberActual == '') return;

        if ( previousNumber != ''){
            const existPreviousOperation = true
            calculate(existPreviousOperation)
        }else{
            if(numberActual.endsWith('.')){
                setPreviousNumber(numberActual.slice(0,-1));
            }else{
                setPreviousNumber(numberActual);
            }
            setNumberActual('');
        }
    }

    const buttonSplit = () => {
        lastOperation.current = Operator.split
        changeNumberPosition();
    }

    const buttonMultiply = () => {
        lastOperation.current = Operator.multiply
        changeNumberPosition();
    }

    const buttonSubstract = () => {
        lastOperation.current = Operator.substract
        changeNumberPosition();
    }

    const buttonAdd = () => {
        lastOperation.current = Operator.add
        changeNumberPosition();
    }

    const result = () => {
        calculate(false)
    }

    const calculate = (existPreviousOperation: boolean) => {
        if (previousNumber == '')return;
        const number1 = Number(numberActual)
        const number2 = Number(previousNumber)

        if (existPreviousOperation){
            setNumberActual('')
        }else{
            setPreviousNumber('')
        }

        switch (lastOperation.current) {
            
            case Operator.add:
                (existPreviousOperation)?setPreviousNumber(`${ number1 + number2 }`):setNumberActual( `${ number1 + number2 }`)
                break;
            case Operator.substract:
                (existPreviousOperation)?setPreviousNumber( `${ number2 - number1}`):setNumberActual( `${ number2 - number1}`)
                break;
            case Operator.multiply:
                (existPreviousOperation)?setPreviousNumber(`${ number1 * number2 }`):setNumberActual(`${ number1 * number2 }`)
                break;
            case Operator.split:
                (existPreviousOperation)?setPreviousNumber(`${ number2 / number1 }`):setNumberActual(`${ number2 / number1 }`)
                break;
            default:
                
                break;
        }
    }
    
    return {
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
    }
}
