//获取点击事件的元素
const shenren = document.getElementById('shenren');

//添加事件监听函数
shenren.addEventListener('touchstart', function() {
    const btn = document.getElementById('shenrenClick');
    btn.style.zIndex = 15;
})

shenren.addEventListener('touchend', function() {
    const btn = document.getElementById('shenrenClick');
    btn.style.zIndex = -15;
})