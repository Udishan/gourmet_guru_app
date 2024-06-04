import React from 'react'

const RecipeCard = ({
    recipeImage,
    recipeName
}) => {
    return (
        <>
            <div className='w-80 bg-red-600 border border-spacing-1 border-black'>
                <div>
                    <img src={recipeImage} alt="Description of image" className="max-h-full max-w-full object-contain" />
                </div>

                <div className='mt-8'>
                    <p className='text-left text-lg mx-1'>{recipeName}</p>
                </div>
            </div>
        </>

    )
}

export default RecipeCard