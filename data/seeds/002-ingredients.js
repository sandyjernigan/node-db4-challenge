
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([   
    { ingredient: 'angel food cake mix' }, // 1
    { ingredient: 'any flavor cake mix' }, // 2
    { ingredient: 'water' }, // 3
    { ingredient: 'frosting' }, // 4
    { ingredient: 'Cream Cheese' }, // 5
    { ingredient: 'Sugar' }, // 6
    { ingredient: 'Vanilla Extract' }, // 7
    { ingredient: 'Eggs' }, // 8
    { ingredient: 'Mini Graham Cracker Crusts' }, // 9
    { ingredient: 'Fruit' } // 10
  ]);
};
