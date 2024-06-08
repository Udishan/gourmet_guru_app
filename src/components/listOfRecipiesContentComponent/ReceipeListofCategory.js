import React from 'react'

import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import RecipeCard from '../common/RecipeCard';

const ReceipeListofCategory = () => {
    const { categoryName } = useParams();

    const { data, loading, error } = useAxios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    return (
        <>
        <div className="container mx-auto p-4">
            <div className="container mx-auto p-4">
                <div className="flex items-center space-x-4">
                    <p className="text-xl font-bold mb-4">{ categoryName } Recipies</p>
                    <div className="flex-grow border-t border-current mb-3 -ml-2"></div>
                </div>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-4 p-1">
                {
                    data?.meals.map(recipe => (
                        <div key={recipe.idMeal}>
                            <RecipeCard
                                idMeal={recipe.idMeal}
                                recipeImage={recipe.strMealThumb}
                                recipeName={recipe.strMeal}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    </>
    )
}

export default ReceipeListofCategory