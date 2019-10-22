
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 1, measurement: 'box', optional: false },
    { recipe_id: 1, ingredient_id: 2, quantity: 1, measurement: 'box', optional: false },
    { recipe_id: 1, ingredient_id: 3, quantity: 1, measurement: 'tablespoon', optional: false },
    { recipe_id: 1, ingredient_id: 4, quantity: 1, measurement: 'tub', optional: true },
    { recipe_id: 2, ingredient_id: 5, quantity: 16, measurement: 'ounces', optional: false },
    { recipe_id: 2, ingredient_id: 6, quantity: 0.5, measurement: 'cup', optional: false },
    { recipe_id: 2, ingredient_id: 7, quantity: 0.5, measurement: 'teaspoon', optional: false },
    { recipe_id: 2, ingredient_id: 8, quantity: 2, measurement: null, optional: false },
    { recipe_id: 2, ingredient_id: 9, quantity: 12, measurement: '4 oz ready-to-use single serve', optional: false },
    { recipe_id: 2, ingredient_id: 10, quantity: null, measurement: null, optional: false }
  ]);
};