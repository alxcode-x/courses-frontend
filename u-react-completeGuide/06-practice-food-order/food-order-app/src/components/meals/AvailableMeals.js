import React from 'react'
import useHttpRequest from '../../hooks/useHttpRequest';
import classes from './AvailableMeals.module.css'
import Card from '../common/card/Card';
import MealItem from './meal-item/MealItem';

function AvailableMeal() {
    const { data } = useHttpRequest('https://react-http-test-8f2c7-default-rtdb.firebaseio.com/meals.json', null);

    let mealsList = [];

    for (const key in data) {
        mealsList.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
        });
    }

    const meals = mealsList.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {meals}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeal;