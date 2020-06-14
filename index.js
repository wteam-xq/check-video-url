"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUrl = void 0;
function checkUrl(urls, checkSuccess) {
    var _loop_1 = function (i) {
        var videoUrl = urls[i];
        var videoDom = document.createElement('video');
        videoDom.src = videoUrl;
        videoDom.onloadeddata = function () {
            checkSuccess(i, 1);
        };
        videoDom.onerror = function () {
            checkSuccess(i, 0);
        };
    };
    for (var i = 0; i < urls.length; i++) {
        _loop_1(i);
    }
}
exports.checkUrl = checkUrl;
