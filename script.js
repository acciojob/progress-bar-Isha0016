//your JS code here. If required.
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const circles = [
    document.getElementById("circle-1"),
    document.getElementById("circle-2"),
    document.getElementById("circle-3"),
    document.getElementById("circle-4"),
    document.getElementById("circle-5")
];

let currentActive = 1;

next.addEventListener("click", function () {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
});

prev.addEventListener("click", function () {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

function update() {
    circles.forEach(function (circle, index) {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const activeCircles = document.querySelectorAll(".circle.active");

    progress.style.width =
        ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
}