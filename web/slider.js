let currentIndex = 0;
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

// Function to clone images
function cloneImages() {
    const imageArray = Array.from(images);
    imageArray.forEach((img) => {
        const clonedImage = img.cloneNode(true);
        slider.appendChild(clonedImage); // Append clone at the end
    });
}

// Function to shift images
function shiftImages() {
    currentIndex = (currentIndex + 1) % totalImages;

    // Apply the transformation to shift images in a circular manner
    slider.style.transform = `translateX(-${currentIndex * (287 + 20)}px)`; // 287px is the width of the images + 20px margin

    // If we reach the last image, reset the position
    if (currentIndex === totalImages) {
        setTimeout(() => {
            slider.style.transition = 'none'; // Disable transition
            slider.style.transform = 'translateX(0)'; // Jump back to the start
            currentIndex = 0;

            // Enable transition again after reset
            setTimeout(() => {
                slider.style.transition = 'transform 1s ease-in-out';
            }, 50);
        }, 1000); // Wait for the transition to finish before resetting
    }
}

// Start by cloning the images to repeat them
cloneImages();

// Start the image shift every 2 seconds
setInterval(shiftImages, 2000);
