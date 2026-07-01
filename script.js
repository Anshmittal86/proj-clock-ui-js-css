let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
const digitalDisplay = document.getElementById("digitalDisplay");
const analogClock = document.getElementById("analogClock");
const digitalClock = document.getElementById("digitalClock");
const toggleButton = document.getElementById("toggleButton");

function displayTime() {
  let date = new Date();

  // Analog clock calculations
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  
  let hRotation = 30*hh + mm/2;
  let mRotation = 6*mm;
  let sRotation = 6*ss;

  hour.style.cssText = `rotate: ${hRotation}deg;`;
  minute.style.cssText = `rotate: ${mRotation}deg;`;
  second.style.cssText = `rotate: ${sRotation}deg;`;

  // Digital clock display
  let formattedTime = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false});
  let formattedDate = date.toDateString();
  let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  digitalDisplay.innerHTML = `<p>${formattedTime}</p><p>${formattedDate}</p><p>${timezone}</p>`;
}

function toggleClocks() {
  analogClock.classList.toggle('active');
  digitalClock.classList.toggle('active');
}

toggleButton.addEventListener('click', toggleClocks);

setInterval(displayTime, 1000);

// Initialize the display with analog clock as active
analogClock.classList.add('active');