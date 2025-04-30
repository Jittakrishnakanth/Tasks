let smallImage = document.getElementById("seasonSmallImage");
let mediumImage = document.getElementById("seasonMediumImage");
let seasonImages = {
  spring: "https://res.cloudinary.com/dhpkv1tec/image/upload/v1684396063/natural%20places/seasons-switcher-spring-md-img_lwd2gw.png",
  summer: "https://res.cloudinary.com/dhpkv1tec/image/upload/v1684396144/natural%20places/seasons-switcher-summer-md-img_ustin9.png",
  autumn: "https://res.cloudinary.com/dhpkv1tec/image/upload/v1684396272/natural%20places/seasons-switcher-autumn-md-img_kmnmcu.png",
  winter: "https://res.cloudinary.com/dhpkv1tec/image/upload/v1684396318/natural%20places/seasons-switcher-winter-md-img_z5awmm.png"
};

document.getElementById("spring").addEventListener("click", () => updateSeason("spring"));
document.getElementById("summer").addEventListener("click", () => updateSeason("summer"));
document.getElementById("autumn").addEventListener("click", () => updateSeason("autumn"));
document.getElementById("winter").addEventListener("click", () => updateSeason("winter"));

function updateSeason(season) {
  smallImage.src = seasonImages[season];
  mediumImage.src = seasonImages[season];
}