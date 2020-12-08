// https://s3.ax1x.com/2020/12/08/rSxuXF.png  嵇康
// https://s3.ax1x.com/2020/12/08/rSxVf0.png        孔子
// https://s3.ax1x.com/2020/12/08/rSxmlT.png       阮籍
// https://s3.ax1x.com/2020/12/08/rSxepV.png       师旷
// https://s3.ax1x.com/2020/12/08/rSxn6U.png       伯牙
// https://s3.ax1x.com/2020/12/08/rSxl79.png       菜k。。
// https://s3.ax1x.com/2020/12/08/rSxQ0J.png        董廷兰
// https://s3.ax1x.com/2020/12/08/rSx8t1.png       郭楚忘


const textjikangimg = document.getElementById('jikangimg');



textjikangimg.addEventListener('touchstart', function() {
    const btn = document.getElementById('jikangimgtongpan');
    btn.style.opacity = 1;
})

textjikangimg.addEventListener('touchend', function() {
    const btn = document.getElementById('jikangimgtongpan');
    btn.style.opacity = 0;
})