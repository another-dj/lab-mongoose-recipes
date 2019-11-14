const mongoose = require("mongoose");

// Import Model (recipe);
const Recipe = require("./models/Recipe");

// Import data
const data = require("./data");

const MONGODB_URI = "mongodb://localhost/recipeApp";

// Connection to the database "recipeApp"
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// Creating a recipe

// Recipe.create({
//   title: "Something Nice",
//   cuisine: "My cuisine"
// })
//   .then(document => {
//     console.log("I created my recipe --->", document);
//   })
//   .catch(error => {
//     console.log("There was an error --->", error);
//   });

// Recipe.insertMany(data)
//   .then(recipesInserted => {
//     console.log("Here are the recipes inserted", recipesInserted);
//   })
//   .catch(error => {
//     console.log("There was an error --->", error);
//   });

Recipe.updateOne({ title: "Rigatoni alla Genovese" }, { duration: 100 })
  .then(result => {
    console.log(result, "updated successfully");
  })
  .catch(error => {
    console.log("Error updating");
  });
  
  Recipe.deleteOne({title: "Carrot Cake"})
  .then(result => {
    console.log(result, "deleted successfully");
  })
  .catch(error => {
    console.log("Error deleting");
  })
  .finally(()=> {
    mongoose.connection.close()
  });

  