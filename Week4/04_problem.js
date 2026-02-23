const express = require("express");
const app = express();

let currentUser = null;

app.get("/login/:role", (req, res) => {
  const role = req.params.role;

  if (role !== "admin" && role !== "client") {
    return res.status(400).json({ message: "Invalid role" });
  }

  currentUser = role;
  res.json({ message: `${role} LoggedIn` });
});


function checkAuth(req, res, next) {
  if (!currentUser) {
    return res.status(401).json({ message: "Please login first" });
  }
  next();
}


app.get("/dashboard", checkAuth, (req, res) => {
  if (currentUser === "admin") {
    res.json({ message: "Welcome Admin" });
  } else {
    res.json({ message: "Welcome Client" });
  }
});

app.get("/logout", (req, res) => {
  currentUser = null;
  res.json({ message: "Logged out" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));