document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    // --- Theme Toggle Logic ---
    // Check if user has a preference saved in local storage, default to 'dark'
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeButtonText(savedTheme);

    themeToggle.addEventListener("click", () => {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let targetTheme = currentTheme === "light" ? "dark" : "light";
        
        document.documentElement.setAttribute("data-theme", targetTheme);
        localStorage.setItem("theme", targetTheme);
        updateThemeButtonText(targetTheme);
    });

    function updateThemeButtonText(theme) {
        if (theme === "dark") {
            themeToggle.innerText = "☀️ Light";
        } else {
            themeToggle.innerText = "🌙 Dark";
        }
    }

    // --- Mobile Menu Toggle Logic ---
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});
