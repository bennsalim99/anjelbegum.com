// Lightbox açma işlevi
document.querySelectorAll('.lightbox').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const imgSrc = item.getAttribute('href');
        document.getElementById('lightbox-img').src = imgSrc;
        document.getElementById('lightbox').style.display = 'flex';
    });
});

// Lightbox'ı kapama işlevi
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
