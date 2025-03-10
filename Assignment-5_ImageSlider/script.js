// Image array
const images = [
    "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/834949/pexels-photo-834949.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
    "https://images.pexels.com/photos/30888208/pexels-photo-30888208/free-photo-of-cozy-morning-with-latte-art-and-newspaper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6153741/pexels-photo-6153741.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://media.istockphoto.com/id/1416029563/photo/metaverse-digital-cyber-world-technology-man-with-virtual-reality-vr-goggle-playing-ar.jpg?s=1024x1024&w=is&k=20&c=XSekAqZRuJ-LczBA37tn0CauWhXHQgWq6cHEeIJ4pmE="
];

let currentIndex = 0; // Track the current image index

// Select elements
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update image
function updateImage() {
    sliderImage.src = images[currentIndex];
    sliderImage.width = 600; // Force width
    sliderImage.height = 400; // Force height

    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display = currentIndex === images.length - 1 ? "none" : "block";
}

// Event listeners
nextBtn.addEventListener("click", function () {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
});

prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
});

// Initialize slider with first image
updateImage();
