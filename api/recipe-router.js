const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

//#region - CREATE
router.post('/', async (req, res) => {});

//#endregion

//#region - READ
// GET /api/recipes/: all recipes (without details about ingredients or steps)
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipes.' });
  }
});

// GET /api/recipes/:id/shoppingList: a list of ingredients and quantites for a single recipe
router.get('/:id/shoppingList', async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipes.getShoppingList(id);

    if (recipe.length) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find the recipe shopping list' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipe shopping list' });
  }
});

// GET /api/recipes/:id/instructions: a correctly ordered list of how to prepare a single recipe
router.get('/:id/instructions', async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipes.getInstructions(id);

    if (recipe.length) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find the recipe instructions' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get recipe instructions' });
  }
});

//#endregion

//#region - UPDATE
router.put('/:id', async (req, res) => {});

//#endregion

//#region - DELETE
router.delete('/:id', async (req, res) => {});
//#endregion

//#region - Custom Middleware
//#endregion

module.exports = router;