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

const threeGroupDiv = document.getElementById('threeGroup');
const secondGroupDiv = document.getElementById('secondGroup');

const maxRightKongHou = konghouhandsCutsDiv.offsetRight - body.offsetRight;

console.log(maxRightKongHou)
let startXX;
let xx;

konghouhandsCutsDiv.addEventListener('touchstart', function(e) {
    console.log("手指11")
        // 获取手指初始坐标 
    startXX = e.targetTouches[0].pageX;
    xx = this.offsetRight;
    this.style.boxShadow = '0 0 15px rgba(0, 0, 0, .6)';
});

konghouhandsCutsDiv.addEventListener('touchmove', function(e) {
    // 计算手指的移动距离：手指移动之后的坐标减去手指初始的坐标 
    let moveX = e.targetTouches[0].pageX - startXX;

    let lastRight = xx + moveX;

    //防止超出父元素范围
    if (lastRight < 0) lastRight = 0;
    if (lastRight > maxRightKongHou) lastRight = maxRightKongHou;

    // 移动盒子 盒子原来的位置 + 手指移动的距离 
    this.style.right = lastRight + 'px';
    // 阻止屏幕滚动的默认行为 
    e.preventDefault();
});

// 手指移动结束
konghouhandsCutsDiv.addEventListener('touchend', function(e) {
    secondGroupDiv.style.display = "none";
    threeGroupDiv.style.display = "block";
    e.preventDefault();
})


// 嵇康铜盘
textjikangimg.addEventListener('touchstart', function(e) {
    console.log(11111)
    const btn = document.getElementById('jikangimgtongpan');
    btn.style.opacity = 1;
    e.preventDefault();
})

textjikangimg.addEventListener('touchend', function(e) {
    const btn = document.getElementById('jikangimgtongpan');
    btn.style.opacity = 0;
    e.preventDefault();
})

// 阮籍铜盘
textruanjiimg.addEventListener('touchstart', function(e) {
    const btn1 = document.getElementById('ruanjiimgtongpan');
    btn1.style.opacity = 1;
    e.preventDefault();
})
textruanjiimg.addEventListener('touchend', function(e) {
        const btn1 = document.getElementById('ruanjiimgtongpan');
        btn1.style.opacity = 0;
        e.preventDefault();
    })
    // 伯牙铜盘
textboyaimg.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('boyaimgtongpan');
    btn.style.opacity = 1;
    e.preventDefault();
})

textboyaimg.addEventListener('touchend', function(e) {
    const btn = document.getElementById('boyaimgtongpan');
    btn.style.opacity = 0;
    e.preventDefault();
})

// 孔子铜盘
textkongziimg.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('kongziimgtongpan');
    btn.style.opacity = 1;
    e.preventDefault();
})

textkongziimg.addEventListener('touchend', function(e) {
    const btn = document.getElementById('kongziimgtongpan');
    btn.style.opacity = 0;
    e.preventDefault();
})

// 蔡邕铜盘
textcaiyongimg.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('caiyongimgtongpan');
    btn.style.opacity = 1;
    e.preventDefault();
})

textcaiyongimg.addEventListener('touchend', function(e) {
    const btn = document.getElementById('caiyongimgtongpan');
    btn.style.opacity = 0;
    e.preventDefault();
})

// 董廷兰铜盘
textdongtinglanimg.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('dongtinglanimgtongpan');
    btn.style.opacity = 1;
    e.preventDefault();
})

textdongtinglanimg.addEventListener('touchend', function(e) {
    const btn = document.getElementById('dongtinglanimgtongpan');
    btn.style.opacity = 0;
    e.preventDefault();
})

// 郭楚忘铜盘
textguochuwangimg.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('guochuwangimgtongpan');
    btn.style.opacity = 1;
    e.preventDefault();
})

textguochuwangimg.addEventListener('touchend', function(e) {
    const btn = document.getElementById('guochuwangimgtongpan');
    btn.style.opacity = 0;
    e.preventDefault();
})

// 师旷铜盘
textshikuangimg.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('shikuangimgtongpan');
    btn.style.opacity = 1;
    e.preventDefault();
})

textshikuangimg.addEventListener('touchend', function(e) {
    const btn = document.getElementById('shikuangimgtongpan');
    btn.style.opacity = 0;
    e.preventDefault();
})