// 获得盒子最大移动位置
const body = document.querySelector('body');
const div = document.getElementById('footer-bottom-middle');
const maxTop = body.offsetHeight - div.offsetHeight;
// 获取手指初始坐标 
var startY = 0;
// 获得盒子原来的位置 
var y = 0;
var tint;
let lastTop;
// 手指触摸 
div.addEventListener('touchstart', function(e) {
    clearInterval(tint);
    // 获取手指初始坐标 
    startY = e.targetTouches[0].pageY;
    y = this.offsetTop;
});
// 手指离开 
div.addEventListener('touchend', function(e) {
    // 获取月亮的id
    const body = document.querySelector('body');
    const moonDiv = document.getElementById('footer-bottom-middle');

    const headerTextDiv = document.getElementById('header-bottom-text');
    const middleTextDiv = document.getElementById('middle-text-tips');

    // 控制那一块
    const middleTextTipsDiv = document.getElementById('middle-text-tips')

    const maxTop = body.offsetHeight - middleTextTipsDiv.offsetHeight;
    console.log(maxTop, lastTop)
    if (lastTop <= maxTop && lastTop >= maxTop / 2) {
        tint = setInterval(() => {
                middleTextTipsDiv.style.top = maxTop + 'px';
                clearInterval(tint);
            },
            200);
        middleTextTipsDiv.style.transition = "ease 2s";
    } else {
        // // 控制第一幕第一组 字体消失。
        // headerTextDiv.style.opacity = 0;
        // headerTextDiv.style.transition = "ease 2s";
        // middleTextDiv.style.opacity = 0;
        // middleTextDiv.style.transition = "ease 2s";

        // // // 控制第一幕第二组 孔明灯出现
        // // moveStartGroup()

        // // 控制月亮移动
        // moonDiv.style.top = 0;
        // moonDiv.style.opacity = 0;
        // moonDiv.style.transition = "ease 2s";
    }
    moonDiv.style.boxShadow = '';
});
// 手指按住移动 
div.addEventListener('touchmove', function(e) {
    const body = document.querySelector('body');
    const div = document.getElementById('footer-bottom-middle');

    // 控制那一块
    const middleTextTipsDiv = document.getElementById('middle-text-tips')

    const maxTop = body.offsetHeight - div.offsetHeight;
    // 计算手指的移动距离：手指移动之后的坐标减去手指初始的坐标 
    let moveY = e.targetTouches[0].pageY - startY;
    lastTop = y + moveY;

    console.log(lastTop);
    // //防止超出父元素范围
    // if (lastTop <= 0) lastTop = 0;
    // if (lastTop >= maxTop) lastTop = maxTop;
    // 移动盒子 盒子原来的位置 + 手指移动的距离 
    middleTextTipsDiv.style.top = lastTop + 'px';
    // 控制台 打印位置
    // console.log('顶部最大高度' + maxTop)
    // console.log('距离顶部高度' + lastTop + 'px');
    // 阻止屏幕滚动的默认行为 
    e.preventDefault();
});

function moveStartGroup() {
    // 获取孔明灯和孔明灯手势
    const kmLightDiv = document.getElementById('km-light');
    const headerTextGroupTwoDiv = document.getElementById('header-bottom-text-group-two');
    const headerTextDiv = document.getElementById('header-bottom-text');
    const musicTestDetailDiv = document.getElementById('music-text-detail');

    // const starfieldDiv = document.getElementById('starfield');
    // 第一幕第二组的三组星星乐曲特效效果
    const starGroup = [
        '',
        document.getElementById('starGroup1'),
        document.getElementById('starGroup2'),
        document.getElementById('starGroup3')
    ]

    for (let i = 1; i < 7; i++) {
        setTimeout(() => {
            starGroup[`${Math.ceil(i/2)}`].style.opacity = i % 2;
            starGroup[`${Math.ceil(i/2)}`].style.transition = "ease 1s";
        }, i * 1000);
    }

    // 控制孔明灯 及第一幕第二组
    setTimeout(() => {
        headerTextDiv.style.display = 'none';
        headerTextGroupTwoDiv.style.display = 'block';
        kmLightDiv.style.opacity = 1;
        kmLightDiv.style.transition = "ease 2s";
        musicTestDetailDiv.style.display = 'block';
    }, 7000);
}