// exporting module
console.log("Exporting Module");

// blocking code
// console.log("Start fetching users")
// await fetch("https://jsonplaceholder.typicode.com/users");
// console.log("Finish fetching users")

// named exports
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

// default exports
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
