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
    tbl.string('recipe').notNullable().unique();
  })

  // ingredients table - id, ingredient
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('ingredient').notNullable().unique();
  })

  // steps table - id, step, instructions, recipe_id
  .createTable('steps', tbl => {
    tbl.increments();
    tbl.string('step').notNullable();
    tbl.text('instructions', longtext).notNullable();
    // foreign key setup using knex
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })

  // recipe_ingredients -- recipe_id, ingredient_id, quantity, measurement
  .createTable('recipe_ingredients', tbl => {
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl.primary(['recipe_id', 'ingredient_id']);
    tbl.integer('quantity').notNullable();
    tbl.string('measurement', 128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
