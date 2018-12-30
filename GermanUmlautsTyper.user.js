// ==UserScript==
// @name         German Umlauts Typer
// @namespace    http://eresdev.com
// @version      1.0.0
// @description  Allows you to type German Umlauts easily with main keyboard key combinations without ust ALT+ NUM keys combination. Currently, it only works for Windows keyboard. It has not been tested for Mac.
// @author       EresDev
// @match        https://www.memrise.com/course/*
// @updateURL      https://github.com/EresDev/GermanUmlautsTyper/blob/master/GermanUmlautsTyper.user.js
// @downloadURL    https://github.com/EresDev/GermanUmlautsTyper/blob/master/GermanUmlautsTyper.user.js
// @grant        none
// ==/UserScript==

function liveInputWatch(){
    setInterval(function(){
        let input_elements = document.getElementsByTagName("input");

        for(let i = 0; i < input_elements.length; ++i) {
            if(!input_elements[i].hasAttribute('data-umlautsConnected')) {
                addEventListener(input_elements[i]);
            }
        }
    }, 500);
}
function typeCharAtCursor(el, newText)
{
    var start = el.selectionStart
    var end = el.selectionEnd
    var text = el.value
    var before = text.substring(0, start)
    var after  = text.substring(end, text.length)
    el.value = (before + newText + after)
    el.selectionStart = el.selectionEnd = start + newText.length
    el.focus()
}

function addEventListener(element)
{
        element.addEventListener("keydown", function (zEvent) {
            if (zEvent.altKey && zEvent.shiftKey) {
                switch (zEvent.code) {
                    case "KeyP":
                        typeCharAtCursor(this, "Ö");
                        break;

                    case "KeyQ":
                        typeCharAtCursor(this, "Ä");
                        break;

                    case "KeyY":
                        typeCharAtCursor(this, "Ü");
                        break;
                }
            } else if (zEvent.altKey) {
                switch (zEvent.code) {
                    case "KeyP":
                        typeCharAtCursor(this, "ö");
                        break;

                    case "KeyQ":
                        typeCharAtCursor(this, "ä");
                        break;

                    case "KeyY":
                        typeCharAtCursor(this, "ü");
                        break;

                    case "KeyS":
                        typeCharAtCursor(this, "ß");
                        break;
                }
            }
        });

        element.setAttribute("data-umlautsConnected", true);
}


(function() {
    'use strict';

    liveInputWatch();
})();