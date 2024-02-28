const { default: mongoose } = require("mongoose");


const restaurantModel= new mongoose.Schema({
    name:String
});

export const  restaurantSchema= mongoose.models.restaurants
|| mongoose.model("restaurants",restaurantModel);