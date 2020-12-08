// 获取图片节点
const konghouhandsCutsDiv = document.getElementById('konghouhands')
const textjikangimg = document.getElementById('jikangimg');
const textruanjiimg = document.getElementById('ruanjiimg');
const textboyaimg = document.getElementById('boyaimg');
const textkongziimg = document.getElementById('kongziimg');
const textcaiyongimg = document.getElementById('caiyongimg');
const textdongtinglanimg = document.getElementById('dongtinglanimg');
const textguochuwangimg = document.getElementById('guochuwangimg');
const textshikuangimg = document.getElementById('shikuangimg');

console.log(123123);

const maxLeftKongHou = konghouhandsCutsDiv.offsetLeft - body.offsetLeft;

console.log(maxLeftKongHou)
let startXX;
let xx;

konghouhandsCutsDiv.addEventListener('touchstart', function(e) {
    console.log("手指11")
        // 获取手指初始坐标 
    startXX = e.targetTouches[0].pageX;
    xx = this.offsetLeft;
    this.style.boxShadow = '0 0 15px rgba(0, 0, 0, .6)';
});

konghouhandsCutsDiv.addEventListener('touchmove', function(e) {
    // 计算手指的移动距离：手指移动之后的坐标减去手指初始的坐标 
    let moveX = e.targetTouches[0].pageX - startXX;

    let lastLeft = xx + moveX;

    //防止超出父元素范围
    if (lastLeft < 0) lastLeft = 0;
    if (lastLeft > maxLeftKongHou) lastLeft = maxLeftKongHou;

    // 移动盒子 盒子原来的位置 + 手指移动的距离 
    this.style.left = lastLeft + 'px';
    // 阻止屏幕滚动的默认行为 
    e.preventDefault();
});

// 手指移动结束
konghouhandsCutsDiv.addEventListener('touchend', function() {
    console.log("手指离开！")
})

console.log(11111);


// 嵇康铜盘
textjikangimg.addEventListener('touchstart', function() {
    console.log(11111)
    const btn = document.getElementById('jikangimgtongpan');
    btn.style.opacity = 1;
})

textjikangimg.addEventListener('touchend', function() {
    const btn = document.getElementById('jikangimgtongpan');
    btn.style.opacity = 0;
})

// 阮籍铜盘
textruanjiimg.addEventListener('touchstart', function() {
    const btn1 = document.getElementById('ruanjiimgtongpan');
    btn1.style.opacity = 1;
})
textruanjiimg.addEventListener('touchend', function() {
        const btn1 = document.getElementById('ruanjiimgtongpan');
        btn1.style.opacity = 0;
    })
    // 伯牙铜盘
textboyaimg.addEventListener('touchstart', function() {
    const btn = document.getElementById('boyaimgtongpan');
    btn.style.opacity = 1;
})

textboyaimg.addEventListener('touchend', function() {
    const btn = document.getElementById('boyaimgtongpan');
    btn.style.opacity = 0;
})

// 孔子铜盘
textkongziimg.addEventListener('touchstart', function() {
    const btn = document.getElementById('kongziimgtongpan');
    btn.style.opacity = 1;
})

textkongziimg.addEventListener('touchend', function() {
    const btn = document.getElementById('kongziimgtongpan');
    btn.style.opacity = 0;
})

// 蔡邕铜盘
textcaiyongimg.addEventListener('touchstart', function() {
    const btn = document.getElementById('caiyongimgtongpan');
    btn.style.opacity = 1;
})

textcaiyongimg.addEventListener('touchend', function() {
    const btn = document.getElementById('caiyongimgtongpan');
    btn.style.opacity = 0;
})

// 董廷兰铜盘
textdongtinglanimg.addEventListener('touchstart', function() {
    const btn = document.getElementById('dongtinglanimgtongpan');
    btn.style.opacity = 1;
})

textdongtinglanimg.addEventListener('touchend', function() {
    const btn = document.getElementById('dongtinglanimgtongpan');
    btn.style.opacity = 0;
})

// 郭楚忘铜盘
textguochuwangimg.addEventListener('touchstart', function() {
    const btn = document.getElementById('guochuwangimgtongpan');
    btn.style.opacity = 1;
})

textguochuwangimg.addEventListener('touchend', function() {
    const btn = document.getElementById('guochuwangimgtongpan');
    btn.style.opacity = 0;
})

// 师旷铜盘
textshikuangimg.addEventListener('touchstart', function() {
    const btn = document.getElementById('shikuangimgtongpan');
    btn.style.opacity = 1;
})

textshikuangimg.addEventListener('touchend', function() {
    const btn = document.getElementById('shikuangimgtongpan');
    btn.style.opacity = 0;
})