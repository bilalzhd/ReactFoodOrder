import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealForm from "./MealForm";
import styles from "./MealsList.module.css";


const MealsList = props => {
    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext)

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return ( 
            <li className={styles.meal}>
                    <div>
                        <h3>{props.name}</h3>
                        <div className={styles.description}>{props.description}</div>
                        <div className={styles.price}>{price}</div>
                    </div>
                    <div>
                        <MealForm onAddToCart={addToCartHandler} />
                    </div>
                </li>)
        
}

export default MealsList;