import React from 'react'
import RecipeCard from '../components/common/RecipeCard'
import Header from '../components/header/Header'
import CategoryCard from '../components/common/CategoryCard'
import CategoryContent from '../components/categoryContentComponent/CategoryContent'
import Loader from '../components/common/loader/Loader'

const Home = () => {
  
  return (
    <>
        <Header />
        <CategoryContent/>
    </>
  )
}

export default Home