//DOM Nodes
const cookieBtn = document.getElementById("cookie-btn");
const cookieDisplay = document.getElementById("cookie-display");
const cpsDisplay = document.getElementById("cps-display");
const grandmaBtn = document.getElementById("grandma-btn");

//Game State
let cookies = localStorage.getItem("cookies") || 0;
cookies = Number(cookies);
let cps = localStorage.getItem("cps") || 0;
cps = Number(cps);
// Update page
cookieDisplay.textContent = cookies;
cpsDisplay.textContent = cps;

//GAME LOGIC
//every sec inc cookies by CPS
setInterval(function () {
  cookies = cookies + cps;
  cookieDisplay.textContent = cookies;
  //localStorage.setItem("cookie-display", cookieDisplay);
  localStorage.setItem("cookies", cookies);
}, 1000);

//get a cookie when user clicks the button
cookieBtn.addEventListener("click", function () {
  cookies = cookies + 1;
  cookieDisplay.textContent = cookies;
  //new line below
  localStorage.setItem("cookies", cookies);
});

//upgrade the game
grandmaBtn.addEventListener("click", function () {
  if (cookies >= 10) {
    cps = cps + 1;
    cookies = cookies - 10;
    cookieDisplay.textContent = cookies;
    cpsDisplay.textContent = cps;
    //localStorage.setItem("grandma-btn", grandmaBtn);
    localStorage.setItem("cookies", cookies);
    localStorage.setItem("cps", cps);

    //let grandmas = localStorage.getItem("grandmas") || 0;
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
