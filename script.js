let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let themeToggle = document.getElementById("theme-toggle");

function displayTime() {
  let date = new Date();

  //Getting hour, minutes, seconds
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  
  let hRotation = 30*hh + mm/2;
  let mRotation = 6*mm;
  let sRotation = 6*ss;

  hour.style.cssText = `rotate: ${hRotation}deg;`;
  minute.style.cssText = `rotate: ${mRotation}deg;`;
  second.style.cssText = `rotate: ${sRotation}deg;`;
}

function applyTheme(theme) {
  document.body.classList.remove('light-mode', 'dark-mode');
  document.body.classList.add(theme);
  localStorage.setItem('theme', theme);
}

function setInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(systemPrefersDark ? 'dark-mode' : 'light-mode');
  }
}

function toggleTheme() {
  document.body.classList.contains('light-mode') ? applyTheme('dark-mode') : applyTheme('light-mode');
}

// Set up initial theme
setInitialTheme();

// Add event listener for toggle button
themeToggle.addEventListener('click', toggleTheme);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  applyTheme(event.matches ? 'dark-mode' : 'light-mode');
});

setInterval(displayTime, 1000);
