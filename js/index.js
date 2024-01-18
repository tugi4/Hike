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

// Hier legst du die ausgewählten Monate fest
const selectedMonths = ["Jan", "Feb", "Mar"];

// Durchlaufe alle Monate und füge die CSS-Klasse hinzu, wenn der Monat ausgewählt ist
const tourMonths = document.querySelectorAll('.tour-month');
tourMonths.forEach(month => {
    if (selectedMonths.includes(month.textContent)) {
        month.classList.add('tour-month-selected');
    }
});
