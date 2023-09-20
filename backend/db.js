const mongoose = require('mongoose');
const mongoURI='mongodb+srv://ujjwaljindal1234:mern123@cluster0.qyn7wyd.mongodb.net/gofoodmern?retryWrites=true&w=majority'


const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log("Connected to Mongo Successfully!");
      
      const fetched_data=await mongoose.connection.collection('food_items'); 
      const data = await fetched_data.find({}).toArray();
      const foodCategory=await mongoose.connection.collection('foodCategory');
      const catData = await foodCategory.find({}).toArray(); 
      global.food_items = data;
      global.foodCategory = catData;

    } catch (error) {
      console.log(error);
    }
  };


module.exports=mongoDB;
