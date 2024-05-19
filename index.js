// script.js

document.addEventListener('DOMContentLoaded', () => {
    const popupBtn = document.getElementById('popupBtn');
    const popup = document.getElementById('popup');
    const applyColorBtn = document.getElementById('applyColorBtn');
    const colorInput = document.getElementById('colorInput');

    popupBtn.addEventListener('click', () => {
        popup.classList.add('show');
    });

    applyColorBtn.addEventListener('click', () => {
        const color = colorInput.value;
        document.body.style.backgroundColor = color;
        popup.classList.remove('show');  // Hide the popup
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('show');
        }
    });
});
