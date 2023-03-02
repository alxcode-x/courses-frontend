import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  //const nameInputRef = useRef(); // ref approach
  const [enteredName, setEneteredName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEneteredName(event.target.value);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    
    if(enteredName.trim() === ''){
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);
    console.log(enteredName);
    setEneteredName('');

    // ref approach
    //console.log(nameInputRef.current.value);
    //nameInputRef.current.value = '';
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameIsValid ? 'form-control' : 'form-control invalid'}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
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
