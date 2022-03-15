const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear = "1 Jun 2022";

function countDown() {
  const newYearsDate = new Date(newYear);
  const curentDate = new Date();

  const totalSecond = (newYearsDate - curentDate) / 1000;
  
  const days = Math.floor(totalSecond / 3600 / 24);
  const hours = Math.floor(totalSecond / 3600) % 24;
  const minutes = Math.floor(totalSecond / 60) % 60;
  const seconds = Math.floor(totalSecond) % 60;

  daysEl.innerText = days;
  hoursEl.innerText = formateTime(hours);
  minutesEl.innerText = formateTime(minutes);
  secondsEl.innerText = formateTime(seconds);

}
function formateTime(time){
  return time < 10 ? `0${time}` : time;
}
setInterval(countDown, 1000);