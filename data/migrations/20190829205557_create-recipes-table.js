  // manage recipes
  // manage ingredients

  // a recipe could have more than one ingredient and 
  // the same ingredient can be used in multiple recipes. 
  // Examples are "cup of corn flour" or "gram of butter"

  // when saving the ingredients for a recipe capture the quantity 
  // required for that ingredient as a floating number.

  // have a way to save step by step instructions for preparing a recipe.

exports.up = function(knex) {
  // recipes table - id, recipe
  // ingredients table - id, ingredient
  // recipe_ingredients -- recipe_id, ingredient_id, quantity, measurement
  // steps table - id, recipe_id, step, instructions
};

exports.down = function(knex) {
  
};
