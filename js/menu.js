// Hamburger menu toggle — vanilla JS only
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");

if (toggle && menu) {
    toggle.addEventListener("click", () => {
        const isOpen = !menu.classList.contains("hidden");
        menu.classList.toggle("hidden");
        toggle.setAttribute("aria-expanded", String(!isOpen));
        toggle.setAttribute(
            "aria-label",
            !isOpen ? "Fermer le menu" : "Ouvrir le menu",
        );
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !menu.classList.contains("hidden")) {
            menu.classList.add("hidden");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Ouvrir le menu");
            toggle.focus();
        }
    });
}
