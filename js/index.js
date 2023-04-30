
//modal
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalName = document.getElementById('modal-name');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close-button');
const modalButtons = document.querySelectorAll('.modal-button');

modalButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        modalImage.setAttribute('src', `product${product}.jpg`);
        modalName.innerText = `Product ${product}`;
        modalDescription.innerText = `This is the description for product ${product}.`;
        modal.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
