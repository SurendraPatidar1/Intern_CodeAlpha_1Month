// Get references to HTML elements
const calc = document.forms['calc'];
const txt = calc['txt'];
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const numButtons = document.querySelectorAll('.num[data-value]');

// Add event listeners for the number and operator buttons
numButtons.forEach(button => {
    button.addEventListener('click', () => {
        txt.value += button.getAttribute('data-value');
    });
});

// Clear button event listener
clearButton.addEventListener('click', () => {
    txt.value = '';
});

// Equals button event listener
equalsButton.addEventListener('click', () => {
    try {
        txt.value = eval(txt.value);
    } catch (error) {
        txt.value = 'Error';
    }
});
