// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Hero text animation
window.addEventListener("load", () => {
    document.querySelectorAll(".animate-text").forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    });
});
