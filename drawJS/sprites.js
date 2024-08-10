import * as clr from "./colors.js"
import * as drw from "./pixel.js"




export function back(ctx, x1, y1){
    drw.pBox(ctx, x1 + 3, y1 + 3, 40, 50)
    drw.pBox(ctx, x1 + 5, y1 + 1, 36 )
    drw.pBox(ctx, x1 + 5, y1 + 50, 36 )
}

//ace
export function ace(ctx, x1, y1){
    drw.pBox(ctx, x1 + 3, y1 + 3, 40, 50)
    drw.pBox(ctx, x1 + 5, y1 + 1, 36 )
    drw.pBox(ctx, x1 + 5, y1 + 50, 36 )

    drw.pBox(ctx, 5 + x1, 10 + y1, 5, 20, clr.c09)
    drw.pBox(ctx, 10 + x1, 5 + y1, 0, 0, clr.c09)
    drw.pBox(ctx, 15 + x1, 10 + y1, 5, 20, clr.c09)
    drw.pBox(ctx, 10 + x1, 15 + y1, 0, 0, clr.c09)
    drw.tri(ctx, 15 + x1, 5 + y1, 5, 5, clr.c09)
    drw.tri(ctx, 10 + x1, 5 + y1, -5, 5, clr.c09)
}


export function two(ctx, x1, y1){
    drw.pBox(ctx, x1 + 3, y1 + 3, 40, 50)
    drw.pBox(ctx, x1 + 5, y1 + 1, 36 )
    drw.pBox(ctx, x1 + 5, y1 + 50, 36 )
    
    drw.pBox(ctx, x1 + 5, y1 + 5, 10, 0, clr.c09)
    drw.pBox(ctx, x1 + 10, y1 + 25, 10, 0, clr.c09)
    drw.pLine(ctx, x1 + 5, y1 + 20, 5, 1, 3, clr.c09 )
    drw.tri(ctx, x1+15, y1+ 5, 5, 5, clr.c09)
    drw.pBox(ctx, x1+10, y1+ 30, -5, -5, clr.c09)
    drw.tri(ctx, x1+15, y1+ 10, -5, 5, clr.c09)
    drw.tri(ctx, x1+15, y1+ 20, 5, -5, clr.c09)
    drw.tri(ctx, x1+10, y1+ 15, -5, 5, clr.c09)
    drw.tri(ctx, x1+10, y1+ 25, 5, -5, clr.c09)
}

export function three(ctx, x1, y1){
    drw.pBox(ctx, x1 + 3, y1 + 3, 40, 50)
    drw.pBox(ctx, x1 + 5, y1 + 1, 36 )
    drw.pBox(ctx, x1 + 5, y1 + 50, 36 )

    drw.pBox(ctx, 5 + x1, 5 + y1, 10, 5, clr.c09)
    drw.pBox(ctx, 5 + x1, 15 + y1, 10, 5, clr.c09)
    drw.pBox(ctx, 5 + x1, 25 + y1, 10, 5, clr.c09)
    drw.pBox(ctx, 15 + x1, 20 + y1, 5, 5, clr.c09)
    drw.pBox(ctx, 15 + x1, 10 + y1, 5, 5, clr.c09)

    drw.tri(ctx, x1+15, y1+ 5, 5, 5, clr.c09)
    drw.tri(ctx, x1+15, y1+ 30, 5, -5, clr.c09)
    //inverse tri
    drw.tri(ctx, x1+15, y1+ 17.5, 5, -2.5, clr.c09)
    drw.tri(ctx, x1+15, y1+ 17.5, 5, 2.5, clr.c09)
}
//
//
export function palette(ctx, x1, y1){

    //palette first line
    drw.pBox(ctx, 20 + x1, 20 + y1, 20, 20, clr.c00)
    drw.pBox(ctx, 40 + x1, 20 + y1, 20, 20, clr.c01)
    drw.pBox(ctx, 60 + x1, 20 + y1, 20, 20, clr.c02)
    drw.pBox(ctx, 80 + x1, 20 + y1, 20, 20, clr.c03)
    drw.pBox(ctx, 100 + x1, 20 + y1, 20, 20, clr.c04)
    drw.pBox(ctx, 120 + x1, 20 + y1, 20, 20, clr.c05)
    drw.pBox(ctx, 140 + x1, 20 + y1, 20, 20, clr.c06)
    drw.pBox(ctx, 160 + x1, 20 + y1, 20, 20, clr.c07)
    drw.pBox(ctx, 180 + x1, 20 + y1, 20, 20, clr.c08)
    drw.pBox(ctx, 200 + x1, 20 + y1, 20, 20, clr.c09)
    
    //palette second line
    drw.pBox(ctx, 20 + x1, 40 + y1, 20, 20, clr.c10)
    drw.pBox(ctx, 40 + x1, 40 + y1, 20, 20, clr.c11)
    drw.pBox(ctx, 60 + x1, 40 + y1, 20, 20, clr.c12)
    drw.pBox(ctx, 80 + x1, 40 + y1, 20, 20, clr.c13)
    drw.pBox(ctx, 100 + x1, 40 + y1, 20, 20, clr.c14)
    drw.pBox(ctx, 120 + x1, 40 + y1, 20, 20, clr.c15)
    drw.pBox(ctx, 140 + x1, 40 + y1, 20, 20, clr.c16)
    drw.pBox(ctx, 160 + x1, 40 + y1, 20, 20, clr.c17)
    drw.pBox(ctx, 180 + x1, 40 + y1, 20, 20, clr.c18)
    drw.pBox(ctx, 200 + x1, 40 + y1, 20, 20, clr.c19)
    
    //palette third line
    drw.pBox(ctx, 20 + x1, 60 + y1, 20, 20, clr.c20)
    drw.pBox(ctx, 40 + x1, 60 + y1, 20, 20, clr.c21)
    drw.pBox(ctx, 60 + x1, 60 + y1, 20, 20, clr.c22)
    drw.pBox(ctx, 80 + x1, 60 + y1, 20, 20, clr.c23)
    drw.pBox(ctx, 100 + x1, 60 + y1, 20, 20, clr.c24)
    drw.pBox(ctx, 120 + x1, 60 + y1, 20, 20, clr.c25)
    drw.pBox(ctx, 140 + x1, 60 + y1, 20, 20, clr.c26)
    drw.pBox(ctx, 160 + x1, 60 + y1, 20, 20, clr.c27)
    drw.pBox(ctx, 180 + x1, 60 + y1, 20, 20, clr.c28)
    drw.pBox(ctx, 200 + x1, 60 + y1, 20, 20, clr.c29)

    //pallatte fourth line
    drw.pBox(ctx, 20 + x1, 80 + y1, 20, 20, clr.c30)
    drw.pBox(ctx, 40 + x1, 80 + y1, 20, 20, clr.c31)
    drw.pBox(ctx, 60 + x1, 80 + y1, 20, 20, clr.c32)
    drw.pBox(ctx, 80 + x1, 80 + y1, 20, 20, clr.c33)
    drw.pBox(ctx, 100 + x1, 80 + y1, 20, 20, clr.c34)
    drw.pBox(ctx, 120 + x1, 80 + y1, 20, 20, clr.c35)
    drw.pBox(ctx, 140 + x1, 80 + y1, 20, 20, clr.c36)
    drw.pBox(ctx, 160 + x1, 80 + y1, 20, 20, clr.c37)
    drw.pBox(ctx, 180 + x1, 80 + y1, 20, 20, clr.c38)
    drw.pBox(ctx, 200 + x1, 80 + y1, 20, 20, clr.c39)
    
    //pallatte fifth line
    drw.pBox(ctx, 20 + x1, 100 + y1, 20, 20, clr.c40)
    drw.pBox(ctx, 40 + x1, 100 + y1, 20, 20, clr.c41)
    drw.pBox(ctx, 60 + x1, 100 + y1, 20, 20, clr.c42)
    drw.pBox(ctx, 80 + x1, 100 + y1, 20, 20, clr.c43)
    drw.pBox(ctx, 100 + x1, 100 + y1, 20, 20, clr.c44)
    drw.pBox(ctx, 120 + x1, 100 + y1, 20, 20, clr.c45)
    drw.pBox(ctx, 140 + x1, 100 + y1, 20, 20, clr.c46)
    drw.pBox(ctx, 160 + x1, 100 + y1, 20, 20, clr.c47)
}