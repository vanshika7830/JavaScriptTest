const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());


app.get("/visit", (req, res) => {
  let count = req.cookies.visitCount;

  if (!count) {
    count = 1;
  } else {
    count = parseInt(count) + 1;
  }

  res.cookie("visitCount", count);
  res.json({ message: `You have visited this page ${count} times` });
});


app.get("/reset", (req, res) => {
  res.clearCookie("visitCount");
  res.json({ message: "Visit count reset" });
});

app.listen(3000, () => console.log("Server running"));