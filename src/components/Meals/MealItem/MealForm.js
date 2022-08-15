import styles from "./MealForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealForm = props => {
    const inputRef = useRef();
    const [formIsValid, setFormIsValid ] = useState(true);

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = inputRef.current.value;
        const enteredNum = +enteredAmount;  

        if(enteredAmount.trim().length < 1 || enteredNum < 1 || enteredNum > 5){
            setFormIsValid(false);
            return;
        }
        props.onAddToCart(enteredNum);
    }


    return (
    <form className={styles.form} onSubmit={submitHandler}>
        <Input label="Amount" ref={inputRef} input={{
            type: "number",
            id: "amount" + props.id,
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1' 
            }} />
        <button type="submit">+ADD</button>
        {!formIsValid && <p>Error! Enter a valid amount (1-5).</p>}
    </form>
    )
}

export default MealForm;