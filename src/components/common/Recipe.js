import React from 'react'
import { Link } from 'react-router-dom'


const Recipe = ({recipeID
  // , strMeal, strCategory, strArea, strInstructions, strMealThumb, strTags, strYoutube
}) => {
  return (
    <div className='h-auto w-64 bg-green-100 border border-spacing-1 border-black'>
    {/* <Link to={`/recipe/${recipeID}`} > */}
        <div>
            {/* <img src={strMealThumb} alt="Description of image" className="max-h-full max-w-full object-contain" /> */}
        </div>

        <p>{recipeID}</p>
        {/* <p>{strMeal}</p>
        <p>{strCategory}</p>
        <p>{strArea}</p>
        <p>{strInstructions}</p>
        <p>{strMealThumb}</p>
        <p>{strTags}</p>
        <p>{strYoutube}</p> */}

        {/* <div className='mt-8 bg-green-600'>
            <p className='text-left text-2xl mx-1'>{strMeal}</p>
        </div> */}
    {/* </Link> */}
</div >
  )
}

export default Recipe