const ADMIN_API = "https://api.DOMAININ.com/admin"; // sonra değişecek

function randomKey() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

async function addKey() {
  let key = document.getElementById("newKey").value;
  const days = document.getElementById("days").value;

  if (!key) key = randomKey();

  const res = await fetch(ADMIN_API + "/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key, days })
  });

  const data = await res.json();
  document.getElementById("adminResult").innerText = data.message;
}

async function deleteKey() {
  const key = document.getElementById("delKey").value;

  const res = await fetch(ADMIN_API + "/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key })
  });

  const data = await res.json();
  document.getElementById("adminResult").innerText = data.message;
}