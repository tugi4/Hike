window.addEventListener("load", fetchImageNameList);

document.addEventListener("keydown", function (event){
    const textIn = document.getElementById("search").value.toLowerCase();
    if (event.key === 'Enter'){
        window.location.href = "css/css.html?param="+ encodeURIComponent(textIn);

    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Annahme: Du hast eine Variable mit den Daten aus der Datenbank namens 'imageData'
    // Diese Variable enthält eine Liste von Bildinformationen, z.B., imageData = [{src: 'path/to/image1.jpg'}, {src: 'path/to/image2.jpg'}, ...]

    const imageData = [
        {src: 'path/to/image1.jpg', alt: 'Image 1'},
        {src: 'path/to/image2.jpg', alt: 'Image 2'},
        {src: 'path/to/image4.jpg', alt: 'Image 3'},
        // ... Weitere Bilder
    ];

    const hikeContainer = document.getElementById('hike');

    // Füge die ersten drei Bilder zur Seite hinzu
});
