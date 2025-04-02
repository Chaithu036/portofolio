document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Toggle Mobile Menu
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Smooth Scroll for Navigation Links & Contact Button
    document.querySelectorAll(".nav-links a, .btn-group .btn:last-child").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href") ? this.getAttribute("href").substring(1) : "contact";
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: "smooth"
                });
            }
            navLinks.classList.remove("active"); // Close menu after clicking (mobile)
        });
    });

    // Scroll to Top when Clicking the Logo
    document.querySelector(".logo").addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // GitHub Button - Open in New Tab
    document.querySelector(".visit-btn").addEventListener("click", function () {
        window.open("https://github.com/Chaithu036", "_blank"); // Replace with actual GitHub profile link
    });

    // Download CV Button
    document.querySelector(".btn-group .btn:first-child").addEventListener("click", function () {
     //   window.location.href = "cv.pdf"; // Replace with actual CV file path
    });

    // Contact Form Submission
    document.querySelector(".input-box .btn").addEventListener("click", function () {
        const emailInput = document.querySelector(".input-box input").value;
        if (emailInput.trim() !== "") {
            alert(`Thank you! We will contact you at ${emailInput}`);
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // Project Buttons (Live Demo & GitHub Repo)
    document.querySelectorAll(".project-card .btn-group .btn").forEach(button => {
        button.addEventListener("click", function () {
            const buttonText = this.textContent.trim();
            if (buttonText === "Live Demo") {
           window.open("https://your-live-demo.com", "_blank"); // Replace with actual demo link
            }else if (buttonText === "Github Repo") {
                window.open("https://github.com/Chaithu036?tab=repositories", "_blank"); // Replace with actual repo link
            }
        });
    });

    // Make GitHub & LinkedIn Icons Clickable
    document.querySelector(".github-icon").addEventListener("click", function () {
        window.open("https://github.com/Chaithu036", "_blank"); // Replace with actual GitHub link
    });

    document.querySelector(".linkedin-icon").addEventListener("click", function () {
        window.open("http://www.linkedin.com/in/chaitanya333", "_blank"); // Replace with actual LinkedIn link
    });

    // Close Menu on Outside Click (For Mobile)
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});





























