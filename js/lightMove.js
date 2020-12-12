const cutHandsDiv = document.getElementById('cut-hands')

const container = document.getElementById("container");

const kmlight = document.getElementById("km-light");

const music_text = document.getElementById("music-text-detail");

const montainDiv = document.getElementById("montain");

const bottomSignDiv = document.getElementById("bottom_sign");

const fixStarDiv = document.getElementById("fixStar");

const toolDiv = document.getElementById("tool");

const starfieldDiv = document.getElementById('starfield');

const framePaopaoDiv = document.getElementById('frame-paopao');
// const wholemusician = document.getElementById("wholemusician");
// const wholemusician = document.getElementsByClassName("wholemusician");

const musiciansDiv = document.getElementById('musicians')

const konghouMusicianDiv = document.getElementById('konghouMusician')

const maxLeft = cutHandsDiv.offsetLeft - body.offsetLeft;


var lightline = document.querySelector(".line");

var lightlinenone = document.querySelector(".noneline");

lightlinenone.style.display = 'none';

let startX;
let x;

cutHandsDiv.addEventListener('touchstart', function(e) {
    // 获取手指初始坐标 
    startX = e.targetTouches[0].pageX;
    x = this.offsetLeft;
    this.style.boxShadow = '0 0 15px rgba(0, 0, 0, .6)';
});


// 手指按住移动 
cutHandsDiv.addEventListener('touchmove', function(e) {
    // 计算手指的移动距离：手指移动之后的坐标减去手指初始的坐标 
    let moveX = e.targetTouches[0].pageX - startX;

    let lastLeft = x + moveX;

    //防止超出父元素范围
    if (lastLeft < 0) lastLeft = 0;
    if (lastLeft > maxLeft - 200) lastLeft = maxLeft - 200;

    // 移动盒子 盒子原来的位置 + 手指移动的距离 
    this.style.left = lastLeft + 'px';
    // 阻止屏幕滚动的默认行为 
    e.preventDefault();
});
// 手指移动结束
cutHandsDiv.addEventListener('touchend', function() {
    console.log("手指离开！")
    lightline.style.display = 'none';
    lightlinenone.style.display = 'block';
    setTimeout(() => {
        container.style.display = "none";
        music_text.style.display = "none";
        kmlight.style.display = "none";
        fixStarDiv.style.display = "none";

        toolDiv.style.background = "url('https://s3.ax1x.com/2020/12/09/r9F52d.png') bottom center no-repeat #efeff4";
        toolDiv.style.transition = "ease 3s";
        toolDiv.style.backgroundSize = "100% 100%";

        toolDiv.style.width = "100%";
        toolDiv.style.height = "100%";


        starfieldDiv.style.display = "block";
        framePaopaoDiv.style.display = 'block';
    }, 1000);
    setTimeout(() => {
        montainDiv.style.opacity = 0;
        montainDiv.style.transition = "ease 2s";
        // 第二幕动效效果图
        TwoAnimationPic();

    }, 800);

})


function TwoAnimationPic() {
    const secondGroup = document.getElementById('secondGroup');
    secondGroup.style.display = 'block';

    konghouMusicianDiv.style.display = "block";
    const starGroup = [
        document.getElementById('musician1'),
        document.getElementById('musician2'),
        document.getElementById('musician3'),
    ]

    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            starGroup[i].style.display = 'block';
        }, i * 1500);
    }

    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            starGroup[i].style.display = 'none';
        }, 8000 + i * 1500);
    }

    setTimeout(() => {
        secondGroup.style.opacity = 1;
        secondGroup.style.transition = 'ease 5s';

        starfieldDiv.style.opacity = 0;
        starfieldDiv.style.transition = 'ease 5s';
        framePaopaoDiv.style.opacity = 0;
        framePaopaoDiv.style.transition = 'ease 5s';

        montainDiv.style.display = 'none';
        konghouMusicianDiv.style.display = "none";
    }, 9500);

    setTimeout(() => {
        starfieldDiv.style.display = 'none';
        framePaopaoDiv.style.display = 'none';
    }, 14500);

}