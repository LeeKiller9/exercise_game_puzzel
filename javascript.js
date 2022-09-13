let imgObj1 = document.getElementById('imgFirst');
let imgObj2 = document.getElementById('imgSecond');
let imgObj3 = document.getElementById('imgThird');
let imgObj4 = document.getElementById('imgForth');
let imgObj5 = document.getElementById('imgFifth');
let result = document.getElementById('result');
let srcImage = null;

function getPicture() {
    let numImage = Math.floor(Math.random() * 4 + 1)
    switch (numImage) {
        case 1:
            srcImage = './picture/square.png'
            break
        case 2:
            srcImage = './picture/star.png'
            break
        case 3:
            srcImage = './picture/triangle.png'
            break
        case 4:
            srcImage = './picture/circle.png'
            break
    }
    return (srcImage)
}

function init() {
    imgObj1.src = getPicture()
    imgObj2.src = getPicture()
    imgObj3.src = getPicture()
    imgObj4.src = getPicture()
    imgObj5.src = getPicture()
}

function changeImage(idImage) {
    document.getElementById(idImage).src = getPicture()
    if ((imgObj1.src === imgObj2.src) && (imgObj2.src === imgObj3.src) && (imgObj3.src === imgObj4.src) && (imgObj4.src === imgObj5.src)) {
        result.style.color = 'red'
        result.style.fontSize = 30 + 'px'
        document.getElementById('result').innerHTML = 'Congratulation!!'
    } else {
        result.style.color = 'black'
        result.style.fontSize = 20 + 'px'
        document.getElementById('result').innerHTML = 'Try it!!'
    }
}

window.onload = init;
