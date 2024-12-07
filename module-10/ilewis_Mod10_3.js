// ilewis_Mod10_3.js

// Function changes image when mouse hovers
function changeImage(element, newSrc) {
    // Stores original image source
    if (!element.originalSrc) {
        element.originalSrc = element.src;
    }
    // Changes image source to new image
    element.src = newSrc;
}

// Function handles clicking on image
function clickImage(element) {
    // Gets image number from id
    let imageNum = element.id.replace('image', '');
    
    // Toggles between original and new image
    if (element.src.includes('newImage')) {
        element.src = `image${imageNum}.jpg`;
    } else {
        element.src = `newImage${imageNum}.jpg`;
    }
    
    // Adds small bounce effect
    element.style.transform = 'scale(1.1)';
    setTimeout(function() {
        element.style.transform = 'scale(1.0)';
    }, 200);
}