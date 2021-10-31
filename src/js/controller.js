// https://forkify-api.herokuapp.com/v2
import * as model from "./model";

import "core-js/stable";
import "regenerator-runtime";
import recipeView from "./view/recipeView";

const recipeContainer = document.querySelector(".recipe");

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();
    // 1) loading recipe

    await model.loadRecipe(id);

    //2) rendering recipe

    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

window.addEventListener("hashchange", controlRecipes);
window.addEventListener("load", controlRecipes);
