function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function () {
        current += increment;
        obj.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

animateValue("count1", 0, 20, 3000); // Change values and duration as needed
animateValue("count2", 0, 7.5, 3000);
animateValue("count3", 0, 24, 3000);
animateValue("count4", 0, 78, 3000);