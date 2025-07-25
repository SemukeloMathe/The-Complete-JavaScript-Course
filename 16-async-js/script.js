"use strict";

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://countries-api-836d.onrender.com/countries/

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////////////////
const renderError = function (message) {
    countriesContainer.insertAdjacentText("beforeend", message);
};

const renderCountry = function (data = {}, className = "") {
    const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${JSON.stringify(
                data.languages
            )}</p>
            <p class="country__row"><span>💰</span>${
                JSON.stringify(data.currencies)
            }</p>
          </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
};

/////////////////////////////////////
// old way of performing ajax calls

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${JSON.stringify(
//               data.languages
//             )}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies.EUR.name
//             }</p>
//           </div>
//         </article>
//     `;

//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData("portugal");
// getCountryData("france");
// getCountryData("germany");
// getCountryData("")

// const getCountryDataAndNeighbour = function (country) {
// //   Ajax call country 1
//     const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//       console.log(data);
//     //   render country
//       renderCountry(data);
//       //   get neighbour country 2
//       const [neighbour] = data.borders;

//       if (!neighbour) return;

//       //   Ajax call country 2
//       const request2 = new XMLHttpRequest();
//       request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//       request2.send();
//       request2.addEventListener("load", function () {
//         //   console.log(this.responseText);
//           const [data2] = JSON.parse(this.responseText);
//           console.log(data2);

//           renderCountry(data2, "neighbour");
//       });
//   });
// };

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then((res) => {
//             console.log(res);
//             if (!res.ok) throw new Error(`(${res.status}) Country not found`);
//             return res.json();
//         })
//         .then((data) => {
//             renderCountry(data[0]);
//             const neighbour = "helloworld";

//             if (!neighbour) return;
//             // Country 2
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//         })
//         .then((res) => {
//             if (!res.ok) throw new Error(`(${res.status}) Country not found`);
//             return res.json();
//         })
//         .then((data) => renderCountry(data[0], "neighbour"))
//         .catch((err) => {
//             console.error(`${err} 💣💣💣`);
//             renderError(`Something went wrong 🔥🔥 ${err.message}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };

// getCountryDataAndNeighbour("portugal");
// getCountryDataAndNeighbour("usa");

// Promises

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);

// const getJSON = function (url, errMsg = "Something went wrong") {
//     return fetch(url).then((res) => {
//         if (!res.ok) throw new Error(`(${res.status}) ${errMsg}`);

//         return res.json();
//     });
// };

// const getCountryData = function (country) {
//     // Country 1
//     getJSON(
//         `https://restcountries.com/v3.1/name/${country}`,
//         "Country not found"
//     )
//         .then((data) => {
//             console.log(data[0]);
//             renderCountry(data[0]);
//             const neighbour = data[0]?.borders ? data[0].borders[0] : undefined;

//             if (!neighbour) throw new Error("Country has no neighbour");
//             // Country 2
//             return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//         })
//         .then((data) => renderCountry(data[0], "neighbour"))
//         .catch((err) => {
//             console.error(err);
//             renderError(`Something went wrong ${err}. Try again!`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         });
// };

// btn.addEventListener("click", function () {
//     getCountryData("portugal");
// });

// getCountryData("australia");

// event loop
// console.log("Test start");
// setTimeout(() => console.log("0 sec timeer"), 0);
// Promise.resolve("Resolved promise 1").then(res => console.log(res));
// Promise.resolve("Resolved promise 2").then(res => {
//     for (let i = 0; i < 100000000; i++) { i; };
//     console.log(res);
// });
// console.log("Test end");

// building a simple promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log("Lottery draw is happening.");
//     setTimeout(function () {
//       if (Math.random() >= 0.5) {
//         resolve("You Win 💰");
//       } else {
//         reject(new Error("You Lost 🥲"));
//       }
//     }, 2000);
// });

// lotteryPromise.then((res) => console.log(res))
//     .catch((err) => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log("I waited for 2 seconds");
//     return wait(1);
//   })
//   .then(() => console.log("I waited for one second"));

// // easy way to create a fulfilled promise
// Promise.resolve("abc").then(x => console.log(x));
// Promise.reject(new Error("abc")).then(x => console.error(x));

// Promisifying the geolocation api
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// )

// console.log("Getting position");

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   });
// }

// getPosition()
//   .then((pos) => console.log(pos))
//   .catch((err) => console.log(err));

// function whereAmI() {

//   getPosition().then(pos => {
//     // console.log(pos.coords);
//     const { latitude: lat, longitude: lng } = pos.coords;
//     const url = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${API_KEY}`;
//     return fetch(url);
//   })
//     .then((res) => {
//       if (!res.ok) throw new Error(`(${res.status}) - Unauthorized request.`);
//       return res.json();
//     })
//     .then((data) => {
//       const { city, country } = data;
//       console.log(`You are in ${city}, ${country}`);
//       return country;
//     })
//     .then((country) => {
//       const url = `https://restcountries.com/v3.1/name/${country}`;
//       return fetch(url);
//     })
//     .then((res) => res.json())
//     .then((data) => {
//       const [country] = data;
//       renderCountry(country);
//     })

//     .catch((err) => {
//       countriesContainer.insertAdjacentText("beforeend", err.message);
//       countriesContainer.style.opacity = 1;
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// }

// btn.addEventListener("click", whereAmI);

// handling promises with async await
// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };

// const whereAmI = async function () {
//     try {
//         // geolocation
//         const pos = await getPosition();
//         const { latitude: lat, longitude: lng } = pos.coords;

//         // reverse geocoding
//         const resGeo = await fetch(
//             `https://geocode.xyz/${lat},${lng}?geoit=json`
//         );
//         if (!resGeo.ok) throw new Error("Problem getting location");
//         const dataGeo = await resGeo.json();

//         // country data
//         const res = await fetch(
//             `https://restcountries.eu/rest/v2/name${dataGeo.country}`
//         );
//         if (!res.ok) throw new Error("Problem getting country");
//         const data = await res.json();

//         renderCountry(data[0]);

//         return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//     } catch (err) {
//         renderError(`Something went wrong ${err.message}`);

//         // reject promise returned from async function.
//         throw err;
//     }
// };

// console.log("1: Will get location");
// const city = whereAmI();
// console.log(city);

// whereAmI()
//     .then((city) => console.log(`2: ${city}`))
//     .catch((err) => console.error(`2: ${err.message}`))
//     .finally(() => console.log("3: Finished getting location"));

// (async function () {
//     try {
//         const city = await whereAmI();
//         console.log(`2: ${city}`);
//     } catch (error) {
//         console.error(`2: ${error.message} 🔥`);
//     } finally {
//         console.log(`3: Finished getting location.`);
//     }
// })();

const getJSON = function (url, errMsg = "Something went wrong") {
    return fetch(url).then((res) => {
        if (!res.ok) throw new Error(`(${res.status}) ${errMsg}`);

        return res.json();
    });
};

// const get3Countries = async function (c1, c2, c3) {
//     try {
//         // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//         // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//         // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

//         const data = await Promise.all([
//             getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//             getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//         ]);

//         console.log(data.map(d => d[0].capital).flat());

//     } catch (error) {
//         console.error(error);
//     }
// }

// get3Countries("portugal", "canada", "tanzania");

// Promise.race
// (async function () {
//     const res = await Promise.race([
//         getJSON(`https://restcountries.com/v3.1/name/italy`),
//         getJSON(`https://restcountries.com/v3.1/name/egypt`),
//         getJSON(`https://restcountries.com/v3.1/name/mexico`),
//     ]);
//     console.log(res);
// })();
 
// const timeout = function(sec) {
//     return new Promise(function (_, reject) {
//         setTimeout(function () {
//             reject(new Error("Request took too long!"))
//         }, sec * 1000)
//     });
// }

// Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/tanzania`),
//     timeout(0.01)
// ]).then(res => console.log(res[0]))
//     .catch(err => console.error(err));

// Promise.allSettled
// Promise.allSettled([
//     Promise.resolve("Success"),
//     Promise.reject("Error"),
//     Promise.resolve("Another success"),
// ]).then(res => console.log(res));

// Promise.all([
//     Promise.resolve("Success"),
//     Promise.reject("Error"),
//     Promise.resolve("Another success"),
// ]).then(res => console.log(res)).catch(err => console.error(err));

// promise.any [ES2021]
Promise.any([
    Promise.resolve("Success"),
    Promise.reject("Error"),
    Promise.resolve("Another success"),
])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
