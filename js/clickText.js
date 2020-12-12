//获取点击事件的元素
const shenren = document.getElementById('shenren');
const zhuangtai = document.getElementById('zhuangtai');
const meihua = document.getElementById('meihua');
const guangling = document.getElementById('guangling');
const nichang = document.getElementById('nichang');
const yueer = document.getElementById('yueer');
const xiaoxiang = document.getElementById('xiaoxiang');
//获取乐器点击事件元素
const xiao = document.getElementById('xiao');
const ruan = document.getElementById('ruan');
const guqin = document.getElementById('guqin');
const konghou = document.getElementById('konghou');
const sheng = document.getElementById('sheng');
const xun = document.getElementById('xun');
const bianzhong = document.getElementById('bianzhong');

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

// 乐器交互
// 萧
xiao.addEventListener('touchstart',function(e) {
    console.log("按下去辽");
    const audio = document.getElementById('xiaomp3');
    audio.play();
    e.preventDefault();
})
xiao.addEventListener('touchend', function (e) {
    const audio = document.getElementById('xiaomp3');
    audio.pause();
    e.preventDefault();
})
// 阮
ruan.addEventListener('touchstart', function (e) {
    console.log("按下去辽");
    const audio = document.getElementById('ruanmp3');
    audio.play();
    e.preventDefault();
})
ruan.addEventListener('touchend', function (e) {
    const audio = document.getElementById('ruanmp3');
    audio.pause();
    e.preventDefault();
})
// 古琴
guqin.addEventListener('touchstart', function (e) {
    console.log("按下去辽");
    const audio = document.getElementById('guqinmp3');
    audio.play();
    e.preventDefault();
})
guqin.addEventListener('touchend', function (e) {
    const audio = document.getElementById('guqinmp3');
    audio.pause();
    e.preventDefault();
})
// 箜篌
konghou.addEventListener('touchstart', function (e) {
    console.log("按下去辽");
    const audio = document.getElementById('konghoump3');
    audio.play();
    e.preventDefault();
})
konghou.addEventListener('touchend', function (e) {
    const audio = document.getElementById('konghoump3');
    audio.pause();
    e.preventDefault();
})
// 笙
sheng.addEventListener('touchstart', function (e) {
    console.log("按下去辽");
    const audio = document.getElementById('shengmp3');
    audio.play();
    e.preventDefault();
})
sheng.addEventListener('touchend', function (e) {
    const audio = document.getElementById('shengmp3');
    audio.pause();
    e.preventDefault();
})
// 埙
xun.addEventListener('touchstart', function (e) {
    console.log("按下去辽");
    const audio = document.getElementById('xunmp3');
    audio.play();
    e.preventDefault();
})
xun.addEventListener('touchend', function (e) {
    const audio = document.getElementById('xunmp3');
    audio.pause();
    e.preventDefault();
})
// 编钟
bianzhong.addEventListener('touchstart', function (e) {
    console.log("按下去辽");
    const audio = document.getElementById('bianzhongmp3');
    audio.play();
    e.preventDefault();
})
bianzhong.addEventListener('touchend', function (e) {
    const audio = document.getElementById('bianzhongmp3');
    audio.pause();
    e.preventDefault();
})