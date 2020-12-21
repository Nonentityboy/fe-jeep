const xcxEntreyIsWx = document.getElementById('xcxEntreyIsWx');
const xcxEntreyNotWx = document.getElementById('xcxEntreyNotWx');

window.addEventListener("load", function(event) {
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    if (isWeixin) {
        xcxEntreyIsWx.style.display = 'block';
    } else {
        xcxEntreyNotWx.style.display = 'block';
    }
});