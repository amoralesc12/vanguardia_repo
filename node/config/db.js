require ("dotenv").config();
const mongoose = require("mongoose");

const connectMongoDB = async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://ale_mongodb:${process.env.MONGO_PASSWORD}@cluster0.7bhmkcp.mongodb.net/`,
        {
          useCreateIndex: true,
          useUnifiedTopology: true,
        }
      );
  
      console.log("MongoDB conexion exitosa...");
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectMongoDB;