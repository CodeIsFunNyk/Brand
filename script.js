const imgage = document.querySelector("#imgContainer img");
const cursor = document.querySelector("#crsr");


imgage.addEventListener("mousemove", (dets) => {
    const x = dets.x / 20;
    const y = dets.y / 30;
    console.log(x);
    console.log(y);

    imgage.style.transform = `rotateX(${x}deg) rotateY(${-y}deg)`
})

imgage.addEventListener("mousemove", (dets) => {
    setTimeout(() => {
        imgage.style.transform = `rotateX(0deg) rotateY(0deg)`
    }, 200);
 
});