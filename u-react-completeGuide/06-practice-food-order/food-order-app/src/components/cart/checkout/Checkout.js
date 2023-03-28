import React, { useRef, useReducer } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim().length >= 5;

const defaultFormValidationState = {
    inputs: {
        name: false,
        street: false,
        city: false,
        postal: false,
    },
    form: false

}
const checkoutReducer = (state, action) => {
    if (action.type === 'INPUTS') {
        return {
            inputs: {
                name: !isEmpty(action.inputs.name) && isFiveChars(action.inputs.name),
                street: !isEmpty(action.inputs.street) && isFiveChars(action.inputs.street),
                city: !isEmpty(action.inputs.city) && isFiveChars(action.inputs.city),
                postal: !isEmpty(action.inputs.postal) && isFiveChars(action.inputs.postal),
            },
            form: state.form
        }
    }

    if (action.type === 'FORM') {
        return {
            inputs: {...state.inputs},
            form: state.inputs.name && state.inputs.street && state.inputs.city && state.inputs.postal,
        }
    }

    return defaultFormValidationState;
}

function Checkout(props) {
    const [formValidity, dispatchFormValidation] = useReducer(checkoutReducer, defaultFormValidationState);
    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    console.log(formValidity);

    const confirmHandler = (event) => {
        event.preventDefault();

        dispatchFormValidation({
            type: 'INPUTS',
            inputs: {
                name: nameRef.current.value,
                street: streetRef.current.value,
                city: cityRef.current.value,
                postal: postalRef.current.value,
            }
        });

        dispatchFormValidation({type: 'FORM'});

        // const formIsValid = nameIsValid && streetIsValid && postalIsValid && cityIsValid;

        // if (!formIsValid) {
        //     return;
        // }

    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityRef} />
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
}

export default Checkout