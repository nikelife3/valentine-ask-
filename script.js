document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("response").innerText = "LETS GOOO! ❤️ Let me show you right, for good.";
});

document.getElementById("no").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
