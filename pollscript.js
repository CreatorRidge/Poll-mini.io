const answers = document.querySelectorAll('.answer');
const theme = document.querySelector('.game-site');
const note = document.querySelector('.note');
const themeButton = document.querySelector('.toggle-button');

function clearThemes() {
    theme.classList.remove('neon-theme');
    theme.classList.remove('light-theme');
    theme.classList.remove('switch-theme');
    theme.classList.remove('bright-theme');
    theme.classList.remove('dark-theme');
}

function hideElements() {
    themeButton.classList.remove('shown');
    themeButton.classList.add('hidden');
    note.classList.remove('shown');
    note.classList.add('hidden');
}

for (let answer of answers) {
    answer.onchange = function() {
        clearThemes();
        hideElements();
        
        switch (answer.dataset.evaluation) {
            case 'dark':
                theme.classList.add('dark-theme');
                break;
            case 'neon':
                theme.classList.add('neon-theme');
                break;
            case 'light':
                theme.classList.add('light-theme');
                break;
            case 'switch':
                theme.classList.add('switch-theme');
                themeButton.classList.remove('hidden');
                themeButton.classList.add('shown');
                break;
            case 'bright':
                theme.classList.add('bright-theme');
                break;
            case 'personal':
                theme.classList.add('dark-theme');
                note.classList.remove('hidden');
                note.classList.add('shown');
                break;
        }
    }
}

themeButton.onclick = function() {
    theme.classList.toggle('light-theme');
    theme.classList.toggle('switch-theme');
};