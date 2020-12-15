const headerBottomHandsDiv = document.getElementById('header-bottom-text-group-three-left');

const threeGroupInfoDiv = document.getElementById('threeGroup');

const fourGroupButtonDiv = document.getElementById('fourGroupButton');


headerBottomHandsDiv.addEventListener('touchend', function(e) {

    const xingxing = [
        document.getElementById('xingxing1'),
        document.getElementById('xingxing2'),
        document.getElementById('xingxing3'),
        document.getElementById('xingxing4'),
        document.getElementById('xingxing5'),
        document.getElementById('xingxing6'),
        document.getElementById('xingxing7'),
    ];

    for (let i = 0; i < 7; i++) {
        xingxing[i].style.opacity = 1;
    }

    setTimeout(() => {
        for (let i = 0; i < 7; i++) {
            xingxing[i].style.opacity = 0;
            xingxing[i].style.transition = 'ease 1s';
        }
    }, 3000);

    setTimeout(() => {
        threeGroupInfoDiv.style.display = "none";
        toolDiv.style.background = "url('https://s3.ax1x.com/2020/12/15/ruO0G6.png') no-repeat #efeff4";
        toolDiv.style.backgroundSize = "cover";
        toolDiv.style.backgroundPosition = "center center"
        toolDiv.style.display = "block"
        toolDiv.style.width = "100%";
        toolDiv.style.height = "100%";
        e.preventDefault();
    }, 4000);
    // 

    setTimeout(() => {
        window.location.href = 'juankuan.html';
    }, 9000);
    // setTimeout(() => {
    //     // 第三幕转第3.5幕的逻辑
    //     toolDiv.style.background = "url('https://s3.ax1x.com/2020/12/13/rZWKYt.png') no-repeat #efeff4";
    //     toolDiv.style.backgroundSize = "100%";
    //     toolDiv.style.display = "block"
    //     fourGroupButtonDiv.style.display = "block";
    //     juankuan.style.display = "block";
    //     toolDiv.style.width = "100%";
    //     toolDiv.style.height = "7260px";
    //     e.preventDefault();
    // }, 10000);
})

// 第三幕转第四幕的逻辑
// setTimeout(() => {
//     threeGroupInfoDiv.style.display = "none";
//     toolDiv.style.background = "url('https://s3.ax1x.com/2020/12/13/rZWKYt.png') no-repeat #efeff4";
//     toolDiv.style.backgroundSize = "100%";
//     toolDiv.style.display = "block"
//     fourGroupButtonDiv.style.display = "block";
//     juankuan.style.display = "block";
//     toolDiv.style.width = "100%";
//     toolDiv.style.height = "7260px";
//     e.preventDefault();
// }, 4000);