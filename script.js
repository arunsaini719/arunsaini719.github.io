const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#site-nav");

if (menuButton && navigation) {
  const closeMenu = ({ restoreFocus = false } = {}) => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");

    if (restoreFocus) menuButton.focus();
  };

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeMenu());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("open")) {
      closeMenu({ restoreFocus: true });
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (
      navigation.classList.contains("open") &&
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener("focusin", (event) => {
    if (
      navigation.classList.contains("open") &&
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
