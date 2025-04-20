
const images = document.querySelectorAll(".gallery");
const imageContainer = document.getElementById(".lightbox");

// Ajoute un écouteur d'événement à chaque image
images.forEach(item => {
    item.addEventListener("click", () => {
        // Crée une nouvelle balise image avec l'image cliquée
        imageContainer.innerHTML = `<img src="images/${item.src}" alt="Image affichée">`;
    });
});