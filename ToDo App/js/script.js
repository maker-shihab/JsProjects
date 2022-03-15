const btn = document.getElementById('click-btn');
const showColor = document.getElementById('show-color');
const body = document.body;


btn.addEventListener('click', () => {
   const col1 = getRandomRGB();
   const col2 = getRandomRGB();
   const col3 = getRandomRGB();

   const colorString = `rgb(${col1}, ${col2}, ${col3})`;

   body.style.background = colorString;

   showColor.innerText = colorString;
});

function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}
