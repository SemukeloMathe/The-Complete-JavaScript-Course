"use strict";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

// global var
// let map;
// let mapEvent;
// Geolocation API
// takes in 2 callback functions. the first is the success callback and the
// second is the error callback for handling errors

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // clear inputfields.
    inputDistance.value = inputDuration.value = inputElevation.value = "";
    // display the marker
    console.log(mapEvent);
    const { lat, lng } = mapEvent.latlng;
    console.log(lat, lng);

    L.marker([lat, lng])
        .addTo(map)
        .bindPopup(
            L.popup({
                // pop up options
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: "running-popup",
            })
        )
        .setPopupContent("Workout")
        .openPopup();
});


inputType.addEventListener("change", function (e) {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
});

class App {
    #map;
    #mapEvent;

    constructor() {
        // call the getPosition function.
        this._getPosition();
    }

    _getPosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                this._loadMap.bind(this),
                function () {
                    alert("Could not get your position.");
                }
            );
        }
    }

    _loadMap(position) {
        const { latitude, longitude } = position.coords;
        const coords = new Array(latitude, longitude);

        this.#map = L.map("map").setView(coords, 13);

        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.#map);

        // get markers from the map.
        this.#map.on("click", function (mapE) {
            this.#mapEvent = mapE;
            form.classList.remove("hidden");
            inputDistance.focus();
        });
    }

    _showForm() {}

    _toggleElevationField() {}

    _newWorkout() {}
}

const app = new App();
