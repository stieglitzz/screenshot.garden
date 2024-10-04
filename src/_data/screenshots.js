const fs = require('fs');
const path = require('path');

// Path to the directory containing images
const imageDir = path.join(__dirname, '../screenshots');

// Function to get a list of image filenames
function getImageList() {
    return fs.readdirSync(imageDir).filter(file => file.endsWith('.jpg') || file.endsWith('.png'));
}

module.exports = {
    images: getImageList()
    
};
