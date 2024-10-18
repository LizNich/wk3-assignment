// DOM Nodes
const cookieBtn = document.getElementById("cookie-btn");
const cookieDisplay = document.getElementById("cookie-display");
const cpsDisplay = document.getElementById("cps-display");
const grandmaBtn = document.getElementById("grandma-btn");
const grandmaDisplay = document.getElementById("grandma-display");
const farmBtn = document.getElementById("farm-btn");
const farmDisplay = document.getElementById("farm-display");
const estateBtn = document.getElementById("estate-btn");
const estateDisplay = document.getElementById("estate-display");
const resetBtn = document.getElementById("reset-btn");

// Game State
let cookies = localStorage.getItem("cookies") || 0;
cookies = Number(cookies);
let cps = localStorage.getItem("cps") || 0;
cps = Number(cps);
let grandma = localStorage.getItem("grandma") || 0;
grandma = Number(grandma);
let farm = localStorage.getItem("farm") || 0;
farm = Number(farm);
let estate = localStorage.getItem("estate") || 0;
estate = Number(estate);

// Update page
cookieDisplay.textContent = cookies;
cpsDisplay.textContent = cps;
grandmaDisplay.textContent = grandma;
farmDisplay.textContent = farm;
estateDisplay.textContent = estate;

// GAME LOGIC
// every sec inc cookies by CPS
setInterval(function () {
  cookies = cookies + cps;
  cookieDisplay.textContent = cookies;
  localStorage.setItem("cookies", cookies);
}, 1000);

// get a cookie when user clicks the button
cookieBtn.addEventListener("click", function () {
  cookies = cookies + 1;
  cookieDisplay.textContent = cookies;
  localStorage.setItem("cookies", cookies);
});

// upgrade the game
// 1-grandma
grandmaBtn.addEventListener("click", function () {
  if (cookies >= 5) {
    cps = cps + 1;
    cookies = cookies - 5;
    grandma = grandma + 1;
    cookieDisplay.textContent = cookies;
    cpsDisplay.textContent = cps;
    grandmaDisplay.textContent = grandma;
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cps", cps);
    localStorage.setItem("grandma", grandma);
  }
});
// 2-farm
farmBtn.addEventListener("click", function () {
  if (cookies >= 50) {
    cps = cps + 10;
    cookies = cookies - 50;
    farm = farm + 1;
    cookieDisplay.textContent = cookies;
    cpsDisplay.textContent = cps;
    farmDisplay.textContent = farm;
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cps", cps);
    localStorage.setItem("farm", farm);
  }
});
// 3-estate
estateBtn.addEventListener("click", function () {
  if (cookies >= 500) {
    cps = cps + 100;
    cookies = cookies - 500;
    estate = estate + 1;
    cookieDisplay.textContent = cookies;
    cpsDisplay.textContent = cps;
    estateDisplay.textContent = estate;
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cps", cps);
    localStorage.setItem("estate", estate);
  }
});

// Reset cookie & cps count to zero
resetBtn.addEventListener("click", function () {
  cookies = 0;
  cps = 0;
  grandma = 0;
  farm = 0;
  estate = 0;
  cookieDisplay.textContent = cookies;
  cpsDisplay.textContent = cps;
  grandmaDisplay.textContent = grandma;
  farmDisplay.textContent = farm;
  estateDisplay.textContent = estate;
  localStorage.setItem("cookies", cookies);
  localStorage.setItem("cps", cps);
  localStorage.setItem("grandma", grandma);
  localStorage.setItem("farm", farm);
  localStorage.setItem("estate", estate);
});
