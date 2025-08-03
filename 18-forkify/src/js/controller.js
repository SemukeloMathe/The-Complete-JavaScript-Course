import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

import "core-js";
import "regenerator-runtime/runtime";

export const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(
                new Error(`Request took too long! Timeout after ${s} second`)
            );
        }, s * 1000);
    });
};
///////////////////////////////////////

const controlRecipes = async function (params) {
    try {
        const id = window.location.hash.slice(1);

        // guard clause
        if (!id) return;

        // 1) loading recipe
        recipeView.renderSpinner();
        await model.loadRecipe(id);

        // 2) Rendering recipe
        recipeView.render(model.state.recipe);
    } catch (err) {
        alert(err);
    }
};
controlRecipes();

// event handlers
const events = ["hashchange", "load"];
events.forEach((ev) => window.addEventListener(ev, controlRecipes));
