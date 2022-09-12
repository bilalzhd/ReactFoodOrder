import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);
  const inputRef = useRef();

  const formSubmitHandler = event => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length < 1 || 
    enteredAmountNumber < 0 || 
    enteredAmountNumber > 5){
      setFormIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);

  }
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={inputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      {!formIsValid && <p className={classes['error-text']}>Enter a valid amount (1-5).</p>}
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
