const DARKMODE_COOKIE_NAME = "dark-mode";
const DARKMODE_CLASS = "dark-mode";
const LIGHTMODE_CLASS = "light-mode";

window.onload = () => {
  var darkmode = check_cached_colorscheme_preference();

  if (darkmode == null) {
    darkmode = check_mediaquery_colorscheme_preference();
  }

  setDarkMode(darkmode);
  if (darkmode) {
    if ((slider = document.getElementById("darkmode-slider")) != null) {
      slider.checked = true;
    }
  }
};

/// check the colorscheme from localstorage
function check_cached_colorscheme_preference() {
  switch (localStorage.getItem(DARKMODE_COOKIE_NAME)) {
  case "true":
    return true;
  case "false":
    return false;
  default:
    return null;
  }
}

/// check the colorscheme from mediaquery
function check_mediaquery_colorscheme_preference() {
  return window.matchMedia("(prefers-color-scheme)").matches;
}

function setDarkMode(darkmode) {
  if (darkmode) {
    document.body.classList.add(DARKMODE_CLASS);
    document.body.classList.remove(LIGHTMODE_CLASS);
  } else {
    document.body.classList.add(LIGHTMODE_CLASS);
    document.body.classList.remove(DARKMODE_CLASS);
  }
}

function toggleDarkMode() {
  var darkmode = document.body.classList.contains(DARKMODE_CLASS);
  setDarkMode(!darkmode);
  localStorage.setItem(DARKMODE_COOKIE_NAME, !darkmode);
}
