const aboutButton = document.querySelector('[data-popup="about-popup"]');
const aboutPopup = document.querySelector('#about-popup');

aboutButton.addEventListener('click', () => {
    aboutPopup.hidden = false;
});

const aboutClose = document.querySelector('#about-popup .popup-close');
aboutClose.addEventListener('click', () => {
    aboutPopup.hidden = true;
});