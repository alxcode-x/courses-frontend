import React, { useState } from 'react';
import Button from '../../UI/button/Button';
import styles from './AddUsers.module.css';
import ErrorModal from '../../UI/errorModal/ErrorModal'

function AddUsers(props) {
    const [usernameText, setUsernameText] = useState('');
    const [ageText, setAgeText] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (usernameText.trim().length === 0 || ageText.trim().length === 0) {
            return;
        }
        if (+ageText < 1) {
            return;
        }
        props.onAddUser({ name: usernameText, age: ageText });
        setUsernameText('');
        setAgeText('');
    }

    return (
        <div className={styles.main}>
            <ErrorModal title="An error has ocurred" message="Somethin went wrong."/>
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