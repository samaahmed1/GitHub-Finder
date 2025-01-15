document.getElementById("toggle-theme").onclick = () => {
  if (document.body.classList.contains("dark-theme")) {
    document.body.classList.remove("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/moon.webp";
  } else {
    document.body.classList.add("dark-theme");
    document.getElementById("toggle-theme").src = "assets/icons/sun.webp";
  }
};
document.getElementById("button-search").onclick = getUserData;
function getUserData() {
  if (document.getElementById("input-search").value === "") {
    document.getElementById("user-data").innerHTML = `
    <span class="message">Please Enter The Username</span>
    `;
  } else {
    fetch(`https://api.github.com/users/${document.getElementById("input-search").value}`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("user-data").innerHTML = `
        <div class= "avatar">
        <img src= "${data.avatar_url}" alt="data.name" />
        <h1>${data.name}</h1>
        <a href= "${data.html_url}" target="_blank">GitHub</a>
        </div>
        `;
      });
  }
}
