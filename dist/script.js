"use strict";var colorModeItem="color-mode",bodyTag="body",lightId="light",darkId="dark",setColorMode=function(e){document.querySelector(bodyTag).classList=e,document.getElementById(e).click()},setBySystemPreset=function(){var e=window.matchMedia("(prefers-color-scheme: light)").matches?lightId:darkId;localStorage.removeItem(colorModeItem),localStorage.setItem(colorModeItem,color),setColorMode(e)},getColorMode=function(){var e=localStorage.getItem(colorModeItem);e&&setColorMode(e)},checkModeChange=function(){window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",(function(e){setBySystemPreset()}))};getColorMode(),checkModeChange();for(var radioButtons=document.querySelectorAll(".toggle__wrapper input"),i=0;i<radioButtons.length;i++)radioButtons[i].addEventListener("click",(function(e){document.getElementById(darkId).checked?setColorMode(darkId):setColorMode(lightId)}));
//# sourceMappingURL=script.js.map