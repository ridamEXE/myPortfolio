const wallpapers = ["w1.jpg", "w2.jpg", "w3.jpg", "w4.jpg", "w5.jpg", "w6.jpg", "w7.jpg", "w8.jpg"];
let index = +0;

function changeWallpaper() {
    document.body.style.backgroundImage = "url(./images/" + wallpapers[index] + ")";
    index++;
    if (index === 8) {
        index = 0;
    }
}

setInterval(changeWallpaper, 5000);