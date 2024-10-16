// set up DOM Nodes
const cookieBtn = document.getElementById("cookie-btn");
const cookieDisplay = document.getElementById("cookie-display");
const grandmaBtn = document.getElementById("grandma-btn");
const cpsDisplay = document.getElementById("cps-display");

//from lesson demo
const img = document.querySelector("image");
const btn = document.querySelector("button");

// get API
async function upgradeAPI() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  // get the upgrade data from API and check it's worked
  const upgrades = await response.json();
  console.log(upgrades);
}

upgradeAPI();
//btn.addEventListener("click", handleUpgrades);

// get cookies
let cookies = 0;
let cps = 0;

// GAME LOGIC:
// - every second increase cookies by cps
setInterval(function () {
  cookies = cookies + cps;
  cookieDisplay.textContent = cookies;
}, 1000);
// - update screen to show current nb cookies
setInterval(function () {
  cpsDisplay.textContent = cps;
}, 100);

// - get a cookie on button click
cookieBtn.addEventListener("click", function () {
  cookies = cookies + 1;
  cookieDisplay.textContent = cookies;
});

// - buy upgrades to improve cookie cps
grandmaBtn.addEventListener("click", function () {
  // make sure they can afford the upgrade
  if (cookies >= 10) {
    cps = cps + 1;
    cookies = cookies - 10;
    cookieDisplay.textContent = cookies;
    cpsDisplay.textContent = cps;
  }
});
