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

//Pull the data from the API using an array
