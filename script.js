// ================= NAV SCROLL SPY & INTERACTIONS =================

document.addEventListener("DOMContentLoaded", () => {

    // Scroll-based nav active link highlight
    const sections = document.querySelectorAll("section[id]");
    const navItems = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        navItems.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});


// ================= LET'S TALK =================

function contactMe() {

    window.location.href =
        "mailto:yourmail@gmail.com?subject=Portfolio Contact";
}


// ================= RESUME =================

function downloadResume() {

    const link = document.createElement("a");

    link.href = "Resume.pdf";
    link.download = "Tarun_Bhoya_Resume.pdf";

    link.click();
}


// ================= NAV CLICK HANDLER =================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function() {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});