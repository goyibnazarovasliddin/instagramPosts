const syncPointer = ({ x: pointerX, y: pointerY }) => {
    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xPoint = (pointerX / window.innerWidth).toFixed(2);
    const yPoint = (pointerY / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty("--x", x);
    document.documentElement.style.setProperty("--xPoint", xPoint);
    document.documentElement.style.setProperty("--y", y);
    document.documentElement.style.setProperty("--yPoint", yPoint);
};

document.body.addEventListener("pointermove", syncPointer);

let clicked = false;
document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", () => {
        if (!clicked) {
            document.documentElement.style.setProperty("--size", "200px");
            clicked = true;
        } else {
            document.documentElement.style.setProperty("--size", "100px");
            clicked = false;
        }
    });
});
