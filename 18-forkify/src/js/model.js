export const state = {
    recipe: {},
};

// responsible for fetching recipe data from the forkify api
export const loadRecipe = async function (id) {
    try {
        const res = await fetch(
            // "https://forkify-api.jonas.io/api/v2/recipes/664c8f193e7aa067e94e8658"
            `https://forkify-api.jonas.io/api/v2/recipes/${id}`
        );
        const data = await res.json();

        if (!res.ok) throw new Error(`${data.message} (${res.status})`);

        const { recipe } = data.data;

        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };
        console.log(state.recipe);
    } catch (error) {
        alert(error);
    }
};
