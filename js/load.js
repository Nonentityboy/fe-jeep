window.addEventListener("load", function(event) {
    console.log("文档以及它包含的资源都已加载完成");

    const pageText = [
        document.getElementById('header-bottom-text-one'),
        document.getElementById('header-bottom-text-two'),
        document.getElementById('header-bottom-text-three')
    ];

    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i)
            pageText[i].style.opacity = 1;
            pageText[i].style.transition = "ease 1s";
        }, i * 1000);
    }

    setTimeout(() => {
        // headerChange.style.display = 'none';
        // headerTextChange.style.opacity = 1;
    }, 3000);

});