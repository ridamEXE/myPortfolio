const expandBtn = document.getElementById("expand");
const shrinkBtn = document.getElementById("shrink");
const overlay = document.getElementById("overlay");

function showMenu() {
    expandBtn.style.visibility = "hidden";
    overlay.style.display = "flex";
    overlay.style.visibility = "visible";
}

function hideMenu() {

    expandBtn.style.visibility = "visible";
    overlay.style.visibility = "hidden";
}

expandBtn.addEventListener("click", showMenu);
shrinkBtn.addEventListener("click", hideMenu);
overlay.addEventListener("click", hideMenu);
