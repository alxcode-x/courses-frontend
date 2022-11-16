import React from 'react';
import Card from '../card/Card';
import Button from '../button/Button';
import styles from './ErrorModal.module.css';

function ErrorModal(props) {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onConfirm}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <main className={styles.content}>
                    <p>{props.message}</p>
                </main>
                <footer className={styles.footer}>
                    <Button onClick={props.onConfirm}>Ok</Button>
                </footer>
            </Card>
        </div>
    )
}

export default ErrorModal;