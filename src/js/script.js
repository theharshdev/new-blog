// Apply saved theme on load
(function () {
  const root = document.documentElement;
  if (
    localStorage.theme === "dark" ||
    (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
})();

// Toggle on button click
document.getElementById("theme-btn").addEventListener("click", () => {
  const root = document.documentElement;
  const isDark = root.classList.toggle("dark");
  localStorage.theme = isDark ? "dark" : "light";
});

const openBtn = document.getElementById("menu-open-btn");
const closeBtn = document.getElementById("menu-close-btn");
const menuBox = document.getElementById("menu-box");

function openMenu() {
  // Slide in
  menuBox.classList.remove("translate-x-full");
  menuBox.classList.add("translate-x-0");

  // Lock body scroll
  document.body.classList.add("overflow-hidden");
}

function closeMenu() {
  // Slide out
  menuBox.classList.remove("translate-x-0");
  menuBox.classList.add("translate-x-full");

  // Unlock body scroll
  document.body.classList.remove("overflow-hidden");
}

// Open
openBtn.addEventListener("click", openMenu);

// Close button
closeBtn.addEventListener("click", closeMenu);

// Click outside to close
document.addEventListener("click", (e) => {
  const isMenuOpen = menuBox.classList.contains("translate-x-0");

  if (isMenuOpen && !menuBox.contains(e.target) && !openBtn.contains(e.target)) {
    closeMenu();
  }
});

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});
