import { useState } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  //const nameInputRef = useRef(); // ref approach
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueIsBlur: nameBlurHandler,
    reset:
  } = useInput(value => value.trim() !== '');

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setNameIsBlur(true);

    if (!formIsValid) {
      return;
    }

    console.log(enteredName);
    resetNameInput();

    // ref approach
    //console.log(nameInputRef.current.value);
    //nameInputRef.current.value = '';
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameIsInvalid ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
        {/* <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler}/> //ref approach*/}
        {nameInputHasError && <p className='error-text'>Name can't be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
