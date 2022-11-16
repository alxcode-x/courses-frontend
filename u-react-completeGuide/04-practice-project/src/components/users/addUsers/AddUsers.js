import React, { useState } from 'react';
import Button from '../../UI/button/Button';
import styles from './AddUsers.module.css';
import ErrorModal from '../../UI/errorModal/ErrorModal'

function AddUsers(props) {
    const [usernameText, setUsernameText] = useState('');
    const [ageText, setAgeText] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (usernameText.trim().length === 0 || ageText.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter valid data (non-empty values).'
            });
            return;
        }
        if (+ageText < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            }); 
            return;
        }
        props.onAddUser({ name: usernameText, age: ageText });
        setUsernameText('');
        setAgeText('');
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
                        <input type="text" id="userName" onChange={(event) => setUsernameText(event.target.value)} value={usernameText} />
                    </div>
                    <div className={styles.fields}>
                        <label htmlFor="age">Age (Years)</label>
                        <input type="text" id="age" onChange={(event) => setAgeText(event.target.value)} value={ageText} />
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