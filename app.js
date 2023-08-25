console.log("hello world!");


const loginForm = document.getElementById('loginForm');


loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


    if (username === 'Pavithraa' && password === 'pavi@11') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

//toggle
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
    if (toggleButton.textContent === "Click Me") {
        toggleButton.textContent = "Clicked!";
    } else {
        toggleButton.textContent = "Click Me";
    }
});

//mouse
function updateCoordinatesDisplay(x, y) {
    const xCoordinate = document.getElementById("x-coordinate");
    const yCoordinate = document.getElementById("y-coordinate");

    xCoordinate.textContent = `X: ${x}`;
    yCoordinate.textContent = `Y: ${y}`;
}


document.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;
    updateCoordinatesDisplay(x, y);
});

//click count

const clickButton = document.getElementById("clickButton");
const clickCount = document.getElementById("clickCount");

let count = 0;
function updateClickCount() {
    count++;
    clickCount.textContent = `Click Count: ${count}`;
}
clickButton.addEventListener("click", updateClickCount);

// keyboard focus

const textInput = document.getElementById("textInput");
const output = document.getElementById("output");


textInput.addEventListener("input", function () {
    const enteredText = textInput.value;
    output.textContent = enteredText;
});

// image

const imageUrls = [
    'image1.jpg',
    'image2.jpg',
];
function loadImageAsync(url) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;
        image.onload = () => resolve(image);
        image.onerror = (error) => reject(error);
    });
}
async function loadAndDisplayImages() {
    const imageGallery = document.querySelector('.image-gal');

    for (const imageUrl of imageUrls) {
        try {

            const image = await loadImageAsync(imageUrl);


            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = 'Gallery Image';
            imgElement.classList.add('gallery-image');


            imageGallery.appendChild(imgElement);
        } catch (error) {
            console.error(`Error loading image: ${imageUrl}`, error);
        }
    }
}

window.onload = loadAndDisplayImages;

