const mongoose = require('mongoose');
// schema
const Schema = mongoose.Schema;
const recipeSchema = new Schema({
    Name : {
        type : String,
        unique : true
    },
    Cuisine : {
        type : String
    },
    Mealtime : {
        type : String
    },
    Ingredients : {
        type : String
    },
    Method : {
        type : String
    }
});  
//model 
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;