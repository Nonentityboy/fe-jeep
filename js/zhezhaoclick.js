const shenrenzhezhaoDiv = document.getElementById('shenrenzhezhao')
const zhuangtaizhezhaoDiv = document.getElementById('zhuangtaizhezhao');


shenrenzhezhaoDiv.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('shenrenClick');
    shenren.style.opacity = 0;
    btn.style.opacity = 1;

    //audio.play();// 这个就是播放  
    const audio = document.getElementById('shenrenchang');
    audio.play();
    e.preventDefault();

})

shenrenzhezhaoDiv.addEventListener('touchend', function(e) {
    kmLightDiv.style.opacity = 1;
    cut_hands_move.style.display = 'block';
    kmLightDiv.style.transition = "ease 2s";
    const btn = document.getElementById('shenrenClick');
    shenren.style.opacity = 1;
    btn.style.opacity = 0;

    //audio.pause();// 这个就是暂停
    const audio = document.getElementById('shenrenchang');
    audio.pause();
    e.preventDefault();

})


//妆台秋思
zhuangtaizhezhaoDiv.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('zhuangtaiClick');
    zhuangtai.style.opacity = 0;
    btn.style.opacity = 1;

    //播放
    const audio = document.getElementById('zhuangtaiqiusi');
    audio.play();
    e.preventDefault();

})

zhuangtaizhezhaoDiv.addEventListener('touchend', function(e) {
    kmLightDiv.style.opacity = 1;
    cut_hands_move.style.display = 'block';
    kmLightDiv.style.transition = "ease 2s";
    const btn = document.getElementById('zhuangtaiClick');
    zhuangtai.style.opacity = 1;
    btn.style.opacity = 0;

    //暂停
    const audio = document.getElementById('zhuangtaiqiusi');
    audio.pause();
    e.preventDefault();

})


//梅花三弄
const meihuazhezhaoDiv = document.getElementById('meihuazhezhao');

meihuazhezhaoDiv.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('meihuaClick');
    meihua.style.opacity = 0;
    btn.style.opacity = 1;

    //播放
    const audio = document.getElementById('meihuasannong');
    audio.play();
    e.preventDefault();

})

meihuazhezhaoDiv.addEventListener('touchend', function(e) {
    kmLightDiv.style.opacity = 1;
    cut_hands_move.style.display = 'block';
    kmLightDiv.style.transition = "ease 2s";
    const btn = document.getElementById('meihuaClick');
    meihua.style.opacity = 1;
    btn.style.opacity = 0;

    //暂停
    const audio = document.getElementById('meihuasannong');
    audio.pause();
    e.preventDefault();

})



//霓裳曲
const nichangzhezhaoDiv = document.getElementById('nichangzhezhao');

nichangzhezhaoDiv.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('nichangClick');
    nichang.style.opacity = 0;
    btn.style.opacity = 1;

    //播放
    const audio = document.getElementById('nichangqu');
    audio.play();
    e.preventDefault();


})

nichangzhezhaoDiv.addEventListener('touchend', function(e) {
    kmLightDiv.style.opacity = 1;
    cut_hands_move.style.display = 'block';
    kmLightDiv.style.transition = "ease 2s";
    const btn = document.getElementById('nichangClick');
    nichang.style.opacity = 1;
    btn.style.opacity = 0;

    //暂停
    const audio = document.getElementById('nichangqu')
    audio.pause();
    e.preventDefault();

})



//广陵散
const guanglingzhezhaoDiv = document.getElementById('guanglingzhezhao')
guanglingzhezhaoDiv.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('guanglingClick');
    guangling.style.opacity = 0;
    btn.style.opacity = 1;
    //播放
    const audio = document.getElementById('guanglingsan');
    audio.play();
    e.preventDefault();

})

guanglingzhezhaoDiv.addEventListener('touchend', function(e) {
    kmLightDiv.style.opacity = 1;
    cut_hands_move.style.display = 'block';
    kmLightDiv.style.transition = "ease 2s";
    const btn = document.getElementById('guanglingClick');
    guangling.style.opacity = 1;
    btn.style.opacity = 0;
    //暂停
    const audio = document.getElementById('guanglingsan')
    audio.pause();
    e.preventDefault();

})



//月儿高
const yueerzhezhaoDiv = document.getElementById('yueerzhezhao')

yueerzhezhaoDiv.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('yueerClick');
    yueer.style.opacity = 0;
    btn.style.opacity = 1;

    //播放
    const audio = document.getElementById('yueergao');
    audio.play();
    e.preventDefault();

})

yueerzhezhaoDiv.addEventListener('touchend', function(e) {
    kmLightDiv.style.opacity = 1;
    cut_hands_move.style.display = 'block';
    kmLightDiv.style.transition = "ease 2s";
    const btn = document.getElementById('yueerClick');
    yueer.style.opacity = 1;
    btn.style.opacity = 0;

    //暂停
    const audio = document.getElementById('yueergao')
    audio.pause();
    e.preventDefault();

})

// 潇湘水云

const xiaoxiangzhezhao = document.getElementById('xiaoxiangzhezhao')
xiaoxiangzhezhao.addEventListener('touchstart', function(e) {
    const btn = document.getElementById('xiaoxiangClick');
    xiaoxiang.style.opacity = 0;
    btn.style.opacity = 1;

    //播放
    const audio = document.getElementById('xiaoxiangshuiyun');
    audio.play();
    e.preventDefault();

})

xiaoxiangzhezhao.addEventListener('touchend', function(e) {
    kmLightDiv.style.opacity = 1;
    cut_hands_move.style.display = 'block';
    kmLightDiv.style.transition = "ease 2s";
    const btn = document.getElementById('xiaoxiangClick');
    xiaoxiang.style.opacity = 1;
    btn.style.opacity = 0;

    //暂停
    const audio = document.getElementById('xiaoxiangshuiyun')
    audio.pause();
    e.preventDefault();

})