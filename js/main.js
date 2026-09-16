const popupButtons = document.querySelectorAll('[data-popup]');
popupButtons.forEach((button) => {
    const popupId = button.dataset.popup;
    const popup = document.querySelector(`#${popupId}`);
    const closeButton = popup.querySelector('.popup-close');

    button.addEventListener('click', () => {
        popup.hidden = false;
    });

    closeButton.addEventListener('click', () => {
        popup.hidden = true;
    });
});