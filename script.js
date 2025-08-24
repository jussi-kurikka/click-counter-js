const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');


const maxValue = 10;
const initialCount = 0; // Set initial count
// Initialize count variable    
let count = Number(localStorage.getItem('counter_value')) || initialCount;
counter.textContent = count;

function updateCounter() {
  counter.textContent = count;
  localStorage.setItem('counter_value', count);
}

incrementBtn.addEventListener('click', () => {
  if (count < maxValue) {
    count++;
    updateCounter();
  } else {
    showModal(`Maximum value of ${maxValue} reached!`);
  }
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener('click', () => {
  count = initialCount;
  updateCounter();
});


function showModal(message) {
  document.getElementById('modal-message').textContent = message;
  document.getElementById('modal').style.display = 'block';
}
document.getElementById('close-modal').onclick = function() {
  document.getElementById('modal').style.display = 'none';
};
// Optional: hide when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
}
