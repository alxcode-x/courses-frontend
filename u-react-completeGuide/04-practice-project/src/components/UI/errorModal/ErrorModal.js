import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'
import Card from '../card/Card';
import Button from '../button/Button';
import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onConfirm}></div>
}

const ModalOverlay = (props) => {
    return (
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
    )
}

function ErrorModal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    )
}

export default ErrorModal;