import React from 'react'
import Recipe from '../common/Recipe'
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { convertToMeal } from '../../services/MealService';


const RecipeContent = () => {


  const { recipeID } = useParams();

  const { data, loading, error } = useAxios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`);
  
  const mealInstance = convertToMeal(data);

console.log("meal map", mealInstance.ingredientsMap)

  return (
    <>
      <div>
        <Recipe
          recipeID={mealInstance.idMeal}
          strMeal={mealInstance.strMeal}
          strMealThumb={mealInstance.strMealThumb}
          strArea={mealInstance.strArea}
          strCategory={mealInstance.strCategory}
          strInstructions={mealInstance.strInstructions}
          strYoutube={mealInstance.strYoutube}
          strSource={mealInstance.strSource}
          ingredientMap={mealInstance.ingredientsMap}
        />
      </div>
    </>
  )
}

export default RecipeContent