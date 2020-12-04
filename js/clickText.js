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
shenren.addEventListener('touchstart', function () {
  const btn = document.getElementById('shenrenClick');
  shenren.style.opacity = 0;
  btn.style.opacity = 1;

  //audio.play();// 这个就是播放  
  const audio = document.getElementById('shenrenchang');
  audio.play();
})

shenren.addEventListener('touchend', function () {
  const btn = document.getElementById('shenrenClick');
  shenren.style.opacity = 1;
  btn.style.opacity = 0;

  //audio.pause();// 这个就是暂停
  const audio = document.getElementById('shenrenchang');
  audio.pause();
})

//妆台秋思
zhuangtai.addEventListener('touchstart', function () {
  const btn = document.getElementById('zhuangtaiClick');
  zhuangtai.style.opacity = 0;
  btn.style.opacity = 1;

  //播放
  const audio = document.getElementById('zhuangtaiqiusi');
  audio.play();
})

zhuangtai.addEventListener('touchend', function () {
  const btn = document.getElementById('zhuangtaiClick');
  zhuangtai.style.opacity = 1;
  btn.style.opacity = 0;

  //暂停
  const audio = document.getElementById('zhuangtaiqiusi');
  audio.pause();
})

//梅花三弄
meihua.addEventListener('touchstart', function () {
  const btn = document.getElementById('meihuaClick');
  meihua.style.opacity = 0;
  btn.style.opacity = 1;

  //播放
  const audio = document.getElementById('meihuasannong');
  audio.play();
})

meihua.addEventListener('touchend', function () {
  const btn = document.getElementById('meihuaClick');
  meihua.style.opacity = 1;
  btn.style.opacity = 0;

  //暂停
  const audio = document.getElementById('meihuasannong');
  audio.pause();
})

//广陵散
guangling.addEventListener('touchstart', function () {
  const btn = document.getElementById('guanglingClick');
  guangling.style.opacity = 0;
  btn.style.opacity = 1;
  //播放
  const audio = document.getElementById('guanglingsan');
  audio.play();
})

guangling.addEventListener('touchend', function () {
  const btn = document.getElementById('guanglingClick');
  guangling.style.opacity = 1;
  btn.style.opacity = 0;
  //暂停
  const audio = document.getElementById('guanglingsan')
  audio.pause();
})

//霓裳曲
nichang.addEventListener('touchstart', function () {
  const btn = document.getElementById('nichangClick');
  nichang.style.opacity = 0;
  btn.style.opacity = 1;

  //播放
  const audio = document.getElementById('nichangqu');
  audio.play();

})

nichang.addEventListener('touchend', function () {
  const btn = document.getElementById('nichangClick');
  nichang.style.opacity = 1;
  btn.style.opacity = 0;

  //暂停
  const audio = document.getElementById('nichangqu')
  audio.pause();
})

//月儿高
yueer.addEventListener('touchstart', function () {
  const btn = document.getElementById('yueerClick');
  yueer.style.opacity = 0;
  btn.style.opacity = 1;

  //播放
  const audio = document.getElementById('yueergao');
  audio.play();
})

yueer.addEventListener('touchend', function () {
  const btn = document.getElementById('yueerClick');
  yueer.style.opacity = 1;
  btn.style.opacity = 0;

  //暂停
  const audio = document.getElementById('yueergao')
  audio.pause();
})

// 潇湘水云
xiaoxiang.addEventListener('touchstart', function () {
  const btn = document.getElementById('xiaoxiangClick');
  xiaoxiang.style.opacity = 0;
  btn.style.opacity = 1;

  //播放
  const audio = document.getElementById('xiaoxiangshuiyun');
  audio.play();
})

xiaoxiang.addEventListener('touchend', function () {
  const btn = document.getElementById('xiaoxiangClick');
  xiaoxiang.style.opacity = 1;
  btn.style.opacity = 0;

  //暂停
  const audio = document.getElementById('xiaoxiangshuiyun')
  audio.pause();
})