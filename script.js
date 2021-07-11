// get paragraphs where numbers gonna be held
const monthsCount = document.getElementById("months");
const daysCount = document.getElementById("days");
const hoursCount = document.getElementById("hours");
const minutesCount = document.getElementById("minutes");
const secondsCount = document.getElementById("seconds");
// get spans where text under numbers gonna be
const monthText = document.getElementById("month-title");
const dayText = document.getElementById("day-title");
const hourText = document.getElementById("hour-title");
const minuteText = document.getElementById("minute-title");
const secondText = document.getElementById("second-title");

const newYears = "Jan 1, 2022 0:00:00";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  //get months 
  const newYearsDateYear = newYearsDate.getFullYear();
  const currentDateYear = currentDate.getFullYear();
  let newYearsDateMonth = newYearsDate.getMonth();
  let currentDateMonth = currentDate.getMonth();
  if (newYearsDateMonth === 0) {
    newYearsDateMonth++;
    currentDateMonth++;
  }

  const timeLeft = newYearsDate - currentDate;

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const months =
    (newYearsDateYear - currentDateYear) * 12 +
    (newYearsDateMonth - currentDateMonth) -
    1;
  // update the numbers in secs,mins etc + determine title if its singular or plural depending on number
  secondsCount.innerHTML = timeFormat(seconds);
  seconds === 1
    ? (secondText.innerHTML = "second")
    : (secondText.innerHTML = "seconds");
  minutesCount.innerHTML = timeFormat(minutes);
  minutes === 1
    ? (minuteText.innerHTML = "minute")
    : (minuteText.innerHTML = "minutes");
  hoursCount.innerHTML = hours;
  hours === 1 ? (hourText.innerHTML = "hour") : (hourText.innerHTML = "hours");
  daysCount.innerHTML = days;
  days === 1 ? (dayText.innerHTML = "day") : (dayText.innerHTML = "days");
  monthsCount.innerHTML = months;
  months === 1
    ? (monthText.innerHTML = "month")
    : (monthText.innerHTML = "months");
}

// function to put 0 before seconds and minutes so it looks better
function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(() => {
  countdown();
}, 1000);
