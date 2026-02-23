const express = require("express");
const app = express();
app.use(express.json());

let users = [];


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


function validateUser(req, res, next) {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ message: "Name and age required" });
  }
  next();
}

app.post("/users", validateUser, (req, res) => {
  users.push(req.body);
  res.json({ message: "User added", users });
});

app.listen(3000, () => console.log("Server running"));