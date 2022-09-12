import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const Checkout = (props) => {
    const [ formInputsValidity, setformInputsValidity ] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const isEmpty = value => value.trim().length === 0;
    const isFiveChars = value => value.trim().length >= 5;

    const confirmHandler = event => {

        event.preventDefault();
        enteredName = nameInputRef.current.value;
        enteredPostal = streetInputRef.current.value;
        enteredStreet = postalInputRef.current.value;
        enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = isFiveChars(enteredPostal);

        setformInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalIsValid
        })

        const formIsValid = enteredNameIsValid &&
        enteredStreetIsValid &&
         enteredCityIsValid && 
         enteredPostalIsValid;

         if(!formIsValid){

            return;
         }
    }  

    return <form onSubmit={confirmHandler}>
        <div className={classes.control}>
            <label htmlFor='name'>Your Name: </label>
            <input type="text" name='name' id="name" ref={nameInputRef}/>
            {!formInputsValidity.name && <p>Please enter a valid name.</p>}
        </div>
        <div className={classes.control}>
            <label htmlFor='street'>Street </label>
            <input type="text" name='street' id="street" ref={streetInputRef}/>
            {!formInputsValidity.street && <p>Please enter a valid street.</p>}
        </div>
        <div className={classes.control}>
            <label htmlFor='postal'>Postal Code </label>
            <input type="text" name='postal' id="postal" ref={postalInputRef}/>
            {!formInputsValidity.name && <p>Please enter a valid name.</p>}
        </div>
        <div className={classes.control}>
            <label htmlFor='city'>City </label>
            <input type="text" name='city' id="city" ref={cityInputRef}/>
        </div>
        <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit}>Confirm</button>
        </div>
    </form>
}
export default Checkout;