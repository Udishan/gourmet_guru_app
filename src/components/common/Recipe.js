import React from 'react'

import { TbWorldPin } from "react-icons/tb";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { TfiYoutube } from "react-icons/tfi";
import { MdSource } from "react-icons/md";


const Recipe = ({ recipeID,
  strMeal,
  strMealThumb,
  strArea,
  strCategory,
  strInstructions,
  strYoutube,
  strSource,
  ingredientMap
  //  strCategory, strArea, strInstructions, strMealThumb, strTags, strYoutube
}) => {
  return (

    <>
      {console.log('map', ingredientMap)}
      <div className='mb-36'>
        <div className='mt-16 mb-5'>
          <p className='text-3xl font-bold text-center'>
            {strMeal}
          </p>
        </div>

        <div className='flex items-center justify-center'>
          <div className='flex justify-center items-center'>
            <img src={strMealThumb} alt='Meal Thumbnail' className='object-contain h-96 w-96' />
          </div>
          <div className='mx-16'>
            <div className='flex h-5 items-center'>
              <div className='mx-2'>
                <TbWorldPin className='h-8 w-8' />
              </div>
              <div className='mt-1 mx-2'>
                <p className='text-md'>{strArea}</p>
              </div>
            </div>
            <div className='flex h-5 items-center my-5'>
              <div className='mx-2'>
                <PiBowlFoodDuotone className='h-8 w-8' />
              </div>
              <div className='mt-1 mx-2'>
                <p className='text-md'>{strCategory}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mx-28 mt-5'>
          <div>
            <p className='my-3 text-xl font-semibold'>Ingredients</p>
          </div>
          <div>
            <ul className='list-none'>
              {Array.from(ingredientMap.entries()).map(([ingredient, measure], index) => (
                <li key={index} className='dec'>
                  <p className='font-lg'>
                    {ingredient}: {measure || 'to taste'}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='my-12 mx-28'>
          <div className='my-3'> 
            <p className='font-semibold text-xl'>Instructions</p>
          </div>
          <div>
            <p className='text-justify font-lg'>{strInstructions}</p>
          </div>
        </div>

        {strYoutube && strYoutube.trim() !== "" ? (
          <div className='flex items-center justify-center mx-2'>
            <TfiYoutube className='text-red-600 h-8 w-8 ml-3' />
            <p className="text-blue-500 hover:underline mt-2 mr-3">
              <a href={strYoutube} className="text-blue-500 hover:underline cursor-pointer">
                Click here to watch the preparation video on YouTube
              </a>
            </p>
          </div>
        ) : (
          <></>
        )}


        {strSource !== " " ? (
          <div className='flex items-center justify-center'>
            <MdSource className='text-blue-400 h-8 w-8 mr-1.5 mt-1 ' />
            <p className="text-blue-500 hover:underline mt-2 ml-1.5">
              <a href={strSource} className="text-blue-500 hover:underline cursor-pointer">
                Click here to go to the source of this recipe
              </a>
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>

    </>
  )
}

export default Recipe