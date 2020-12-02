const cutHandsDiv = document.getElementById('cut-hands')

const maxLeft = cutHandsDiv.offsetLeft - body.offsetLeft;

let startX;
let x;

cutHandsDiv.addEventListener('touchstart', function(e) {
    // 获取手指初始坐标 
    startX = e.targetTouches[0].pageX;
    x = this.offsetLeft;
    this.style.boxShadow = '0 0 15px rgba(0, 0, 0, .6)';
});


// 手指按住移动 
cutHandsDiv.addEventListener('touchmove', function(e) {
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