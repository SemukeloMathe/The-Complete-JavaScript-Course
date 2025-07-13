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

const getJSON = function (url, errMsg = "Something went wrong") {
    return fetch(url).then((res) => {
        if (!res.ok) throw new Error(`(${res.status}) ${errMsg}`);

        return res.json();
    });
};

const getCountryData = function (country) {
    // Country 1
    getJSON(
        `https://restcountries.com/v3.1/name/${country}`,
        "Country not found"
    )
        .then((data) => {
            console.log(data[0]);
            renderCountry(data[0]);
            const neighbour = data[0]?.borders ? data[0].borders[0] : undefined;

            if (!neighbour) throw new Error("Country has no neighbour");
            // Country 2
            return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`);
        })
        .then((data) => renderCountry(data[0], "neighbour"))
        .catch((err) => {
            console.error(err);
            renderError(`Something went wrong ${err}. Try again!`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener("click", function () {
    getCountryData("portugal");
});

getCountryData("australia");
