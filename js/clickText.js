//获取点击事件的元素
const shenren = document.getElementById('shenren');

const btn = document.getElementsByClassName('btn');

//添加事件监听函数
shenren.addEventListener('touchstart', function () {
  console.log("点击神人！");
  btn.style.zIndex = 15;
})
