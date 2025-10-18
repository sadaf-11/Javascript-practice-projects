let input = document.getElementsByClassName('display')[0].getElementsByTagName('input')[0];
let string = "";
const buttons = document.querySelectorAll('.buttons input');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.value;

        if (value == '=') {
            string = eval(string.replace(/%/g, '/'));
            input.value = string;
        } else if (value == 'AC') {
            string = "";
            input.value = string;
        } else if (value == 'DLT') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += value;
            input.value = string;
        }
    });
});
