const container = document.querySelector("#imgContainer");
const img = document.querySelector("#imgContainer img")
const cursor = document.querySelector("#crsr");

document.addEventListener("mousemove", (dets) => {

    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    cursor.style.transition = "linear .15s"
})
img.addEventListener("mouseover", () => {
    cursor.style.opacity = "1";
})
img.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
})

VanillaTilt.init(document.querySelector("#imgContainer img"), {
    reverse: false,
    perspective: 1000,
    transition: "ease 1s",
    scale: 1.01
});





// container.addEventListener("mousemove", (dets) => {
//     const x = dets.x / 20;
//     const y = dets.y / 30;
//     console.log(x);
//     console.log(y);

//     img.style.transform = `rotateX(${x}deg) rotateY(${-y}deg)`;
// })

// container.addEventListener("mouseleave", (dets) => {
//     setTimeout(() => {
//         img.style.transform = `rotateX(0deg) rotateY(0deg)`
//     }, 1000);
 
// });