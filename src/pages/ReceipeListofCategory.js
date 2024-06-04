import React from 'react'

import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';

const ReceipeListofCategory = () => {
    const { categoryName } = useParams();

    const { data, loading, error } = useAxios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    return (
        <div>
            <h1>{categoryName}</h1>
            {/* Fetch and display detailed information about the category */}
            <p>{ JSON.stringify(data, null, 2) }</p>
        </div>
    )
}

export default ReceipeListofCategory