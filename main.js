import {

    drawPixel,
    drawLine,

} from "./drawJS/pixel.js"


import {
    
    c0, c1, c2, c3, c4, c5, c6, c7, c8, c9,
    c10, c11, c12, c13, c14, c15, c16, c17, c18, c19,
    c20, c21, c22, c23, c24, c25, c26, c27, c28, c29,
    c30, c31, c32, c33, c34, c35, c36, c37, c38, c39,
    c40, c41, c42, c43, c44, c45, c46, c47

} from "./drawJS/colors.js"

import {

    spritePalette,
    
} from "./drawJS/sprites.js"

var canvas = document.getElementById("main");
var main = canvas.getContext("2d");




drawPixel(main, 20, 20, 20, 20, c9)
drawPixel(main, 23, 20, 16, 20, c8)


drawLine(main, 40, 40, 10, 5, c1)
drawLine(main, 43, 40, 10, 5, c2)





spritePalette(main)