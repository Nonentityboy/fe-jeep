window.addEventListener("load", function(event) {
    console.log("文档以及它包含的资源都已加载完成");


});

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
}, 3000);