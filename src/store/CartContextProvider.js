import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultItems = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if(action.type === "ADD") {
        const updatedAmount = state.totalAmount + action.item.amount * action.item.price;

        const exisitngItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingItem = state.items[exisitngItemIndex];
        let updatedItems;

        if(existingItem){
            let updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount 
            };
            updatedItems = [...state.items]
            updatedItems[exisitngItemIndex] = updatedItem;
            
        } else {
            updatedItems = state.items.concat(action.item)
        }

        
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    return defaultItems;
}

const CartContextProvider = props => {
    const [cartState, dispatchCartAcion] = useReducer(cartReducer, defaultItems);



    const addItem = item => {
        dispatchCartAcion({type: "ADD", item})
    }
    const removeItem = id => {
        dispatchCartAcion({type: "REMOVE", id})
    }
    const CartContextItems = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItem,
        removeItem: removeItem
    }
    return (
        <CartContext.Provider value={CartContextItems}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;