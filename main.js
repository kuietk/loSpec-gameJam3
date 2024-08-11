import * as drw from "./drawJS/pixel.js"
import * as clr from "./drawJS/colors.js"
import * as spt from "./sprites/_spt.js"

//MAIN CANVAS
var canvas = document.getElementById("main");
var main = canvas.getContext("2d");

//DEBUG
var canvasTest = document.getElementById("test");
var test = canvasTest.getContext("2d");

//canvas.width = window.innerWidth - 30
canvasTest.height = window.innerHeight

//BG
drw.pBox(main, 0, 0, 500, 500, clr.c03)
drw.pBox(test, 0, 0, 500, 500, clr.c23)
//PALETTE
spt.palette(test, 0, 120)


spt.ace(main, 5, 5)
spt.two(main, 55, 5)
spt.three(main, 105, 5)
spt.back(main, 5, 65)
spt.back(main, 55, 65)
spt.back(main, 105, 65)

//bottom bar
drw.pBox(main, 4, 127, 150, 10)
drw.pBox(main, 6, 125, 146, 5)
drw.pBox(main, 6, 134, 146, 5)

spt.back(test, 20, 20)



