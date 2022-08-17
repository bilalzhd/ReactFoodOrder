import { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const [animated, setAnimated] = useState(false);
    const btnclass = `${styles.button} ${animated ? styles.bump : ""}`;
    const { items } = cartCtx;

    useEffect(() => {
        if(cartCtx.items.length === 0) return;

        setAnimated(true);

        const timer = setTimeout(()=>{
            setAnimated(false)
        }, 300)

        return ()=>{
            clearTimeout(timer);
        }
    }
    , [items])

    const numberOfItems = items.reduce((currNum, item) => currNum + item.amount, 0)
    return (
        <button onClick={props.onClick} className={btnclass}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCartButton;