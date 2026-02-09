const shoppingCart = [
  { itemName: "Wireless Mouse", itemPrice: 25 },
  { itemName: "Gaming Monitor", itemPrice: 300 },
  { itemName: "USB-C Cable", itemPrice: 15 },
  { itemName: "Mechanical Keyboard", itemPrice: 120 },
  { itemName: "Webcam", itemPrice: 85 }
];

function sortCartByPrice() {
    const sortedCart = [...shoppingCart].sort((a, b) => {
        return a.itemPrice - b.itemPrice;
    });

    return sortedCart;
}

const output = sortCartByPrice();
console.log(output);