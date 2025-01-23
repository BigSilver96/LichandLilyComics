document.addEventListener("DOMContentLoaded", function() {
    // Function to scroll left
    function scrollLeft(galleryId) {
        const gallery = document.getElementById(galleryId);
        const images = gallery.getElementsByClassName('comic-image');
        let activeImageIndex = Array.from(images).findIndex(image => image.classList.contains('active'));

        // Remove active class from current image
        images[activeImageIndex].classList.remove('active');

        // Calculate the next image index, loop to the end if at the first
        activeImageIndex = (activeImageIndex - 1 + images.length) % images.length;

        // Show the next image
        images[activeImageIndex].classList.add('active');
    }

    // Function to scroll right
    function scrollRight(galleryId) {
        const gallery = document.getElementById(galleryId);
        const images = gallery.getElementsByClassName('comic-image');
        let activeImageIndex = Array.from(images).findIndex(image => image.classList.contains('active'));

        // Remove active class from current image
        images[activeImageIndex].classList.remove('active');

        // Calculate the next image index, loop to the start if at the last
        activeImageIndex = (activeImageIndex + 1) % images.length;

        // Show the next image
        images[activeImageIndex].classList.add('active');
    }

    // Initialize first image as active for each gallery
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach(gallery => {
        const firstImage = gallery.querySelector('.comic-image');
        if (firstImage) {
            firstImage.classList.add('active');
        }
    });

    // Attach scrollLeft and scrollRight functions to buttons
    const leftButtons = document.querySelectorAll('.scroll-left');
    const rightButtons = document.querySelectorAll('.scroll-right');

    leftButtons.forEach(button => {
        button.addEventListener('click', function() {
            const galleryId = button.nextElementSibling.id; // Find the corresponding gallery id
            scrollLeft(galleryId);
        });
    });

    rightButtons.forEach(button => {
        button.addEventListener('click', function() {
            const galleryId = button.previousElementSibling.id; // Find the corresponding gallery id
            scrollRight(galleryId);
        });
    });
});
