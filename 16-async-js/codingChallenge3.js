/**
 * PART 1
 * Write an async function 'loadNPause' that recreates Coding Challenge #2,
 * this time using async/await (only the part where the promise is consumed).
 * Compare the two versions, think about the big differences, and see which
 * one you like more.
 * Don't forget to test the error handler, and to set the network speed to
 * 'Fast 3G' in the dev tools Network tab.
 *
 * PART 2
 * 1. Create an async function 'loadAll' that receives an array of image paths
 * 'imgArr';
 * 2. Use .map to loop over the array, to load all the images with the
 * 'createImage' function (call the resulting array 'imgs')
 * 3. Check out the 'imgs' array in the console! Is it like you expected?
 * 4. Use a promise combinator function to actually get the images from the
 * array 😉
 * 5. Add the 'paralell' class to all the images (it has some CSS styles).
 *
 * TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test,
 * turn off the 'loadNPause' function.
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

const loadNPause = async function () {
    try {
        // load image 1
        let img = await createImage("./img/img-1.jpg");
        console.log("Image 1 loaded.");
        await wait(2);
        img.style.display = "none";
        // load image 2
        img = await createImage("./img/img-2.jpg");
        console.log("Image 2 loaded.");
        await wait(2);
        img.style.display = "none";
        // load image 3
        img = await createImage("./img/img-3.jpg");
        console.log("Image 3 loaded.");
        await wait(2);
        img.style.display = "none";
    } catch (err) {
        console.log(err);
    }
};

loadNPause();