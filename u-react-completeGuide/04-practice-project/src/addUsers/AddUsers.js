import React, { useState } from 'react';
import styles from './AddUsers.module.css';

function AddUsers() {
    const [userNameText, setUserNameText] = useState("");
    const [ageText, setAgeText] = useState("");

    const onAddUser = (event) => {

    }

    return (
        <div className={styles["form-wrapper"]}>
            <form action={onAddUser}>
                <div className={styles["fields"]}>
                    <label htmlFor="userName">Username</label>
                    <input type="text" id="userName" onChange={(event) => setUserNameText(event.target.value) } value={userNameText}/>
                </div>
                <div className={styles.fields}>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="text" id="age" onChange={(event) => setAgeText(event.target.value) } value={ageText} />
                </div>
                <div className={styles["button-container"]}>
                    <button className={styles.button} type="submit">Add User</button>
                </div>
            </form>
        </div>
    )
}

export default AddUsers;