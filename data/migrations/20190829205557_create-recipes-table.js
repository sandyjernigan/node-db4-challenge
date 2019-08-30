//#region - Design the data model for a recipe book application
  // manage recipes
  // manage ingredients

  // a recipe could have more than one ingredient and 
  // the same ingredient can be used in multiple recipes. 
  // Examples are "cup of corn flour" or "gram of butter"

  // when saving the ingredients for a recipe capture the quantity 
  // required for that ingredient as a floating number.

  // have a way to save step by step instructions for preparing a recipe.
//#endregion

exports.up = function(knex) {
  return knex.schema
  // recipes table - id, recipe
  .createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('recipe', 128).notNullable();
  })

  // ingredients table - id, ingredient
  // recipe_ingredients -- recipe_id, ingredient_id, quantity, measurement
  // steps table - id, recipe_id, step, instructions
};

exports.down = function(knex) {
  
};
