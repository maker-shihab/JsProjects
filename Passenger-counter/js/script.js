const count = document.getElementById('count');
const btnIncrease = document.getElementById('incrise');
const btnDecrise = document.getElementById('decrise');
let countValue = 0;
  btnIncrease.addEventListener('click', () => {
    countValue++;
    count.innerText = countValue;
  });
  btnDecrise.addEventListener('click', () => {
    countValue--;
      count.innerText = countValue;
  });