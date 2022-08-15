import { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const numberOfItems = cartCtx.items.reduce((currNum, item) => currNum + item.amount, 0) 
    return (
        <button onClick={props.onClick} className={styles.button}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCartButton;