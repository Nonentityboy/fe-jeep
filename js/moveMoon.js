// 获得盒子最大移动位置
const body = document.querySelector('body');
const div = document.getElementById('footer-bottom-middle');
const maxTop = body.offsetHeight - div.offsetHeight;
// 获取手指初始坐标 
var startY = 0;
// 获得盒子原来的位置 
var y = 0;
// 手指触摸 
div.addEventListener('touchstart', function(e) {
    console.log(1)
        // 获取手指初始坐标 
    startY = e.targetTouches[0].pageY;
    y = this.offsetTop;
    this.style.boxShadow = '0 0 15px rgba(0, 0, 0, .6)';
});
// 手指离开 
div.addEventListener('touchend', function(e) {
    this.style.boxShadow = '';
});
// 手指按住移动 
div.addEventListener('touchmove', function(e) {
    const body = document.querySelector('body');
    const div = document.getElementById('footer-bottom-middle');

    const maxTop = body.offsetHeight - div.offsetHeight;
    // 计算手指的移动距离：手指移动之后的坐标减去手指初始的坐标 
    let moveY = e.targetTouches[0].pageY - startY;
    let lastTop = y + moveY;
    //防止超出父元素范围
    if (lastTop <= 0) lastTop = 0;
    if (lastTop >= maxTop) lastTop = maxTop;
    // 移动盒子 盒子原来的位置 + 手指移动的距离 
    this.style.top = lastTop + 'px';
    // 控制台 打印位置
    console.log('顶部最大高度' + maxTop)
    console.log('距离顶部高度' + lastTop + 'px');
    // 阻止屏幕滚动的默认行为 
    e.preventDefault();
});