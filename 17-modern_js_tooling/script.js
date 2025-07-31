// importing module
import "./shoppingCart.js";
// import { addToCart, totalPrice, totalQuantity } from "./shoppingCart.js";

if (module.hot) {
    module.hot.accept();
}

console.log("Importing Module");
// addToCart("bread", 5);
// console.log(totalPrice, totalQuantity);

// import add, { cart } from "./shoppingCart.js";
// add("pizza", 2);
// add("bread", 5);
// add("apples", 6);
// add("eggs", 2);
// console.log(cart);

// using await in top level
// console.log("Start fetching...")
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log(data.at(-1))
//     return {title: data.at(-1).title, text: data.at(-1).body}
// };

// const lastPost = await getLastPost();
// console.log(lastPost);

// the module pattern
// const ShoppingCart = (function () {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23
//     const addToCart = function (product, quantity) {
//       cart.push({ product, quantity });
//       console.log(`${quantity} ${product} added to cart`);
//     };

//     const orderStock = function (product, quantity) {
//       cart.push({ product, quantity });
//       console.log(`${quantity} ${product} ordered from supplier`);
//     };

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity
//     }
// })();

// ShoppingCart.addToCart("apple", 4)
// ShoppingCart.addToCart("pizza", 2)
// console.log(ShoppingCart);

// import
// const addTo Cart = require("./shoppingCart.js")

import add, { cart } from "./shoppingCart.js";

add("pizza", 2);
add("bread", 5);
add("apples", 6);
add("eggs", 2);
console.log(cart);

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
    cart: [
        { product: "bread", quantity: 5 },
        { product: "pizza", quantity: 2 },
    ],
    user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);
