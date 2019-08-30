const db = require('../data/db-config.js');

module.exports = {
  getRecipes
};

//#region - CREATE

// function add

//#endregion

//#region - READ

// getRecipes(): should return a list of all recipes in the database.
function getRecipes() {
  return db('recipes');
}

// findById

//#endregion

//#region - UPDATE

//update

//#endregion

//#region - DELETE

// remove

//#endregion