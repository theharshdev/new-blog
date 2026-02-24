// Apply saved theme on load
(function () {
  const root = document.documentElement;
  if (
    localStorage.theme === "dark" ||
    (!localStorage.theme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
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
