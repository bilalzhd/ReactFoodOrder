import styles from "./MealForm.module.css";
import Input from "../../UI/Input";

const MealForm = props => {
    return (
    <form className={styles.form}>
        <Input label="Amount" input={{
            type: "number",
            id: "amount" + props.id,
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1' 
            }} />
        <button>+ADD</button>
    </form>
    )
}

export default MealForm;