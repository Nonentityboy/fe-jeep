const dian = [document.getElementById("dian1"),
    document.getElementById("dian2"),
    document.getElementById("dian3"),
    document.getElementById("dian4"),
    document.getElementById("dian5"),
    document.getElementById("dian6")
];

function loadingDian() {
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            // console.log(dian[i])
            dian[i].style.opacity = 1;
        }, i * 500);
    };
    setTimeout(() => {
        for (let i = 0; i < 6; i++) {
            dian[i].style.opacity = 0;
        };
        return loadingDian();
    }, 3000);

}

loadingDian();