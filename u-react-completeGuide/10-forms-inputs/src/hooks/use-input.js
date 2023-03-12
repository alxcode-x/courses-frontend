// useReducer is not really needed here, it's used jost for practice.
import { useReducer } from 'react';
const initialInputState = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {
    return (action.type === 'INPUT') ? { value: action.value, isTouched: state.isTouched }
        : (action.type === 'BLUR') ? { value: state.value, isTouched: true }
        : (action.type === 'RESET') ? { value: '', isTouched: false }
        : inputStateReducer;
}

function useInput(validateValue) {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);
    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState('');

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        // setEnteredValue(event.target.value);
        dispatch({type: 'INPUT', value: event.target.value});
    };

    const valueBlurHandler = () => {
        // setIsTouched(true);
        dispatch({type: 'BLUR'});
    };

    const reset = () => {
        // setEnteredValue('');
        // isTouched(false);
        dispatch({type: 'RESET'});
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
}

export default useInput;