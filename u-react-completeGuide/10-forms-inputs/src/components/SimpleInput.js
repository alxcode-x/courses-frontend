import { useState } from 'react';

const SimpleInput = (props) => {
  //const nameInputRef = useRef(); // ref approach
  const [enteredName, setEneteredName] = useState('');
  const [nameIsBlur, setNameIsBlur] = useState(false)

  const nameIsValid = enteredName.trim() !== '';
  const nameIsInvalid = !nameIsValid && nameIsBlur;

  const nameInputChangeHandler = (event) => {
    setEneteredName(event.target.value);
  }

  const nameInputBlurHandler = () => {
    setNameIsBlur(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setNameIsBlur(true);

    if (!nameIsValid) {
      return;
    }

    console.log(enteredName);
    setEneteredName('');
    setNameIsBlur(false);
    // ref approach
    //console.log(nameInputRef.current.value);
    //nameInputRef.current.value = '';
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameIsInvalid ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
        {/* <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler}/> //ref approach*/}
        {!nameIsValid && <p className='error-text'>Name can't be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
