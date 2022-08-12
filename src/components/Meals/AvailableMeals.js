import styles from "./AvailableMeals.module.css";
import DUMMY_MEALS from "./dummy-meals";
import MealsList from "./MealItem/MealsList";
import Card from "../UI/Card";


const AvailableMeals = ()=>{
    const meals = DUMMY_MEALS.map(meal => <MealsList key={meal.id} name={meal.name} 
    description={meal.description} price={meal.price} />)
    return <section className={styles.meals}>
      <Card>
        <ul className="mealsul">
            {meals}
        </ul>
        </Card>
    </section>
}

export default AvailableMeals;