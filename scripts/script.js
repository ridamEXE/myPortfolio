let index = +1;
let totalWallpapers = +8;

function changeWallpaper() {
    document.body.style.backgroundImage = `url(./images/HomeBackground/w${index++}.jpg)`;
    if (index === totalWallpapers+1) index = 1;
}

changeWallpaper();
setInterval(changeWallpaper, 5000);