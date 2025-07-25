/**
 * Build the image loading functionality that I just showed you on the screen.
 * Tasks are not super-descriptive this time, so that you can figure out some
 * stuff on your own. Pretend you're working on your own 😉
 *
 * PART 1
 * 1. Create a function 'createImage' which receives imgPath as an input. This
 * function returns a promise which creates a new image
 * (use document.createElement('img')) and sets the .src attribute to the
 * provided image path. When the image is done loading, append it to the DOM
 * element with the 'images' class, and resolve the promise. The fulfilled
 * value should be the image element itself. In case there is an error loading
 * the image ('error' event), reject the promise.
 * If this part is too tricky for you, just watch the first part of the solution.
 *
 * PART 2
 * 2. Comsume the promise using .then and also add an error handler;
 * 3. After the image has loaded, pause execution for 2 seconds using the wait
 * function we created earlier;
 * 4. After the 2 seconds have passed, hide the current image (set display to
 * 'none'), and load a second image (HINT: Use the image element returned by
 * the createImage promise to hide the current image. You will need a global
 * variable for that 😉);
 * 5. After the second image has loaded, pause execution for 2 seconds again;
 * 6. After the 2 seconds have passed, hide the current image.
 *
 * TEST DATA: Images in the img folder. Test the error handler by passing a
 * wrong image path. Set the network speed to 'Fast 3G' in the dev tools
 * Network tab, otherwise images load too fast.
 */

// grab elements.
const btn = document.querySelector(".btn-country");
const images = document.querySelector(".images");
let curImage;

// set default
btn.style.display = "none";

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

// task 1: create "createImage" function. has @param: imgPath
const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const imgEl = document.createElement("img");
        imgEl.src = imgPath;

        imgEl.addEventListener("load", function () {
            images.append(imgEl);
            resolve(imgEl);
        });

        imgEl.addEventListener("error", function () {
            reject(new Error("Image not found"));
        });
    });
};

createImage(`./img/img-1.jpg`)
    .then((img) => {
        curImage = img;
        return wait(2);
    })
    .then(() => {
        // images.removeChild(images.childNodes[0]);
        curImage.style.display = "none";
        return createImage(`./img/img-2.jpg`);
    })
    .then((img) => {
        curImage = img;
        return wait(2);
    })
    .then(() => {
        curImage.style.display = "none";
        return createImage(`./img/img-3.jpg`);
    })
    .then((img) => {
        // images.removeChild(images.childNodes[0]);
        curImage = img;
        return wait(2);
    })
    .then(() => curImage.style.display = "none")
    .catch((err) => console.error(err));
    
    // .then(() => wait(2))
    // .then(() => images.removeChild(images.childNodes[0]))