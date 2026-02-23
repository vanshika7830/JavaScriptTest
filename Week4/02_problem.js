const express = require("express");
const app = express();

app.use(express.json());

let products = [
  { id: 1, name: "Mobile", price: 20000 },
  { id: 2, name: "Tablet", price: 15000 }
];

function logger(req, res, next) {
  console.log("Middleware called");
  console.log(`Api Info : ${req.method} ${req.url}`);
  next(); 
}

app.use(logger);

function validateProduct(req, res, next) {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: "Name and price are required"
    });
  }

  next(); 
}

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", validateProduct, (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});


app.listen(3010, () => {
  console.log("Server running on port 3010");
});