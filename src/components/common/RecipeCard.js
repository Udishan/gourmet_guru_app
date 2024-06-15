import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({
    idMeal,
    recipeImage,
    recipeName
}) => {
    return (
        <>
            <Link to={`/recipe/${idMeal}`}>
                <div className='w-80 bg-red-600 border border-spacing-1 border-black'>
                    <div>
                        <img src={recipeImage} alt="Description" className="max-h-full max-w-full object-contain" />
                    </div>

                    <div className='mt-8'>
                        <p className='text-left text-lg mx-1'>{recipeName}</p>
                    </div>
                </div>
            </Link>

        </>

    )
}

export default RecipeCard