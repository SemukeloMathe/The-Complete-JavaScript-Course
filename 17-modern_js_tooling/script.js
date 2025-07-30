// importing module
import "./shoppingCart.js";
import { addToCart, totalPrice, totalQuantity } from "./shoppingCart.js";

console.log("Importing Module");
// addToCart("bread", 5);
// console.log(totalPrice, totalQuantity);
import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
add("bread", 5);
add("apples", 6);
add("eggs", 2);

console.log(cart);
