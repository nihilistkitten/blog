const DARKMODE_COOKIE_NAME = "dark-theme";
const DARKMODE_CLASS = "dark-theme";
const LIGHTMODE_CLASS = "light-theme";

const FONT_COOKIE_NAME = "monospace-font";
const MONOSPACE_FONT_FAMILY =
    'Inconsolata, Monaco, "Lucida Console", Courier, monospace';
const PROPORTIONAL_FONT_FAMILY = "Lato, Helvetica, Arial, sans-serif";

window.onload = () => {
  setColorschemeOnload();
  setFontOnload();
};

function setFontOnload() {
  var monospace = check_cached_font_preference();

  if (monospace == null) {
    monospace = false;
  }

  setMonospaceFont(monospace);
  if (monospace) {
    if ((slider = document.getElementById("font-slider")) != null) {
      slider.checked = true;
    }
  }
}

/// check the preferred font from localstorage
function check_cached_font_preference() {
  switch (localStorage.getItem(FONT_COOKIE_NAME)) {
  case "true":
    return true;
  case "false":
    return false;
  default:
    return null;
  }
}

function setMonospaceFont(monospace) {
  if (monospace) {
    document.body.style.fontFamily = MONOSPACE_FONT_FAMILY;
  } else {
    document.body.style.fontFamily = PROPORTIONAL_FONT_FAMILY;
  }
}

function togglePreferredFont() {
  var monospace = document.body.style.fontFamily == MONOSPACE_FONT_FAMILY;
  setMonospaceFont(!monospace);
  localStorage.setItem(FONT_COOKIE_NAME, !monospace);
}

function setColorschemeOnload() {
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
}

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
