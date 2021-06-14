// Time
function renderTime() {
  const theTime = new Date();
  const seconds = addLeadingZero(theTime.getSeconds());
  const minutes = addLeadingZero(theTime.getMinutes());
  const hours = theTime.getHours();
  const isAm = hours < 12 || hours === 0;
  let amPm = isAm ? 'AM' : 'PM';

  const currentTime = `${formatHour(hours)}:${minutes}:${seconds} ${amPm}`;
  document.getElementById('time').textContent = currentTime;
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

function renderDate() {
  const theDate = new Date();
  const day = dayNames[theDate.getDay()];
  const month = monthNames[theDate.getMonth()];
  const date = theDate.getDate();
  const year = theDate.getFullYear();

  const currentDate = `${day}, ${month} ${formatDateSuffix(date)} ${year}`;

  document.getElementById('date').textContent = currentDate;
}

function formatDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const dayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday ',
  'Saturday',
  'Sunday'
];

renderTime();
renderDate();
setInterval(() => {
  renderTime();
  renderDate();
}, 1000);
