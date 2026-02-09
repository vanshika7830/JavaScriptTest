// 7. Execute on page load
window.onload = function() {
    const mainHeading = document.getElementById('heading');
    mainHeading.textContent = "Welcome to JavaScript DOM Manipulation";
    mainHeading.style.color = "white"; 
    mainHeading.style.backgroundColor = "#4A90E2";
    mainHeading.style.textAlign = "center";
    mainHeading.classList.add('main-heading');
    console.log("Page fully loaded and heading updated.");
};