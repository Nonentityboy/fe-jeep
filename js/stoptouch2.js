// const imgListnerClickDiv = document.getElementById('imgListnerClick');
const isShowImgDiv = document.getElementById('isShowImg');

function clickXcxImg() {
    if (isShowImgDiv.style.display === 'none') {
        isShowImgDiv.style.display = "block";
    }
}

function clickEntry() {
    if (isShowImgDiv.style.display === 'block') {
        isShowImgDiv.style.display = "none";
    }
}