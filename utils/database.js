const mongoose = require("mongoose");
const { unlock } = require("../routes/todos");

const connectDB = async() => {
  try {
    await mongoose.connect("mongodb+srv://todoApp:vJ5nkviNe7kIyTyp@cluster0.xd0tbim.mongodb.net/tasks?retryWrites=true&w=majority");
    console.log("Success: Connect to MongoDB");
  } catch (error) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
}

module.exports = connectDB;
