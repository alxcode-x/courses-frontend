import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  //const nameInputRef = useRef(); // ref approach
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset:resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();

    // ref approach
    //console.log(nameInputRef.current.value);
    //nameInputRef.current.value = '';
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputHasError ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
        {/* <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler}/> //ref approach*/}
        {nameInputHasError && <p className='error-text'>Name can't be empty.</p>}
      </div>
      <div className={emailInputHasError ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='email'>Your Email</label>
        <input type='text' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail} />
        {/* <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler}/> //ref approach*/}
        {emailInputHasError && <p className='error-text'>Email can't be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
