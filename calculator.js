const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let current = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;
    if (value === '=') {
      try {
        current = eval(current).toString();
      } catch (e) {
        current = 'Error';
      }
    } else if (button.id === 'clear') {
      current = '';
    } else {
      current += value;
    }
    display.value = current;
  });
});
