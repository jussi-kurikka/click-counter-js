const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

const initialCount = 10; // Set initial count
counter.textContent = initialCount;
// Initialize count variable    
let count = initialCount;

incrementBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

decrementBtn.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = initialCount;
  counter.textContent = count;
});
