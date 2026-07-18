const panels = document.querySelectorAll('.panel');
const button = document.getElementById('nextbutton');

let current = 0;

button.addEventListener('click', () => {
    panels[current].classList.remove('active');

    current++;
    if (current >= panels.length) {
        current = 0;
    }
    panels[current].classList.add('active');

});