import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartModal from "../UI/CartModal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;
    const totalAmount = cartCtx.totalAmount.toFixed(2);
    const removeHandler = (id) => {

    }
    const addHandler = (item) =>{
        cartCtx.addItem({...item, amount:1})
    }

    const cartItems = <ul>{cartCtx.items.map(item=>
        <CartItem key={item.id} name={item.name} amount={item.amount} 
        price={item.price} onRemove={removeHandler.bind(null, item.id)} 
        onAdd={addHandler.bind(null, item) }/>)}</ul>
        return ( 
            <CartModal onClose={props.onClose} className={classes['cart-items']}>
            
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes['button']}>Order</button>}
        </div>
    </CartModal> )

}

export default Cart;