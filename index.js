const abcelleraSection = document.querySelector("#experience_abcellera");
abcelleraSection?.addEventListener("mouseenter", function () {
  abcelleraSection.querySelector("animate").beginElement();
});

const darkModeButton = document.querySelector("button#dark-mode-toggle");
darkModeButton?.addEventListener("click", function () {
  const darkClassName = "dark";
  const rootElement = document.documentElement;

  const isDarkModeActive = rootElement.classList.contains(darkClassName);
  if (isDarkModeActive) {
    // if the dark theme is active, we remove the class from the root element
    rootElement.classList.remove(darkClassName);
    return;
  }
  // otherwise we activate dark mode by adding the class to the root element
  rootElement.classList.add(darkClassName);
});

const cssButton = document.querySelector("button#css-toggle");
cssButton?.addEventListener("click", function () {
  const stylesheet = document.styleSheets.item(3)
  const isStyleSheetDisabled = stylesheet.disabled;

  // if the stylesheet is already disabled, no need to confirm action
  if (isStyleSheetDisabled) {
    stylesheet.disabled = false;
    return;
  }
  // if the styles are enabled, confirm the action with the user
  const confirmed = window.confirm(
    "The page layout will change. Are you sure you want to disable CSS?"
  );

  if (confirmed) {
    stylesheet.disabled = true; 
  }
});
