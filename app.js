//DOM Nodes - this part does jfkldsjfdklsajfdsl
const cookieBtn = document.getElementById("cookie-btn");
const cookieDisplay = document.getElementById("cookie-display");
const cpsDisplay = document.getElementById("cps-display");
const grandmaBtn = document.getElementById("grandma-btn");
const grandmaDisplay = document.getElementById("grandma-display");

//Game State - this part drives the game
//let cookies = 0;
//TODO put in LS and transform into number
let cookies = localStorage.getItem("cookies") || 0;
cookies = Number(cookies);
//localStorage.setItem("cookie-display", cookies);

//let cps = 0;
//TODO put in LS and transform into number
let cps = localStorage.getItem("cps") || 0;
cps = Number(cps);
//localStorage.setItem("cps-display", cps);

//TODO put in LS and transform into number
let grandmas = localStorage.getItem("grandmas") || 0;
grandmas = Number(grandmas);
cookieDisplay.textContent = cookieDisplay;

//GAME LOGIC
//every sec inc cookies by 1sec
setInterval(function () {
  cookies = cookies + cps;
  cookieDisplay.textContent = cookies;
  //TODO put in LS
  localStorage.setItem("cookie-display", cookieDisplay);
}, 1000);

//get a cookie when user clicks the button
cookieBtn.addEventListener("click", function () {
  cookies = cookies + 1;
  cookieDisplay.textContent = cookies;
});

//upgrade the game
grandmaBtn.addEventListener("click", function () {
  if (cookies >= 10) {
    cps = cps + 1;
    cookies = cookies - 10;
    cookieDisplay.textContent = cookies;
    cpsDisplay.textContent = cps;
    //TODO put in LS
    //localStorage.setItem("grandma-btn", grandmaBtn);
    let grandmas = localStorage.getItem("grandmas") || 0;
  }
});

// CONNECT WITH API
async function upgradeAPI() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  // get the upgrade data from API and check it's worked
  const upgrades = await response.json();
  console.log(upgrades);
}
upgradeAPI();

//Pull the data from the API
