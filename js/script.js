const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
  const res = await fetch("https://picsum.photos/v2/list?limit=100");
  const images = await res.json();
  console.log(images);
};

getImage();
