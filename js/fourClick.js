const headerBottomHandsDiv = document.getElementById('header-bottom-text-group-three-left');

const threeGroupInfoDiv = document.getElementById('threeGroup');

const fourGroupButtonDiv = document.getElementById('fourGroupButton');


headerBottomHandsDiv.addEventListener('touchstart', function(e) {
    // 阻止屏幕滚动的默认行为 
    e.preventDefault();
});

headerBottomHandsDiv.addEventListener('touchmove', function(e) {
    // 阻止屏幕滚动的默认行为 
    e.preventDefault();
});

headerBottomHandsDiv.addEventListener('touchend', function(e) {

    const xingxing = [
        document.getElementById('xingxing1'),
        document.getElementById('xingxing2'),
        document.getElementById('xingxing3'),
        document.getElementById('xingxing4'),
        document.getElementById('xingxing5'),
        document.getElementById('xingxing6'),
        document.getElementById('xingxing7'),
    ];

    for (let i = 0; i < 7; i++) {
        xingxing[i].style.opacity = 1;
    }
    threeGroupInfoDiv.style.opacity = 0;
    threeGroupInfoDiv.style.transition = 'ease 3s';

    setTimeout(() => {
        threeGroupInfoDiv.style.display = "none";

        toolDiv.style.backgroundImage = "linear-gradient( #171c61，#172374)";

        threeHalfGroup.style.display = "block";
        threeHalfGroup.style.opacity = 1;
        threeHalfGroup.style.transition = 'ease 2s';




        const pageText = [
            document.getElementById('threeHalfGroup1'),
            document.getElementById('threeHalfGroup2'),
            document.getElementById('threeHalfGroup3'),
            document.getElementById('threeHalfGroup4'),
            document.getElementById('threeHalfGroup5'),
            document.getElementById('threeHalfGroup6')
        ];

        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                pageText[i].style.opacity = 1;
                pageText[i].style.transition = "ease 5s";
            }, i * 500);
        }

        setTimeout(() => {
            window.location.href = 'juankuan_new.html';
        }, 6000);
        e.preventDefault();
    }, 3000);
    e.preventDefault();
})