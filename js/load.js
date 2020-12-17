window.addEventListener("load", function(event) {
    console.log("文档以及它包含的资源都已加载完成");
});

// 设置三秒之后首屏加载
setTimeout(() => {
    const zeroGroup = document.getElementById('zeroGroup');
    zeroGroup.style.display = 'none';

    const oneGroupDiv = document.getElementById('tool');
    oneGroupDiv.style.display = 'block';

    const pageText = [
        document.getElementById('header-bottom-text-one'),
        document.getElementById('header-bottom-text-two'),
        document.getElementById('header-bottom-text-three')
    ];

    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            pageText[i].style.opacity = 1;
            pageText[i].style.transition = "ease 10s";
        }, i * 1000);
    }
}, 5000);


// 缩放
try {
    // 禁用双击缩放
    document.addEventListener("touchstart", function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    var lastTouchEnd = 0;
    document.addEventListener(
        "touchend",
        function(event) {
            var now = new Date().getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        },
        false
    );
    // 禁用双指手势操作
    document.addEventListener("gesturestart", function(event) {
        event.preventDefault();
    });
} catch (error) {}