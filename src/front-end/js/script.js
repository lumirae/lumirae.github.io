document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.body.setAttribute("data-theme", currentTheme);
    toggleBtn.classList.toggle("active", currentTheme === "dark");
    updateSliderPosition(currentTheme);
  }

  toggleBtn.addEventListener("click", function () {
    document.body.setAttribute(
      "data-theme",
      toggleBtn.classList.contains("active") ? "light" : "dark"
    );
    toggleBtn.classList.toggle("active");
    const theme = toggleBtn.classList.contains("active") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    updateSliderPosition(theme);
  });

  function updateSliderPosition(theme) {
    const switchElement = document.querySelector(".switch");
    switchElement.style.transform =
      theme === "dark" ? "translateX(calc(300px - 120px))" : "translateX(0)";
  }
});
