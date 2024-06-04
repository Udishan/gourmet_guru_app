import React from 'react'
import useAxios from '../../hooks/useAxios';
import CategoryCard from '../common/CategoryCard';

const CategoryContent = () => {
    const { data, loading, error } = useAxios('https://www.themealdb.com/api/json/v1/1/categories.php');
    return (
        <>
            {console.log("xxx", data?.categories)}
            <div className="container mx-auto p-4">
                <div className="container mx-auto p-4">
                    <div className="flex items-center space-x-4">
                        <p className="text-xl font-bold mb-4">Our Recipe Categories</p>
                        <div className="flex-grow border-t border-current mb-3 -ml-2"></div>
                    </div>
                </div>

                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols- lg:grid-cols-4 p-1">
                    {
                        data?.categories.map(category => (
                            <div key={category.idCategory}>
                                <CategoryCard
                                    categoryId={category.idCategory}
                                    categoryName={category.strCategory}
                                    categoryThumnailUrl={category.strCategoryThumb}
                                    // categoryDescription={category.strCategoryDescription}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CategoryContent