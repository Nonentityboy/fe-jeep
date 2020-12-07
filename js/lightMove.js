const cutHandsDiv = document.getElementById('cut-hands')

const container = document.getElementById("container");

const kmlight = document.getElementById("km-light");

const music_text = document.getElementById("music-text-detail");


const maxLeft = cutHandsDiv.offsetLeft - body.offsetLeft;


var lightline = document.querySelector(".line");

var lightlinenone = document.querySelector(".noneline");

lightlinenone.style.display = 'none';

let startX;
let x;

cutHandsDiv.addEventListener('touchstart', function (e) {
    // 获取手指初始坐标 
    startX = e.targetTouches[0].pageX;
    x = this.offsetLeft;
    this.style.boxShadow = '0 0 15px rgba(0, 0, 0, .6)';
});


// 手指按住移动 
cutHandsDiv.addEventListener('touchmove', function (e) {
    // 计算手指的移动距离：手指移动之后的坐标减去手指初始的坐标 
    let moveX = e.targetTouches[0].pageX - startX;

    let lastLeft = x + moveX;

    //防止超出父元素范围
    if (lastLeft < 0) lastLeft = 0;
    if (lastLeft > maxLeft - 200) lastLeft = maxLeft - 200;

    // 移动盒子 盒子原来的位置 + 手指移动的距离 
    this.style.left = lastLeft + 'px';
    // 阻止屏幕滚动的默认行为 
    e.preventDefault();
});
// 手指移动结束
cutHandsDiv.addEventListener('touchend', function () {
    console.log("手指离开！")
    lightline.style.display = 'none';
    lightlinenone.style.display = 'block';
    setTimeout(() => {
        container.style.display = "none";
        music_text.style.display = "none";
        kmlight.style.display = "none";
        jjIsDog();
    }, 0);
})


function jjIsDog() {
    const starGroup = [
        '',
        document.getElementById('musician1'),
        document.getElementById('musician2'),
        document.getElementById('musician3')
    ]

    for (let i = 1; i < 7; i++) {
        setTimeout(() => {
            starGroup[`${Math.ceil(i / 2)}`].style.opacity = i % 2;
            starGroup[`${Math.ceil(i / 2)}`].style.transition = "ease 1s";
        }, i * 1000);
    }

}
