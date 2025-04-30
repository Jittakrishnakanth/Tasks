let likeButton = document.getElementById("likeButton");
let likeIcon = document.getElementById("likeIcon");
let puppyImage = document.getElementById("puppyImage");

let isLiked = false;

likeButton.addEventListener("click", () => {
  isLiked = !isLiked;

  if (isLiked) {
    puppyImage.src = "https://res.cloudinary.com/dhpkv1tec/image/upload/v1684396469/natural%20places/white-puppy-img_cjfliy.png";
    likeButton.style.backgroundColor = "#0967d2";
    likeButton.style.color = "#ffffff";
    likeIcon.style.color = "#ffffff";
  } else {
    puppyImage.src = "https://res.cloudinary.com/dhpkv1tec/image/upload/v1684396484/natural%20places/white-puppy-liked-img_wohqq2.png";
    likeButton.style.backgroundColor = "#cbd2d9";
    likeButton.style.color = "#9aa5b1";
    likeIcon.style.color = "#9aa5b1";
  }
});