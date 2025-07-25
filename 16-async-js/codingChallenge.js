"use strict";

/**
 * In this challenge you will build a function 'whereAmI' which renders a
 * country ONLY based on GPS coordinates. For that, you will use a second API
 * to geocode coordinates.
 * Here are your tasks:
 *
 * PART 1:
 * 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat)
 * and a longitude value (lng) (these are GPS coordinates, examples are below).
 * 
 * 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding
 * means to convert coordinates to a meaningful location, like a city and
 * country name. Use this API to do reverse geocoding:
 * https://geocode.xyz/api.
 * The AJAX call will be done to a URL with this format:
 * https:geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises 
 * to get the data. Don't use the getJSON function we created, that is cheating
 * 
 * 3. Once you have the data, take a look at it in the console to see all the
 * attributes that you received about the provided location. Then, using this
 * data, log a messsage like this to the console: 'You are in Berlin, Germany'
 * 
 * 4. Chain a .catch method to the end of the promise chain and log errors to
 * the console
 * 
 * 5. This API allows you to make only 3 requests per second. If you reload
 * fast, you will get this error with code 403. This is an error with the
 * request. Remember, fetch() does NOT reject the promise in this case. So
 * create an error to reject the promise yourself, with a meaningful error
 * message.
 *
 * PART 2:
 * 6. Now it's time to use the received data to render a country. So take the
 * relevant attribute from the geocoding API result, and plug it into the
 * countries API that we have been using.
 * 
 * 7. Render the country and catch any errors, just like we have done in the
 * last lecture (you can even copy this code, no need to type the same code)
 *
 * TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
 * TEST COORDINATES 2: 19.037, 72.873
 * TEST COORDINATES 3: -33.933, 18.474
 */

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const API_KEY = "";

// task 1
function whereAmI(lat, lng) {
    // task 2
    const url = `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${API_KEY}`;
    fetch(url)
        .then((res) => {
            // task 5: handle 403 status
            // console.log(res);
            if (!res.ok)
                throw new Error(`(${res.status}) - Unauthorized request.`);
            return res.json();
        })
        .then((data) => {
            const { city, country } = data;
            // Task 3: Log to the console.
            console.log(`You are in ${city}, ${country}`);
            return country;
        })
        .then((country) => {
            // task 6: Use the countries api
            const url = `https://restcountries.com/v3.1/name/${country}`;
            return fetch(url);
        })
        .then((res) => res.json())
        .then((data) => {
            //task 7: render the country
            const [country] = data;
            renderCountry(country);
            // console.log(country);
        })
        // task 4: handle errors
        .catch((err) => {
            countriesContainer.insertAdjacentText("beforeend", err.message);
            countriesContainer.style.opacity = 1;
        })
        .finally(() => (countriesContainer.style.opacity = 1));
}

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
            <p class="country__row"><span>💰</span>${JSON.stringify(
              data.currencies
            )}</p>
          </div>
        </article>
    `;
    
    countriesContainer.insertAdjacentHTML("beforeend", html);
};

// Test Data 1:
whereAmI(52.508, 13.381);
// Test Data 2:
whereAmI(19.037, 72.873);
// Test Data 3:
whereAmI(-33.933, 18.474);
