document.addEventListener("DOMContentLoaded", randomImage);

function randomImage() {
    var images = [
        '/assets/images/bgImage01.png',
        '/assets/images/bgImage02.png',
        '/assets/images/bgImage03.png',
        '/assets/images/bgImage04.png',
        '/assets/images/bgImage05.png',
    ];
    var size = images.length;
    var x = Math.floor(size * Math.random());
    console.log(x);

    // Assuming you want to target the <body> element
    var element = document.body; 
    console.log(element);

    // Set the background image
    element.style.backgroundImage = "url(" + images[x] + ")";
}

document.addEventListener("DOMContentLoaded", randomImage);
