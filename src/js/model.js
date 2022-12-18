import { async } from "regenerator-runtime";

export let state = {
    recipe: {},
};

export const loadRecipe = async function(id) {

    try{
    //  Loading the Recipe
    
    let response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`

    );
    
    const result = await response.json();
    if(!response.ok) throw new Error(`${result.message}, (${result.status})`);

    let recipe = result.data.recipe;

    state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
    }
    
    console.log(state.recipe);
}catch(error){
    console.log(error);
}
    

}