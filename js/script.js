const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
   const images = await res.json();
   
const selectRandomImage = function (image) {
    const randomIndex = Math.floor(Math.random * images.length)
//console.log(randomIndex);
    const randomImage = images[randomIndex];
//console.log(randomImage);
displayImage(randomImage);

};

const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    suthorSpan.innerText = author;
    img.src = imageAddress;
    img.dispatchEvent.classList.remove("hide");
    );

    button.addEventListener("click", function () {
     getImage();   
    });
}




