import React from 'react'

import { TbWorldPin } from "react-icons/tb";
import { PiBowlFoodDuotone } from "react-icons/pi";



const Recipe = ({ recipeID,
  strMeal,
  strMealThumb,
  strArea,
  strCategory,
  strInstructions
  //  strCategory, strArea, strInstructions, strMealThumb, strTags, strYoutube
}) => {
  return (
    <>
      <div>
        <div className='mt-16 mb-5'>
          <p className='text-3xl font-bold text-center'>
            {strMeal}
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <img src={strMealThumb} alt='Meal Thumbnail' className='object-contain h-96 w-96' />
        </div>
        <div className='mx-16'>
          <div className='flex h-5 items-center'>
            <div className='mx-2'>
              <TbWorldPin className='h-8 w-8'/>
            </div>
            <div className='mt-1 mx-2'>
              <p className='text-md'>{strArea}</p>
            </div>
          </div>
          <div className='flex h-5 items-center my-5'>
            <div className='mx-2'>
              <PiBowlFoodDuotone className='h-8 w-8'/>
            </div>
            <div className='mt-1 mx-2'>
              <p className='text-md'>{strCategory}</p>
            </div>
          </div>
        </div>
        <div className='my-12 mx-28'>
          <p className='text-justify'>{strInstructions}</p>
        </div>

      </div>
    </>
  )
}

export default Recipe