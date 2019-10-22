const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getRecipeByID,
  getShoppingList,
  getInstructions
};

//#region - CREATE

// function add

//#endregion

//#region - READ

// getRecipes(): should return a list of all recipes in the database.
function getRecipes() {
  return db('recipes');
}

// getRecipeByID(): should return a recipe, list of all ingredients, and instructions.
async function getRecipeByID(recipe_id) {
  // Join shoppingList and instructions tables
  try {
    const shoppingList = await getShoppingList(recipe_id);
    const instructions = await getInstructions(recipe_id);
    const recipe = shoppingList.concat(instructions);

    if (shoppingList.length && instructions.length) {
      return recipe
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipe' });
  }
}

// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {
  return db('recipe_ingredients AS ri')
    .join('recipes', 'recipes.id', 'ri.recipe_id')
    .join('ingredients', 'ingredients.id', 'ri.ingredient_id')
    .select('recipes.recipe', 'ingredients.ingredient', 'ri.quantity')
    .orderBy('ingredients.id')
    .where({ 'recipe_id': recipe_id });
}

// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
  return db('steps')
    .join('recipes', 'recipes.id', 'steps.recipe_id')
    .select('recipes.recipe', 'steps.step', 'steps.instructions')
    .orderBy('steps.step')
    .where({ 'recipe_id': recipe_id });
}

//#endregion

//#region - UPDATE

//update

//#endregion

//#region - DELETE

// remove

//#endregion