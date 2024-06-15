import React from 'react'
import { Link } from 'react-router-dom'


const CategoryCard = ({
    categoryId,
    categoryName,
    categoryThumnailUrl,
    // categoryDescription 
}) => {
    return (
        <div className='h-auto w-64 bg-green-100 border border-spacing-1 border-black'>
            <Link to={`/category/${categoryName}`} >
                <div>
                    <img src={categoryThumnailUrl} alt="Description of image" className="max-h-full max-w-full object-contain" />
                </div>

                <div className='mt-8 bg-green-600'>
                    <p className='text-left text-2xl mx-1'>{categoryName}</p>
                </div>
            </Link>
        </div >
    )
}

export default CategoryCard