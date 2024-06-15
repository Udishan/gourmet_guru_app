import React from 'react'
import Recipe from '../common/Recipe'
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { convertToMeal } from '../../services/MealService';
import Loader from '../common/loader/Loader';

const RecipeContent = () => {


  const { recipeID } = useParams();

  const { data, loading, error } = useAxios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`);

  const mealInstance = convertToMeal(data);

  console.log("meal map", mealInstance.ingredientsMap)

  return (
    <>
      {
        loading && (
          <div className='flex items-center justify-center'>
            <Loader />
          </div>
        )
      }

      {
        error && (
          <div className='flex items-center justify-center'>
            <p className='text-lg font-semibold text-red-700'>Error while loading</p>
          </div>
        )
      }

      {
        data && (
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
        )
      }

    </>
  )
}

export default RecipeContent