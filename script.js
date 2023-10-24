const content = document.getElementById('text-content');
const toggleButton = document.getElementById('theme-toggle-btn');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    toggleButton.classList.toggle('btn-dark');
    toggleButton.classList.toggle('btn-light');

    if (toggleButton.classList.contains('btn-dark')) {
        toggleButton.textContent = 'Switch to Light Theme';
        content.textContent = 'Dark theme is on. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    } else {
        toggleButton.textContent = 'Switch to Dark Theme';
        content.textContent = 'Light theme is on. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    }
});
