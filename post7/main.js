const pre = document.querySelector("pre");

document.addEventListener("mousemove", (e) => {
  rotateElement(e, pre);
});

function rotateElement(event, element) {
  const x = event.clientX;
  const y = event.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((x - middleX) / middleX) * 100;
  const offsetY = ((y - middleY) / middleY) * 100;

  element.style.setProperty("--rotateX", offsetX + "deg");
  element.style.setProperty("--rotateY", -1 * offsetY + "deg");
}
