import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/database-facherita", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.info("Database connection successful.");
  } catch (error) {
    throw new Error("Could not connect to the database.");
  }
};
