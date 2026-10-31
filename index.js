let count = 0;

const valueEl = document.getElementById('counter-value');
const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('increase-btn');

increaseBtn.addEventListener('click', () => {
  count++;
  valueEl.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count--;
  valueEl.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  valueEl.textContent = count;
});
