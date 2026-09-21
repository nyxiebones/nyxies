const popupButtons = document.querySelectorAll('[data-popup]');

popupButtons.forEach((button) => {
    const popupId = button.dataset.popup;
    const popup = document.querySelector(`#${popupId}`);
    const closeButton = popup.querySelector('.popup-close');

    button.addEventListener('click', () => {

        document.querySelectorAll('.popup').forEach((popup) => {
            popup.hidden = true;
        });

        document.querySelectorAll('.nav-item').forEach((button) => {
            button.classList.remove('active');
        });

        popup.hidden = false;
        button.classList.add('active');
    });

    closeButton.addEventListener('click', () => {
        popup.hidden = true;
        button.classList.remove('active');
    });
});