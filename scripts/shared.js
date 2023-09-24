const expandBtn = document.getElementById("expand");
const shrinkBtn = document.getElementById("shrink");
const overlay = document.getElementById("overlay");

function showMenu() {
    expandBtn.style.color = "transparent";
    overlay.style.display = "flex";
}

function hideMenu() {
    expandBtn.style.color = "white";
    overlay.style.display = "none";
}

expandBtn.addEventListener("click", showMenu);
shrinkBtn.addEventListener("click", hideMenu);
