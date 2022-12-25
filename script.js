// ==UserScript==
// @name         Modern States Speed Options
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Additional Speed options for modern states courses
// @author       Mitchell Sharma
// @match        https://courses.modernstates.org/courses/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
        let menu = document.querySelector('.video-speeds,.menu');
        let speedOptions = ["1.75", "2.00", "2.25", "2.50"];
        for (let i = 0; i < 4; i++){
            let newOptionDiv = `<li data-speed="${speedOptions[i]}"><button class="control speed-option" tabindex="-1" aria-pressed="false">${speedOptions[i]}x</button></li>`
            menu.insertAdjacentHTML("afterbegin",newOptionDiv);
        }
})();
