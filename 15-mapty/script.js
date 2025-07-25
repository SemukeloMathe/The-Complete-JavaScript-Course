"use strict";

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

    _setDescription() {
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
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(
            1
        )} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
    }
}

class Running extends Workout {
    type = "running";
    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }
    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

class Cycling extends Workout {
    type = "cycling";
    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
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
    #mapZoomLevel = 13;
    #workouts = new Array();

    constructor() {
        // call the getPosition function.
        this._getPosition();

        // get data from local storage
        this._getLocalStorage();

        // handlers
        form.addEventListener("submit", this._newWorkout.bind(this));
        inputType.addEventListener("change", this._toggleElevationField);
        containerWorkouts.addEventListener(
            "click",
            this._moveToPopup.bind(this)
        );
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

        //
        this.#workouts.forEach((workout) => {
            this._renderWorkoutMarker(workout);
        });
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove("hidden");
        inputDistance.focus();
    }

    _hideForm() {
        inputDistance.value =
            inputCadence.value =
            inputDuration.value =
            inputElevation.value =
                "";
        form.style.display = "none";
        form.classList.add("hidden");
        setTimeout(() => (form.style.display = "grid"), 1000);
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
        e.preventDefault();

        // helper function
        const validInputs = (...inputs) =>
            inputs.every((input) => Number.isFinite(input));

        const allPositiveNum = (...inputs) =>
            inputs.every((input) => input > 0);

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

        // render workout on map as marker
        this._renderWorkoutMarker(workout);

        // render workout on list
        this._renderWorkout(workout);

        // hide the form and clear input infields
        this._hideForm();

        // set local storage to all workouts.
        this._setLocalStorage();
    }

    // render workout marker
    _renderWorkoutMarker(workout) {
        L.marker(workout.coords)
            .addTo(this.#map)
            .bindPopup(
                L.popup({
                    // pop up options
                    maxWidth: 250,
                    minWidth: 100,
                    autoClose: false,
                    closeOnClick: false,
                    className: `${workout.type}-popup`,
                })
            )
            .setPopupContent(
                `${workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"} ${
                    workout.description
                }`
            )
            .openPopup();
    }

    _renderWorkout(workout) {
        let html = `
            <li class="workout workout--${workout.type}" data-id="${
            workout.id
        }">
                <h2 class="workout__title">${workout.description}</h2>
                <div class="workout__details">
                    <span class="workout__icon">${
                        workout.type === "running" ? "🏃‍♂️" : "🚴‍♀️"
                    }</span>
                    <span class="workout__value">${workout.distance}</span>
                    <span class="workout__unit">km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⏱</span>
                    <span class="workout__value">${workout.duration}</span>
                    <span class="workout__unit">min</span>
                </div>
        `;

        if (workout.type === "running") {
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.pace.toFixed(
                        1
                    )}</span>
                    <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value">${workout.cadence}</span>
                    <span class="workout__unit">spm</span>
                </div>
            </li>
            `;
        }

        if (workout.type === "cycling") {
            html += `
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">${workout.speed.toFixed(
                        2
                    )}</span>
                    <span class="workout__unit">km/h</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⛰</span>
                    <span class="workout__value">${workout.elevationGain}</span>
                    <span class="workout__unit">m</span>
                </div>
            </li>
            `;
        }

        form.insertAdjacentHTML("afterend", html);
    }

    _moveToPopup(e) {
        const workoutEl = e.target.closest(".workout");
        if (!workoutEl) return;

        const workout = this.#workouts.find(
            (workout) => workout.id === workoutEl.dataset.id
        );

        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate: true,
            pan: { duration: 2 },
        });
    }

    _setLocalStorage() {
        localStorage.setItem("workouts", JSON.stringify(this.#workouts));
    }

    _getLocalStorage() {
        const data = JSON.parse(localStorage.getItem("workouts"));
        if (!data) return;

        this.#workouts = data;

        this.#workouts.forEach((workout) => this._renderWorkout(workout));
    }

    reset() {
        localStorage.removeItem("workouts");
        location.reload();
    }
}

const app = new App();
