import React from 'react'
import Recipe from '../common/Recipe'
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';


const RecipeContent = () => {


const { recipeID } = useParams();

  const { data, loading, error } = useAxios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`);

  return (
    <>
      <div>
        {console.log("id", recipeID)}
        {console.log("dasdf", data)}
        <Recipe recipeID={data?.meals[0].idMeal}/>
      </div>
    </>
  )
}

export default RecipeContent