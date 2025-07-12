'use strict';

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://countries-api-836d.onrender.com/countries/

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

/////////////////////////////////////
// old way of performing ajax calls

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
        <article class="country">
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
              data.currencies.EUR.name
            }</p>
          </div>
        </article>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

// getCountryData("portugal");
// getCountryData("france");
// getCountryData("germany");
// getCountryData("")


const getCountryDataAndNeighbour = function (country) {
//   Ajax call country 1
    const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
      console.log(data);
    //   render country
      renderCountry(data);
      //   get neighbour country 2
      const [neighbour] = data.borders;

      if (!neighbour) return;

      //   Ajax call country 2
      const request2 = new XMLHttpRequest();
      request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
      request2.send();
      request2.addEventListener("load", function () {
        //   console.log(this.responseText);
          const [data2] = JSON.parse(this.responseText);
          console.log(data2);

          renderCountry(data2, "neighbour");
      });
  });
};

const renderCountry = function (data, className="") {
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
              "data.currencies.EUR.name"
            }</p>
          </div>
        </article>
    `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
}

// getCountryDataAndNeighbour("portugal");
getCountryDataAndNeighbour("usa");