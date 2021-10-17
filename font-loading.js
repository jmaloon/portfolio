if ("fonts" in document) {
  Promise.all([
    document.fonts.load("400 16px Quicksand"),
    document.fonts.load("500 16px Quicksand"),
    document.fonts.load("700 16px Quicksand"),
  ]).then(function () {
    document.documentElement.classList.add("fonts-loaded");
  });
}
