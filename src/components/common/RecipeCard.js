import React from 'react'
import MyImage from '../../assets/images/test.jpg'
const RecipeCard = () => {
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