import React from 'react'

import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';

const ReceipeListofCategory = () => {
    const { categoryId } = useParams();

    const { data, loading, error } = useAxios('https://www.themealdb.com/api/json/v1/1/categories.php');
    return (
        <div>
            <h1>{categoryId}</h1>
            {/* Fetch and display detailed information about the category */}
        </div>
    )
}

export default ReceipeListofCategory