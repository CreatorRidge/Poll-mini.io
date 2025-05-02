let answers = document.querySelectorAll('.answer');
let theme = document.querySelector('.game-site');
let note = document.querySelector('.note');
let themeButton = document.querySelector('.toggle-button');


for (let answer of answers) {
    answer.onchange = function() {
    if (answer.dataset.evaluation === 'dark') {
        theme.classList.remove('neon-theme');
        theme.classList.remove('light-theme');
        theme.classList.remove('switch-theme');
        theme.classList.remove('bright-theme');
        theme.classList.add('dark-theme');
        themeButton.classList.remove('shown');
        themeButton.classList.add('hidden');
        note.classList.remove('shown');
        note.classList.add('hidden');
      } if (answer.dataset.evaluation === 'neon') {
        theme.classList.remove('dark-theme');
        theme.classList.remove('light-theme');
        theme.classList.remove('switch-theme');
        theme.classList.remove('bright-theme');
        theme.classList.add('neon-theme');
        themeButton.classList.remove('shown');
        themeButton.classList.add('hidden');
        note.classList.remove('shown');
        note.classList.add('hidden');
      } if (answer.dataset.evaluation === 'light') {
        theme.classList.remove('dark-theme');
        theme.classList.remove('neon-theme');
        theme.classList.remove('switch-theme');
        theme.classList.remove('bright-theme');
        theme.classList.add('light-theme');
        themeButton.classList.remove('shown');
        themeButton.classList.add('hidden');
        note.classList.remove('shown');
        note.classList.add('hidden');
      } if (answer.dataset.evaluation === 'switch') {
        theme.classList.remove('dark-theme');
        theme.classList.remove('neon-theme');
        theme.classList.remove('light-theme');
        theme.classList.remove('bright-theme');
        theme.classList.add('switch-theme');
        themeButton.classList.remove('hidden');
        themeButton.classList.add('shown');
        note.classList.remove('shown');
        note.classList.add('hidden');
      } if (answer.dataset.evaluation === 'bright') {
        theme.classList.remove('dark-theme');
        theme.classList.remove('neon-theme');
        theme.classList.remove('light-theme');
        theme.classList.remove('switch-theme');
        theme.classList.add('bright-theme');
        themeButton.classList.remove('shown');
        themeButton.classList.add('hidden');
        note.classList.remove('shown');
        note.classList.add('hidden');
      } if (answer.dataset.evaluation === 'personal') {
        theme.classList.remove('neon-theme');
        theme.classList.remove('light-theme');
        theme.classList.remove('switch-theme');
        theme.classList.remove('bright-theme');
        theme.classList.add('dark-theme');
        note.classList.remove('hidden');
        note.classList.add('shown');
        themeButton.classList.remove('shown');
        themeButton.classList.add('hidden');
      }
  }
}

themeButton.onclick = function() {
    theme.classList.toggle('light-theme');
    theme.classList.toggle('switch-theme');
};