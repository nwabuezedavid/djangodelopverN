let startY;
let endY;

document.addEventListener('touchstart', function(e) {
    // Get the starting Y coordinate
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
    // Get the ending Y coordinate
    endY = e.changedTouches[0].clientY;

    // Determine the direction of the swipe
    if (endY < startY) {
        // Swiped up
        console.log("Swiped up");
        // Add your swipe up logic here
    } else if (endY > startY) {
        // Swiped down
        console.log("Swiped down");
        // Add your swipe down logic here
    }
});
