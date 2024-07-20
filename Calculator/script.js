const display = document.getElementById('display');
const ans = document.getElementById('ans');
const buttons = document.querySelectorAll('.btn');
let cnt = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value) {
            display.value += value;
        } else if (button.id === 'clr') {
            display.value = '';
            ans.value = "";
        } else if (button.id === 'equal') {
            try {
                ans.value = display.value;
                ans.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if (button.id === 'bracket') {
            cnt++;
            if (cnt % 2 === 1) {
                display.value += '(';
            } else {
                display.value += ')';
            }
        } else if (button.id === 'backspace') {
            display.value = display.value.slice(0, -1);
        }
    });
});