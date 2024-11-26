let time = document.querySelector("#time");
let date = document.querySelector("#date");

setInterval(dateAndTime, 1000);

function dateAndTime() {
  let today = new Date();

  const monthNames = [
    "Jan0",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayNames = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri"];

  let currentTime = `${
    today.getHours() <= 9 ? "0" + today.getHours() : today.getHours()
  } : ${
    today.getMinutes() <= 9 ? "0" + today.getMinutes() : today.getMinutes()
  } : ${
    today.getSeconds() <= 9 ? "0" + today.getSeconds() : today.getSeconds()
  }`;

  let currentDate = `${dayNames[today.getDay()]}, ${today.getMonth()} ${
    monthNames[today.getMonth()]
  } ${today.getFullYear()}`;

  time.innerHTML = currentTime;
  date.innerHTML = currentDate;
}
