const colorModeItem = "color-mode";
const bodyTag = "body";
const lightId = "light";
const darkId = "dark";

const setColorMode = (color) => {
  document.querySelector(bodyTag).classList = color;
  document.getElementById(color).click();
};

const setBySystemPreset = () => {
  const systemPreset = window.matchMedia("(prefers-color-scheme: light)")
    .matches
    ? lightId
    : darkId;

  localStorage.removeItem(colorModeItem);
  localStorage.setItem(colorModeItem, color);
  setColorMode(systemPreset);
};

const getColorMode = () => {
  const mode = localStorage.getItem(colorModeItem);
  if (mode) {
    setColorMode(mode);
  }
};

const checkModeChange = () => {
  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", (event) => {
      setBySystemPreset();
    });
};

getColorMode();
checkModeChange();

const radioButtons = document.querySelectorAll(".toggle__wrapper input");

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("click", (event) => {
    document.getElementById(darkId).checked
      ? setColorMode(darkId)
      : setColorMode(lightId);
  });
}
