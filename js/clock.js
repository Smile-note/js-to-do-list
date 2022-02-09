const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  clock.innerText = `${hours}:${minutes} ${ampm}`;
}

getClock();
setInterval(getClock, 1000);
