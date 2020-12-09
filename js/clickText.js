//获取点击事件的元素
const shenren = document.getElementById('shenren');
const zhuangtai = document.getElementById('zhuangtai');
const meihua = document.getElementById('meihua');
const guangling = document.getElementById('guangling');
const nichang = document.getElementById('nichang');
const yueer = document.getElementById('yueer');
const xiaoxiang = document.getElementById('xiaoxiang');

//添加事件监听函数
//神人畅
shenren.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('shenrenClick');
    shenren.style.opacity = 0;
    btn.style.opacity = 1;

    //audio.play();// 这个就是播放  
    const audio = document.getElementById('shenrenchang');
    audio.play();
    e.preventDefault();
})

shenren.addEventListener('touchend', function(e) {
    const btn = document.getElementById('shenrenClick');
    shenren.style.opacity = 1;
    btn.style.opacity = 0;

    //audio.pause();// 这个就是暂停
    const audio = document.getElementById('shenrenchang');
    audio.pause();
    e.preventDefault();
})

//妆台秋思
zhuangtai.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('zhuangtaiClick');
    zhuangtai.style.opacity = 0;
    btn.style.opacity = 1;

    //播放
    const audio = document.getElementById('zhuangtaiqiusi');
    audio.play();
    e.preventDefault();
})

zhuangtai.addEventListener('touchend', function(e) {
    const btn = document.getElementById('zhuangtaiClick');
    zhuangtai.style.opacity = 1;
    btn.style.opacity = 0;

    //暂停
    const audio = document.getElementById('zhuangtaiqiusi');
    audio.pause();
    e.preventDefault();
})

//梅花三弄
meihua.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('meihuaClick');
    meihua.style.opacity = 0;
    btn.style.opacity = 1;

    //播放
    const audio = document.getElementById('meihuasannong');
    audio.play();
    e.preventDefault();
})

meihua.addEventListener('touchend', function(e) {
    const btn = document.getElementById('meihuaClick');
    meihua.style.opacity = 1;
    btn.style.opacity = 0;

    //暂停
    const audio = document.getElementById('meihuasannong');
    audio.pause();
    e.preventDefault();
})

//广陵散
guangling.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('guanglingClick');
    guangling.style.opacity = 0;
    btn.style.opacity = 1;
    //播放
    const audio = document.getElementById('guanglingsan');
    audio.play();
    e.preventDefault();
})

guangling.addEventListener('touchend', function(e) {
    const btn = document.getElementById('guanglingClick');
    guangling.style.opacity = 1;
    btn.style.opacity = 0;
    //暂停
    const audio = document.getElementById('guanglingsan')
    audio.pause();
    e.preventDefault();
})

//霓裳曲
nichang.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('nichangClick');
    nichang.style.opacity = 0;
    btn.style.opacity = 1;

    //播放
    const audio = document.getElementById('nichangqu');
    audio.play();
    e.preventDefault();

})

nichang.addEventListener('touchend', function(e) {
    const btn = document.getElementById('nichangClick');
    nichang.style.opacity = 1;
    btn.style.opacity = 0;

    //暂停
    const audio = document.getElementById('nichangqu')
    audio.pause();
    e.preventDefault();
})

//月儿高
yueer.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('yueerClick');
    yueer.style.opacity = 0;
    btn.style.opacity = 1;

    //播放
    const audio = document.getElementById('yueergao');
    audio.play();
    e.preventDefault();
})

yueer.addEventListener('touchend', function(e) {
    const btn = document.getElementById('yueerClick');
    yueer.style.opacity = 1;
    btn.style.opacity = 0;

    //暂停
    const audio = document.getElementById('yueergao')
    audio.pause();
    e.preventDefault();
})

// 潇湘水云
xiaoxiang.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('xiaoxiangClick');
    xiaoxiang.style.opacity = 0;
    btn.style.opacity = 1;

    //播放
    const audio = document.getElementById('xiaoxiangshuiyun');
    audio.play();
    e.preventDefault();
})

xiaoxiang.addEventListener('touchend', function(e) {
    const btn = document.getElementById('xiaoxiangClick');
    xiaoxiang.style.opacity = 1;
    btn.style.opacity = 0;

    //暂停
    const audio = document.getElementById('xiaoxiangshuiyun')
    audio.pause();
    e.preventDefault();
})