const prevBtn = document.querySelector("button.prev");
const nextBtn = document.querySelector("button.next");
const circles = Array.from(document.getElementsByClassName("circle"));
const progress = document.querySelector(".progress");
let activeCircles = 1;

window.onresize = checkSize;
window.addEventListener('DOMContentLoaded', checkSize());

function checkSize() {
    circles.forEach(circle => circle.classList.remove("d-none"));
    if (window.innerWidth <= 650 && window.innerWidth > 480) {
        circles[7].classList.add("d-none");
        circles[6].classList.add("d-none");
    }

    if (window.innerWidth <= 480) {
        circles[7].classList.add("d-none");
        circles[6].classList.add("d-none");
        circles[5].classList.add("d-none");
    }
}
let visibleCircles = circles.filter(circle => !circle.classList.contains("d-none"));
console.log(visibleCircles);

prevBtn.onclick = decreaseProgress;
nextBtn.onclick = increaseProgress;

function increaseProgress() {
    console.log("increased");
    if (activeCircles === visibleCircles.length) {
        activeCircles = visibleCircles.length;
    } else {
        activeCircles ++;
    }
    updateProgress();
};

function decreaseProgress() {
    console.log("decreased");
    if (activeCircles === 1) {
        activeCircles = 1;
    } else {
        activeCircles--;
    }
    updateProgress();
}

function updateProgress () {
    progress.style.width = `${(activeCircles-1) * Math.ceil(100/visibleCircles.length+1.2)}%`;
    visibleCircles.forEach((circle, index) => {
        if (activeCircles >= index+1) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });
}