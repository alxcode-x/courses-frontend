import React from 'react';
import Card from '../../UI/card/Card';
import styles from './UsersList.module.css';

function UsersList(props) {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user) => (
                    <li>{user.name} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    )
}

export default UsersList;