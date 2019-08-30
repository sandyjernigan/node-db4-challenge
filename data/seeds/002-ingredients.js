
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([   
    { ingredient: 'angel food cake mix' },
    { ingredient: 'any flavor cake mix' },
    { ingredient: 'water' },
    { ingredient: 'frosting' },
    { ingredient: 'Cream Cheese' },
    { ingredient: 'Sugar' },
    { ingredient: 'Vanilla Extract' },
    { ingredient: 'Eggs' },
    { ingredient: 'Mini Graham Cracker Crusts' },
    { ingredient: 'Fruit' }
  ]);
};
