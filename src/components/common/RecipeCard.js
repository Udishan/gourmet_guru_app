import React from 'react'

import useAxios from '../../hooks/useAxios';

import MyImage from '../../assets/images/test.jpg'

const RecipeCard = () => {

    // const { data, loading, error } = useAxios('https://www.themealdb.com/api/json/v1/1/categories.php');

    // if (loading) return <p className="text-center">Loading...</p>;
    // if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;


    return (
        <>
            <div className='h-80 w-64 bg-red-600 border border-spacing-1 border-black'>
                <div>
                    <img src={MyImage} alt="Description of image" className="max-h-full max-w-full object-contain" />
                </div>

                <div className='mt-8'>
                    <p className='text-left text-2xl mx-1'>Chicken Salad</p>
                </div>
            </div>
        </>

    )
}

export default RecipeCard