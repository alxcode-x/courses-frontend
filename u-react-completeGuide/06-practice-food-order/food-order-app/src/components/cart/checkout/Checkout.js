import React, { useRef, useReducer } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim().length === 0;
const isFiveChars = (value) => value.trim().length >= 5;

const defaultFormValidationState = {
    inputs: {
        name: true,
        street: true,
        city: true,
        postal: true,
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
            inputs: { ...state.inputs },
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

        dispatchFormValidation({ type: 'FORM' });

        if (!formValidity.form) {
            return;
        }

        props.onConfirm({
            name: nameRef.current.value,
            street: streetRef.current.value,
            city: cityRef.current.value,
            postal: postalRef.current.value,
        });
    };

    const inputClasses = {
        name: `${classes.control} ${formValidity.inputs.name ? '' : classes.invalid}`,
        street: `${classes.control} ${formValidity.inputs.street ? '' : classes.invalid}`,
        postal: `${classes.control} ${formValidity.inputs.postal ? '' : classes.invalid}`,
        city: `${classes.control} ${formValidity.inputs.city ? '' : classes.invalid}`,
    }

    return (
        <form className={inputClasses.name} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameRef} />
                {!formValidity.inputs.name && <p>Please enter a valid name</p>}
            </div>
            <div className={inputClasses.street}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetRef} />
                {!formValidity.inputs.street && <p>Please enter a valid street</p>}

            </div>
            <div className={inputClasses.postal}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalRef} />
                {!formValidity.inputs.postal && <p>Please enter a valid postal code </p>}

            </div>
            <div className={inputClasses.city}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityRef} />
                {!formValidity.inputs.city && <p>Please enter a valid city</p>}

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