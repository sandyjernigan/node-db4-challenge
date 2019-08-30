const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getShoppingList
};

//#region - CREATE

// function add

//#endregion

//#region - READ

// getRecipes(): should return a list of all recipes in the database.
function getRecipes() {
  return db('recipes');
}

// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
  return db('recipe_ingredients AS ri')
    .join('recipes', 'recipes.id', 'ri.recipe_id')
    .join('ingredients', 'ingredients.id', 'ri.ingredient_id')
    .select('recipes.id', 'recipes.recipe', 'ingredients.ingredient', 'ri.quantity')
    .orderBy('ingredients.id')
    .where({ 'recipe_id': recipe_id });
}

//#endregion

//#region - UPDATE

//update

//#endregion

//#region - DELETE

// remove

//#endregion