
const images = document.querySelectorAll(".gallery");
const imageContainer = document.getElementById("#image-container");

// Ajoute un écouteur d'événement à chaque image
images.forEach(image => {
    image.addEventListener("click", () => {
        // Crée une nouvelle balise image avec l'image cliquée
        imageContainer.innerHTML = `<img src="${image.src}" alt="Image affichée">`;
    });
});