const abcelleraSection = document.querySelector("#experience_abcellera");
abcelleraSection?.addEventListener("mouseenter", function () {
  abcelleraSection.querySelector("animate").beginElement();
});

const themeButton = document.querySelector("button#dark-mode");
themeButton?.addEventListener("click", function () {
  const darkClassName = "dark";
  const rootElement = document.documentElement;

  const isDarkModeActive = rootElement.classList.contains(darkClassName);
  if (isDarkModeActive) {
    // if the dark theme is active, we remove the class from the root element
    rootElement.classList.remove(darkClassName);
    // themeButton.textContent = "🌙";
    // themeButton.firstChild.textContent = "Dark";
    return;
  }

  // otherwise we activate dark mode by adding the class to the root element
  rootElement.classList.add(darkClassName);
  // themeButton.firstChild.textContent = "Light";
});
