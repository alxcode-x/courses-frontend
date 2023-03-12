import useInput from "../hooks/useInput";

const BasicForm = (props) => {
  const {
    inputValue: nameValue,
    inputIsValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(input => input.trim() !== '');

  const {
    inputValue: lastnameValue,
    inputIsValid: lastnameIsValid,
    hasError: lastnameHasError,
    inputChangeHandler: lastnameChangeHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: resetLastname,
  } = useInput(input => input.trim() !== '');

  const {
    inputValue: emailValue,
    inputIsValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(input => input.trim() !== '' && input.includes('@'));

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(!nameIsValid && !lastnameIsValid && !emailIsValid){
      return;
    }

    resetName();
    resetLastname();
    resetEmail();
  }


  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameHasError ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={nameValue} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
          {nameHasError && <span className='error-text'>Name cannot be empty.</span>}
        </div>
        <div className={lastnameHasError ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text' id='lastname' value={lastnameValue} onChange={lastnameChangeHandler} onBlur={lastnameBlurHandler} />
          {lastnameHasError && <span className='error-text'>Last name cannot be empty.</span>}
        </div>
      </div>
      <div className={emailHasError ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailHasError && <span className='error-text'>Enter a valid email.</span>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
