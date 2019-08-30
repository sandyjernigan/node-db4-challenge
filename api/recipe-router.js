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

// Get by ID
router.get('/:id', async (req, res) => {});

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