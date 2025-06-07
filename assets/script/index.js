const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (move) => {
    const xPos = move.offsetX + "px"; 
    const yPos = move.offsetY + "px";
    const spanEl = document.createElement("span");
    const size = Math.random() * 100 + "px";
    spanEl.style.left = xPos;
    spanEl.style.top = yPos;
    spanEl.style.width = size;
    spanEl.style.height = size;
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});