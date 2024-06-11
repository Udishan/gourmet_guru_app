import { Meal } from "../models/Meal";

export function convertToMeal(responseData) {
    // if (!responseData || !responseData.meals || !Array.isArray(responseData.meals) || responseData.meals.length === 0) {
    //     throw new Error("Invalid response data");
    // }

    const mealData = responseData?.meals[0];


    const ingredientsMap = new Map();

    for (let i = 1; i <= 20; i++) {
        const ingredient = mealData?.[`strIngredient${i}`];
        const measure = mealData?.[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
            ingredientsMap.set(ingredient, measure && measure.trim() !== "" ? measure : null);
        }
    }

    console.log("my ingridient", ingredientsMap)
    const meal = new Meal(

        mealData?.idMeal,
        mealData?.strMeal,

        //     // mealData.strDrinkAlternate,

        mealData?.strCategory,
        mealData?.strArea, 
        mealData?.strInstructions,  
        mealData?.strMealThumb,
        mealData?.strYoutube,
        mealData?.strSource,
        

        //     // mealData.strTags,
        //     // mealData.strYoutube,
        //     // ingredients,
        //     // measures,
        //     // mealData.strSource,
        //     // mealData.strImageSource,
        //     // mealData.strCreativeCommonsConfirmed,
        //     // mealData.dateModified
        ingredientsMap
    );
    return meal;
}