const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true, // 必須条件
    trim: true, // 空白削除 
    min: 1,
    max: 50
  },
  check: {
    type: Boolean,
    require: true
  }
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    min: 1,
    max: 32,
    trim: true
  },
  password: {
    type: String,
    require: true,
    min: 6,
    max: 100,
    trim: true
  }
})

let Task = mongoose.model("Task", taskSchema);
let User = mongoose.model("User", userSchema);

module.exports = User;
module.exports = Task;
