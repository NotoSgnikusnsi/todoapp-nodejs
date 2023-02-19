const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true, // 必須条件
    trim: true // 空白削除 
  }
});
let Task = mongoose.model("Task", taskSchema);

module.exports = Task;
