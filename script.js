// get settings and buttons
const settings = document.querySelector(".settings");
const settingsBtn = document.querySelector(".settings-btn");
const saveBtn = document.querySelector(".save");

// get inputs
const eventName = document.querySelector("#event-name");
const eventDay = document.querySelector("#event-day");
const eventMonth = document.querySelector("#event-month");
const eventYear = document.querySelector("#event-year");
const eventImg = document.querySelector("#event-image");

// get h1 span
const eventSpan = document.querySelector(".event");

//get body to change bg image
const body = document.getElementsByTagName("body")[0];

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

const newYear = "Jan 1, 2022 0:00:00";
let usersTime;

const setTime = () => {
  const newYearDate = new Date(newYear);
  const currentTime = new Date();
  const result = usersTime - currentTime;
  console.log(usersTime);

  const days = Math.floor(result / (1000 * 60 * 60 * 24));
  const hours = Math.floor((result / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((result / (1000 * 60)) % 60);
  const seconds = Math.floor((result / 1000) % 60);

  const userYears = eventYear.value;
  const currentYears = currentTime.getFullYear();
  let userMonths = eventMonth.value;
  let currentMonths = currentTime.getMonth();
  currentMonths++;

  // Months
  const months =
    (userYears - currentYears) * 12 + (userMonths - currentMonths) - 1;

  secondsCount.textContent = timeFormat(seconds);
  seconds === 1
    ? (secondText.textContent = "second")
    : (secondText.textContent = "seconds");
  minutesCount.textContent = timeFormat(minutes);
  minutes === 1
    ? (minuteText.textContent = "minute")
    : (minuteText.textContent = "minutes");
  hoursCount.textContent = hours;
  hours === 1
    ? (hourText.textContent = "hour")
    : (hourText.textContent = "hours");
  daysCount.textContent = days;
  days === 1 ? (dayText.textContent = "day") : (dayText.textContent = "days");
  monthsCount.textContent = months;
  months === 1
    ? (monthText.textContent = "month")
    : (monthText.textContent = "months");
};

const appUpdate = () => {
  if (eventSpan.textContent === "") {
    eventSpan.textContent = "New year ";
  } else {
    eventSpan.textContent = eventName.value;
  }
  usersTime = new Date(
    `${eventMonth.value} ${eventDay.value} ${eventYear.value}`
  );
  if (eventImg.value === "") {
    body.style.backgroundImage =
      "url('./assets/ben-white-xqjMjaGGhmw-unsplash.jpg')";
  } else {
    body.style.backgroundImage = `url('${eventImg.value}')`;
  }
  setTime();
};

appUpdate();

settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("active");
  settingsBtn.classList.toggle("open");
});

saveBtn.addEventListener("click", appUpdate);
saveBtn.addEventListener("click", () => {
  settings.classList.toggle("active");
  settingsBtn.classList.toggle("open");
});

function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}
setInterval(setTime, 1000);
