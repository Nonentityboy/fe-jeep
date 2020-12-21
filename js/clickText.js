//获取乐器点击事件元素

const ruan = document.getElementById('ruanTouch');
const guqin = document.getElementById('guqinTouch');
const konghou = document.getElementById('konghouTouch');
const sheng = document.getElementById('shengTouch');
const xun = document.getElementById('xunTouch');
const bianzhong = document.getElementById('bianzhongTouch');
const cut_hands_move = document.getElementById('cut_hands_move');
// 获取乐器页面头


const xiaoTouchDiv = document.getElementById('xiaoTouch');

// 萧
xiaoTouchDiv.addEventListener('touchstart', function(e) {
    console.log("按下去辽22222");
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
    threeGroupTopDiv.style.display = 'block';
    e.preventDefault();
    const audio = document.getElementById('xiaomp3');
    audio.play();
});

xiaoTouchDiv.addEventListener('touchend', function(e) {
    console.log("按下去辽22222");
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
        xingxing[i].style.opacity = 0.6;
    }
    kmLightDiv.style.opacity = 1;
    cut_hands_move.style.display = 'block';
    kmLightDiv.style.transition = "ease 2s";
    const audio = document.getElementById('xiaomp3');
    audio.pause();
    e.preventDefault();
});

const threeGroupTopDiv = document.getElementById('threeGroupTop')

// 乐器交互


// 阮
ruan.addEventListener('touchstart', function(e) {
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
    threeGroupTopDiv.style.display = 'block';
    console.log("按下去辽");
    const audio = document.getElementById('ruanmp3');
    audio.play();
    e.preventDefault();
})
ruan.addEventListener('touchend', function(e) {
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
            xingxing[i].style.opacity = 0.6;
        }
        kmLightDiv.style.opacity = 1;
        cut_hands_move.style.display = 'block';
        kmLightDiv.style.transition = "ease 2s";
        const audio = document.getElementById('ruanmp3');
        audio.pause();
        e.preventDefault();
    })
    // 古琴
guqin.addEventListener('touchstart', function(e) {
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
    threeGroupTopDiv.style.display = 'block';
    console.log("按下去辽");
    const audio = document.getElementById('guqinmp3');
    audio.play();
    e.preventDefault();
})
guqin.addEventListener('touchend', function(e) {
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
            xingxing[i].style.opacity = 0.6;
        }
        kmLightDiv.style.opacity = 1;
        cut_hands_move.style.display = 'block';
        kmLightDiv.style.transition = "ease 2s";
        const audio = document.getElementById('guqinmp3');
        audio.pause();
        e.preventDefault();
    })
    // 箜篌
konghou.addEventListener('touchstart', function(e) {
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
    threeGroupTopDiv.style.display = 'block';
    console.log("按下去辽");
    const audio = document.getElementById('konghoump3');
    audio.play();
    e.preventDefault();
})
konghou.addEventListener('touchend', function(e) {
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
            xingxing[i].style.opacity = 0.6;
        }
        kmLightDiv.style.opacity = 1;
        cut_hands_move.style.display = 'block';
        kmLightDiv.style.transition = "ease 2s";
        const audio = document.getElementById('konghoump3');
        audio.pause();
        e.preventDefault();
    })
    // 笙
sheng.addEventListener('touchstart', function(e) {
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
    threeGroupTopDiv.style.display = 'block';
    console.log("按下去辽");
    const audio = document.getElementById('shengmp3');
    audio.play();
    e.preventDefault();
})
sheng.addEventListener('touchend', function(e) {
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
            xingxing[i].style.opacity = 0.6;
        }
        kmLightDiv.style.opacity = 1;
        cut_hands_move.style.display = 'block';
        kmLightDiv.style.transition = "ease 2s";
        const audio = document.getElementById('shengmp3');
        audio.pause();
        e.preventDefault();
    })
    // 埙
xun.addEventListener('touchstart', function(e) {
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
    threeGroupTopDiv.style.display = 'block';
    console.log("按下去辽");
    const audio = document.getElementById('xunmp3');
    audio.play();
    e.preventDefault();
})
xun.addEventListener('touchend', function(e) {
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
            xingxing[i].style.opacity = 0.6;
        }
        kmLightDiv.style.opacity = 1;
        cut_hands_move.style.display = 'block';
        kmLightDiv.style.transition = "ease 2s";
        const audio = document.getElementById('xunmp3');
        audio.pause();
        e.preventDefault();
    })
    // 编钟
bianzhong.addEventListener('touchstart', function(e) {
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
    threeGroupTopDiv.style.display = 'block';
    console.log("按下去辽");
    const audio = document.getElementById('bianzhongmp3');
    audio.play();
    e.preventDefault();
})
bianzhong.addEventListener('touchend', function(e) {
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
        xingxing[i].style.opacity = 0.6;
    }
    kmLightDiv.style.opacity = 1;
    cut_hands_move.style.display = 'block';
    kmLightDiv.style.transition = "ease 2s";
    const audio = document.getElementById('bianzhongmp3');
    audio.pause();
    e.preventDefault();
})