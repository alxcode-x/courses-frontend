import React, { useState, useRef } from 'react';
import Button from '../../UI/button/Button';
import styles from './AddUsers.module.css';
import ErrorModal from '../../UI/errorModal/ErrorModal'

function AddUsers(props) {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    // const [usernameText, setUsernameText] = useState('');
    // const [ageText, setAgeText] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter valid data (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            }); 
            return;
        }
        props.onAddUser({ name: enteredName, age: enteredAge });
        nameInputRef.current.value = ''; // here we are manipalting the DOM without React 
        ageInputRef.current.value = '';
        // setUsernameText('');
        // setAgeText('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div className={styles.main}>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <div className={styles["form-wrapper"]}>
                <form onSubmit={addUserHandler}>
                    <div className={styles["fields"]}>
                        <label htmlFor="userName">Username</label>
                        <input type="text" id="userName" ref={nameInputRef}/>
                    </div>
                    <div className={styles.fields}>
                        <label htmlFor="age">Age (Years)</label>
                         <input type="text" id="age" ref={ageInputRef} />
                    </div>
                    <div className={styles["button-container"]}>
                        <Button className={styles.button} type="submit">Add User</Button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AddUsers;

// === using useState ===
// line 45: <input type="text" id="userName" onChange={(event) => setUsernameText(event.target.value)} value={usernameText} />
// line 49: <input type="text" id="age" onChange={(event) => setAgeText(event.target.value)} value={ageText} />