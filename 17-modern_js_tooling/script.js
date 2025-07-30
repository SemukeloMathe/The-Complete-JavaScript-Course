// importing module
import "./shoppingCart.js";
// import { addToCart, totalPrice, totalQuantity } from "./shoppingCart.js";

console.log("Importing Module");
// addToCart("bread", 5);
// console.log(totalPrice, totalQuantity);
// import add, { cart } from "./shoppingCart.js";
// add("pizza", 2);
// add("bread", 5);
// add("apples", 6);
// add("eggs", 2);
// console.log(cart);

// console.log("Start fetching...")
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

const getLastPost = async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data.at(-1))
    return {title: data.at(-1).title, text: data.at(-1).body}
};

const lastPost = await getLastPost();
console.log(lastPost);