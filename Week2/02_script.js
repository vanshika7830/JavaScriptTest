const input = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");

const profileDiv = document.getElementById("profile");
const reposDiv = document.getElementById("reposSection");
const errorMsg = document.getElementById("errorMsg");

async function fetchGitHubUser(username) {
  errorMsg.innerText = "";
  profileDiv.innerHTML = "";
  reposDiv.innerHTML = "";
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);

    if (userRes.status === 404) {
      errorMsg.innerText = "❌ User not found (404)";
      return;
    }

    const userData = await userRes.json();

    // Show profile card
    profileDiv.innerHTML = `
      <div class="profile-card">
        <img src="${userData.avatar_url}" alt="avatar" />
        <div class="profile-info">
          <h2>${userData.login}</h2>
          <p>${userData.bio ? userData.bio : "No bio available"}</p>

          <div class="stats">
            <span>${userData.followers} Followers</span>
            <span>${userData.following} Following</span>
            <span>${userData.public_repos} Repos</span>
          </div>
        </div>
      </div>
    `;
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=created&per_page=5`
    );

    const repoData = await repoRes.json();

    reposDiv.innerHTML = `<div class="repo-title">Latest Repositories</div>`;

    repoData.forEach((repo) => {
      reposDiv.innerHTML += `
        <div class="repo">${repo.name}</div>
      `;
    });

  } catch (error) {
    errorMsg.innerText = "⚠️ Something went wrong!";
    console.log(error);
  }
}

searchBtn.addEventListener("click", () => {
  const username = input.value.trim();
  if (username) fetchGitHubUser(username);
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const username = input.value.trim();
    if (username) fetchGitHubUser(username);
  }
});
