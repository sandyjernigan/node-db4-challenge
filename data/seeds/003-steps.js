
exports.seed = function(knex, Promise) {
  return knex('steps').insert([   
    { step: 1, instructions: 'Pour both dry cake mixes into a gallon-size Ziploc bag.', recipe_id: 1 },
    { step: 2, instructions: 'Zip it up tight and begin to shake it well to make sure cake mixes are combined thoroughly.', recipe_id: 1 },
    { step: 3, instructions: 'In a clean mug (you do not need to grease the mug), combine 3 tbsp. of the combined cake mixes with 2 tbsp. of water.', recipe_id: 1 },
    { step: 4, instructions: 'Stir well until completely combined. Batter will get foamy as you stir.', recipe_id: 1 },
    { step: 5, instructions: 'Then pop it into the microwave. Cook on high for 1 minute.', recipe_id: 1 },
    { step: 6, instructions: 'When it\'s finished, carefully take it out of the microwave (mug will be very warm). Dab a little frosting on top (optional) and dig into the warm cake', recipe_id: 1 },
    { step: 1, instructions: 'Preheat oven to 350 degrees and line the mini pie crusts up onto a baking sheet. Set aside.', recipe_id: 2 },
    { step: 2, instructions: 'To a large mixing bowl, add cream cheese, sugar, and vanilla. Mix on medium speed until well blended.', recipe_id: 2 },
    { step: 3, instructions: 'Add eggs and mix until smooth.', recipe_id: 2 },
    { step: 4, instructions: 'Evenly pour the batter into each crust.', recipe_id: 2 },
    { step: 5, instructions: 'Bake  for 20 minutes or until centers are almost set. ', recipe_id: 2 },
    { step: 6, instructions: 'Once cooled, transfer to the fridge and let chill at least 3 hours (up to overnight). ', recipe_id: 2 },
    { step: 7, instructions: 'Garnish when ready to serve. ', recipe_id: 2 },
  ]);
};
