const container = document.querySelector("#imgContainer");
const img = document.querySelector("#imgContainer img")
const cursor = document.querySelector("#crsr");


container.addEventListener("mousemove", (dets) => {
    const x = dets.x / 20;
    const y = dets.y / 30;
    console.log(x);
    console.log(y);

    img.style.transform = `rotateX(${x}deg) rotateY(${-y}deg)`;
})

container.addEventListener("mouseleave", (dets) => {
    setTimeout(() => {
        img.style.transform = `rotateX(0deg) rotateY(0deg)`
    }, 1000);
 
});