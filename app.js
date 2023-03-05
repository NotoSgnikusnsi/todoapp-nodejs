const express = require("express");
const app = express();

// データベースと接続
const connectDB = require("./utils/database")
// connectDB();

app.get("/", (req, res) => {
  res.send("root page");
})

app.use("/todo/task", require("./routes/todos"))
app.use("/todo/account", require("./routes/accounts"))

const port = 3000;
const host = "127.0.0.1";
app.listen(port, () => {
  console.log(`Listening on ${host} port ${port}`)
})
