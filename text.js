const block = document.getElementById("block");

block.addEventListener("mousedown", (event) => {
    if (event.button === 2) {
        block.addEventListener("mousemove", resizeBlock);
    }
});

block.addEventListener("mouseup", () => {
    block.removeEventListener("mousemove", resizeBlock);
});

function resizeBlock(event) {
    const x = event.clientX;
    const y = event.clientY;

    block.style.width = `${x}px`;
    block.style.height = `${y}px`;
}
