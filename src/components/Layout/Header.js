import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = props => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onCartShow}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage}/>
            </div>
        </Fragment>
    )
}


export default Header;