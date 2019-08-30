
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([   
    { recipe: '3-2-1 Microwave Mug Cake' },
    { recipe: '3-Step Mini Cheesecakes' }
  ]);
};
