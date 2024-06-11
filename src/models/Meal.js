export class Meal {
    constructor(
        idMeal,
        strMeal,
        // strDrinkAlternate,
        strCategory,
        strArea,
        strInstructions,
        strMealThumb,
        // strTags,
        strYoutube,
        // ingredients,
        // measures,
        strSource,
        // strImageSource,
        // strCreativeCommonsConfirmed,
        // dateModified,
        ingredientsMap
    ) {
        this.idMeal = idMeal || "";
        this.strMeal = strMeal || "";
        // this.strDrinkAlternate = strDrinkAlternate || null;
        this.strCategory = strCategory || "";
        this.strArea = strArea || "";
        this.strInstructions = strInstructions || "";
        this.strMealThumb = strMealThumb || "";
        // this.strTags = strTags || null;
        this.strYoutube = strYoutube || "";
        // this.ingredients = ingredients || [];
        // this.measures = measures || [];
        this.strSource = strSource || "";
        // this.strImageSource = strImageSource || null;
        // this.strCreativeCommonsConfirmed = strCreativeCommonsConfirmed || null;
        // this.dateModified = dateModified || null;
        this.strInstructions = strInstructions || "";
        this.ingredientsMap = ingredientsMap
    }
}
