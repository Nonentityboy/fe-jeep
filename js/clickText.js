//获取点击事件的元素
const shenren = document.getElementById('shenren');
const zhuangtai = document.getElementById('zhuangtai');
const meihua = document.getElementById('meihua');
const guangling = document.getElementById('guangling');
const nichang = document.getElementById('nichang');
const yueer = document.getElementById('yueer');
const xiaoxiang = document.getElementById('xiaoxiang');

//添加事件监听函数
shenren.addEventListener('touchstart', function () {
  const btn = document.getElementById('shenrenClick');
  shenren.style.opacity = 0;
  btn.style.opacity = 1;
})

shenren.addEventListener('touchend', function () {
  const btn = document.getElementById('shenrenClick');
  shenren.style.opacity = 1;
  btn.style.opacity = 0;
})

//妆台秋思
zhuangtai.addEventListener('touchstart', function () {
  const btn = document.getElementById('zhuangtaiClick');
  zhuangtai.style.opacity = 0;
  btn.style.opacity = 1;
})

zhuangtai.addEventListener('touchend', function () {
  const btn = document.getElementById('zhuangtaiClick');
  zhuangtai.style.opacity = 1;
  btn.style.opacity = 0;
})

//梅花
meihua.addEventListener('touchstart', function () {
  const btn = document.getElementById('meihuaClick');
  meihua.style.opacity = 0;
  btn.style.opacity = 1;
})

meihua.addEventListener('touchend', function () {
  const btn = document.getElementById('meihuaClick');
  meihua.style.opacity = 1;
  btn.style.opacity = 0;
})
//广陵
guangling.addEventListener('touchstart', function () {
  const btn = document.getElementById('guanglingClick');
  guangling.style.opacity = 0;
  btn.style.opacity = 1;
})

guangling.addEventListener('touchend', function () {
  const btn = document.getElementById('guanglingClick');
  guangling.style.opacity = 1;
  btn.style.opacity = 0;
})
//霓裳
nichang.addEventListener('touchstart', function () {
  const btn = document.getElementById('nichangClick');
  nichang.style.opacity = 0;
  btn.style.opacity = 1;
})

nichang.addEventListener('touchend', function () {
  const btn = document.getElementById('nichangClick');
  nichang.style.opacity = 1;
  btn.style.opacity = 0;
})

//月儿
yueer.addEventListener('touchstart', function () {
  const btn = document.getElementById('yueerClick');
  yueer.style.opacity = 0;
  btn.style.opacity = 1;
})

yueer.addEventListener('touchend', function () {
  const btn = document.getElementById('yueerClick');
  yueer.style.opacity = 1;
  btn.style.opacity = 0;
})
// 潇湘
xiaoxiang.addEventListener('touchstart', function () {
  const btn = document.getElementById('xiaoxiangClick');
  xiaoxiang.style.opacity = 0;
  btn.style.opacity = 1;
})

xiaoxiang.addEventListener('touchend', function () {
  const btn = document.getElementById('xiaoxiangClick');
  xiaoxiang.style.opacity = 1;
  btn.style.opacity = 0;
})

