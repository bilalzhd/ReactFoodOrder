import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const Overlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const CartModal = props => {
    const overlay = document.getElementById('overlay')
    return (<Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, overlay)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, overlay)}
            </Fragment>)

    
}
export default CartModal;