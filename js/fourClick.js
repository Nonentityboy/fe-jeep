const headerBottomHandsDiv = document.getElementById('header-bottom-text-group-three-hands');

const threeGroupInfoDiv = document.getElementById('threeGroup');



headerBottomHandsDiv.addEventListener('touchend', function(e) {
    threeGroupInfoDiv.style.display = "none";
    toolDiv.style.background = "url('https://s3.ax1x.com/2020/12/13/rZWKYt.png') no-repeat #efeff4";
    toolDiv.style.backgroundSize = "100%";
    toolDiv.style.display = "block"
    toolDiv.style.width = "100%";
    toolDiv.style.height = "7260px";
    e.preventDefault();
})