const factPara = document.getElementById("fact");
const btn = document.getElementById("btn");

async function getCatFact() {
  factPara.innerText = "Loading...";

  try {
    const res = await fetch("https://meowfacts.herokuapp.com/");

    console.log("Response status:", res.status);

    const data = await res.json();
    console.log("Data:", data);

    factPara.innerText = data.data[0];
  } catch (error) {
    console.log("ERROR:", error);
    factPara.innerText = "Failed to fetch 😿";
  }
}

btn.addEventListener("click", getCatFact);
getCatFact();
