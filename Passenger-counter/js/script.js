const count = document.getElementById('count');
const btnIncrease = document.getElementById('incrise');
const btnDecrise = document.getElementById('decrise');
let countValue = 0;
if(countValue <= 0){
  countValue.innerText = "Sorry set posative number";
}
else{
  btnIncrease.addEventListener('click', () => {
    countValue++;
    count.innerText = countValue;
  });
  btnDecrise.addEventListener('click', () => {
    countValue--;
      count.innerText = countValue;
  });
}