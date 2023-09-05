const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.carousel-inner');

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    // Remueve la clase 'active' de todas las imágenes del carrusel
    mainImage.querySelectorAll('.carousel-item').forEach(item => {
      item.classList.remove('active');
    });

    // Agrega la clase 'active' a la imagen del carrusel correspondiente
    mainImage.querySelectorAll('.carousel-item')[index].classList.add('active');
  });
});
