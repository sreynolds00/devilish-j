// INSERTS IMAGES INTO DISCOGRAPHY

const discography__grid = document.getElementById("discography__grid");
const gallery_items = ["album-1.png","album-2.jpg","album-3.jpg","album-4.jpg","Kamikaze.jpg","2-pac.jpg","The_Eminem_Show.jpg"];

for (let i = 0; i < gallery_items.length; i++){
    let container = document.createElement("div")
    container.classList.add("container")
    discography__grid.append(container)
    let image = document.createElement("img")
    image.src = "assets/" + gallery_items[i];
    image.classList.add("discography__image");
    container.append(image);
    let imageCaption = document.createElement("div")
    imageCaption.classList.add("discography__image-caption")
    imageCaption.textContent = gallery_items[i].slice(0, -4)
    container.append(imageCaption);
}