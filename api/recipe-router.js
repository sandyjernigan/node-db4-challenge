const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

//#region - CREATE
router.post('/', async (req, res) => {});

//#endregion

//#region - READ
// Get All
router.get('/', async (req, res) => {});

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