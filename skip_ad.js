// ==UserScript==
// @name         Hide Web Player Ads
// @namespace    http://your.namespace/
// @version      0.1
// @description  Hide video ads
// @author       You
// @match        *://chzzk.naver.com/live/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    const f =() => {
        const skip = document.querySelector('.btn_skip');
        if (skip){
            skip.click();
        }
    }
    setInterval(f, 100);
})();