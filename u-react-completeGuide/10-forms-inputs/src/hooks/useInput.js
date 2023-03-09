import { useState } from 'react';

function useInput(inputValidation) {
    const [inputValue, setInputValue] = useState('');
    const [inputIsBlur, setInputIsBlur] = useState(false);

    const inputChangeHandler = (event) => {
        setInputValue(event.target.value);
    }

    const inputBlurHandler = () => {
        setInputIsBlur(true);
    }

    const reset = () => {
        setInputValue('');
        setInputIsBlur(false);
    }

    const inputIsValid = inputValidation(inputValue);
    const hasError = inputIsBlur && !inputIsValid;

    return {
        inputValue,
        inputIsValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset,
    }
}

export default useInput;