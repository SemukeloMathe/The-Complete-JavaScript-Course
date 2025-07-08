"use strict";

// prettier ignore
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];

// Geolocation API
// takes in 2 callback functions. the first is the success callback and the
// second is the error callback for handling errors

class Workout {
    date = new Date();
    id = (Date.now() + "").slice(-10);

    constructor(coords, distance, duration) {
        this.coords = coords; // array of latitude & longitude
        this.distance = distance; // km
        this.duration = duration; // minutes
    }
}

class Running extends Workout {
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
    }
    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends Workout {
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
    }
    calcSpeed() {
        // km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycl1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1);
// console.log(cycl1);

////////////////////////////////////////////////////
////////////////////////////////////////////////////
// APPLICATION ARCHITECTURE
const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class App {
    #map;
    #mapEvent;
    #workouts = new Array();

    constructor() {
        // call the getPosition function.
        this._getPosition();
        form.addEventListener("submit", this._newWorkout.bind(this));
        inputType.addEventListener("change", this._toggleElevationField);
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
        this.#map.on("click", this._showForm.bind(this));
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove("hidden");
        inputDistance.focus();
    }

    _toggleElevationField(e) {
        inputElevation
            .closest(".form__row")
            .classList.toggle("form__row--hidden");
        inputCadence
            .closest(".form__row")
            .classList.toggle("form__row--hidden");
    }

    _newWorkout(e) {
        // helper function
        const validInputs = (...inputs) =>
            inputs.every((input) => Number.isFinite(input));

        const allPositiveNum = (...inputs) =>
            inputs.every((input) => input > 0);

        e.preventDefault();

        // get data from the form
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;

        // check if data is valid
        if (
            !validInputs(distance, duration) ||
            !allPositiveNum(distance, duration)
        ) {
            return alert("Inputs should be a positive number!");
        }

        // if activity is rnning, create running object
        if (type === "running") {
            const cadence = +inputCadence.value;
            // check if data is valid
            if (!validInputs(cadence) || !allPositiveNum(cadence))
                return alert("Cadence should be a positive number!");

            workout = new Running(
                new Array(lat, lng),
                distance,
                duration,
                cadence
            );
        }

        // if activity is cycling, create cycling object
        if (type === "cycling") {
            const elevation = +inputElevation.value;
            // check if data is valid
            if (!validInputs(elevation))
                return alert("Cadence should be an integer!");

            workout = new Cycling(
                new Array(lat, lng),
                distance,
                duration,
                elevation
            );
        }

        // add new object to workout array
        this.#workouts.push(workout);
        console.log(this.#workouts);

        // render workout on map as marker
        L.marker([lat, lng])
            .addTo(this.#map)
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

        // render workout on list

        // hide the form and clear input infields
        // clear inputfields.
        inputDistance.value = inputDuration.value = inputElevation.value = "";
    }
}
const app = new App();

