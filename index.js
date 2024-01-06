window.addEventListener("load", fetchImageNameList);

document.addEventListener("keydown", function (event){
    const textIn = document.getElementById("search").value.toLowerCase();
    if (event.key === 'Enter'){
        window.location.href = "detail/detail.html?param="+ encodeURIComponent(textIn);

    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Annahme: Du hast eine Variable mit den Daten aus der Datenbank namens 'imageData'
    // Diese Variable enthält eine Liste von Bildinformationen, z.B., imageData = [{src: 'path/to/image1.jpg'}, {src: 'path/to/image2.jpg'}, ...]

    const imageData = [
        { src: 'path/to/image1.jpg', alt: 'Image 1' },
        { src: 'path/to/image2.jpg', alt: 'Image 2' },
        { src: 'path/to/image3.jpg', alt: 'Image 3' },
        // ... Weitere Bilder
    ];

    const hikeContainer = document.getElementById('hike');

    // Füge die ersten drei Bilder zur Seite hinzu
    imageData.slice(0, 3).forEach((image, index) => {
        const hikeElement = document.createElement('div');
        hikeElement.className = 'indexhike';
        hikeElement.innerHTML = `
            <a href="#" onclick="highlightImage(${index})">
                <img src="${image.src}" alt="${image.alt}">
            </a>
        `;
        hikeContainer.appendChild(hikeElement);
    });

    // Funktion zum Hervorheben des angeklickten Bildes
    window.highlightImage = function (index) {
        const allImages = document.querySelectorAll('.indexhike img');
        allImages.forEach((image, i) => {
            if (i === index) {
                image.classList.add('highlighted');
            } else {
                image.classList.remove('highlighted');
            }
        });
    };
});
