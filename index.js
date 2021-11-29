const hueInput = document.querySelector("input#hue-input");
hueInput?.addEventListener("input", (event) => {
  document.documentElement.style.setProperty(
    "--palette-hue",
    event.target.value
  );
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
  const stylesheet = document.styleSheets.item(2);
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

const fontButton = document.querySelector("button#font-toggle");
fontButton?.addEventListener("click", function () {
  const foutClassName = "fonts-loaded";
  const rootElement = document.documentElement;

  const isLoadedFontActive = rootElement.classList.contains(foutClassName);
  if (isLoadedFontActive) {
    // if the loaded font is enabled, we remove the class from the root element
    rootElement.classList.remove(foutClassName);
    return;
  }
  // otherwise we activate dark mode by adding the class to the root element
  rootElement.classList.add(foutClassName);
});
