"use client";

import {useState, useEffect} from "react";

export default function MealIdeas({ingredient})
{
    const [meals, setMeals] = useState([]);
    async function fetchMealIdeas(ingredient) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    };

    async function loadMealIdeas() {
        setMeals(await fetchMealIdeas(ingredient))
    }


    useEffect(() => {
        if (ingredient)
        {
            loadMealIdeas();
        }
    }, [ingredient]);




    return (
        <div>      
            {
            !ingredient ?
            <p>Select an item</p> :
            meals.length > 0 ?
            (
            <>
            <h2>Meal Ideas with {ingredient}</h2>
            <p>Here are some meal ideas using {ingredient}:</p>
            <ul>
                {meals.map((meal) => (

                    <li className = "mt-2 ml-2" key = {meal.idMeal}><p>-{meal.strMeal}</p></li>
                ))}
            </ul>
            </>
            ) : 
            <p>No meal ideas found for {ingredient}</p>
            }
        </div>
    );
};