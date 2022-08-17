import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultItems = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if(action.type === "ADD") {
        const updatedAmount = state.totalAmount + (action.item.price * action.item.amount);

        const exisitingItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingItem = state.items[exisitingItemIndex];
        let updatedItems;

        if(existingItem){
            let updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount 
            };
            updatedItems = [...state.items]
            updatedItems[exisitingItemIndex] = updatedItem;
            
        } else {
            updatedItems = state.items.concat(action.item)
        }

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
        
        if(action.type === "REMOVE") {
            const exisitingItemIndex = state.items.findIndex(item => item.id === action.item.id)
            const existingItem = state.item[exisitingItemIndex]
            const updatedTotalAmount = state.totalAmount - existingItem.price;
            if(existingItem.amount === 1){

            } else {
                
            }
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