let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navs").style.top = "0";
        document.getElementById("navs").style.transition = "top 0.2s ease-in-out";
    } else {
        document.getElementById("navs").style.top = "-50px";
        document.getElementById("navs").style.transition = "top 0.2s ease-in-out";
    }
    prevScrollpos = currentScrollPos;
}


const elements = [
    { selector: "#projects", className: ".project" },
    { selector: "#skills", className: ".skill-box" },
    { selector: "#contact", className: ".conno" },
];

function checkPositionForElements(elements, callback) {
    const windowHeight = window.innerHeight;
    elements.forEach(({ selector, className }) => {
        const container = document.querySelector(selector);
        const elements = container.querySelectorAll(className);
        window.addEventListener("scroll", () => {
            for (let i = 0; i < elements.length; i++) {
                const positionFromTop = elements[i].getBoundingClientRect().top;
                if (positionFromTop - windowHeight <= 0) {
                    elements[i].classList.add("appear");
                    callback && callback(elements[i]);
                }
            }
        });
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

checkPositionForElements(elements, async element => {
    await sleep(250);
});
