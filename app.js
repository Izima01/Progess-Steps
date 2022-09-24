const prevBtn = document.querySelector("button.prev");
const nextBtn = document.querySelector("button.next");
const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");
let activeCircles = 1;

prevBtn.onclick = decreaseProgress;
nextBtn.onclick = increaseProgress;

function increaseProgress() {
    console.log("increased");
    if (activeCircles === circles.length) {
        activeCircles = circles.length;
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
    progress.style.width = `${(activeCircles-1) *Math.ceil(100/circles.length+1)}%`;
    circles.forEach((circle, index) => {
        if (activeCircles >= index+1) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });
}