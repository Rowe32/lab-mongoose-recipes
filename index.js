const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((x) => {
    // console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made

    // Iteration 2

    // const chickenDish = Recipe.create(data[0]);
    // chickenDish.then((value)=> {
    //   return value;
    // });

    // Iteration 3
    // const allRecipes = Recipe.insertMany(data);
    // allRecipes.then((value) => {
    //   for (let i = 0; i < value.length; i++) {
    //     console.log(value[i].title);
    //   }
    // });

    // Itaretion 4

    return Recipe.insertMany(data);

  })
  .then(() => {
    return Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese" }, {duration: 100}, () => {
      console.log("Recipe was updated!");
//Error connecting to the database MongooseError: Query was already executed: Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' },...

    });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
