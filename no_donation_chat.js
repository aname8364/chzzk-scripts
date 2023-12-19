// ==UserScript==
// @name         no donation chat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  .
// @author       You
// @match        *://chzzk.naver.com/live/*
// @grant        GM_addStyle
// ==/UserScript==
(function() {
    'use strict';
    GM_addStyle(`
        div[class*="live_chatting_list_donation"] {
            display: none;
        }
    `)
})();