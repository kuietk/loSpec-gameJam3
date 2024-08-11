//IMPORTS
import * as drw from "../drawJS/_init.js"

//used for all the cards
export function cardBase(ctx, x1, y1, coloR){
    coloR = coloR || drw.c20


    drw.pBox(ctx, x1 + 3, y1 + 3, 40, 50, coloR)
    drw.pBox(ctx, x1 + 5, y1 + 1, 36, 5, coloR)
    drw.pBox(ctx, x1 + 5, y1 + 50, 36, 5, coloR)
}

export function back(ctx, x1, y1){

    cardBase(ctx, x1, y1, drw.c07)

    drw.pBox(ctx, x1 + 6 + 0.5, y1 + 50 + 0.5, 3, 3, drw.c13)
    drw.pLine(ctx, x1 + 6 + 0.5, y1 + 44 + 0.5, 3, 0, 3, drw.c13)
    drw.pLine(ctx, x1 + 6 + 0.5, y1 + 38 + 0.5, 3, 0, 5, drw.c13)
    drw.pLine(ctx, x1 + 6 + 0.5, y1 + 32 + 0.5, 3, 0, 7, drw.c13)
    drw.pLine(ctx, x1 + 6 + 0.5, y1 + 26 + 0.5, 3, 0, 9, drw.c13)
    drw.pLine(ctx, x1 + 6 + 0.5, y1 + 20 + 0.5, 3, 0, 11, drw.c13)
    drw.pLine(ctx, x1 + 6 + 0.5, y1 + 14 + 0.5, 3, 0, 11, drw.c13)
    drw.pLine(ctx, x1 + 6 + 0.5, y1 + 8 + 0.5, 3, 0, 11, drw.c13)
    drw.pLine(ctx, x1 + 6 + 0.5, y1 + 2 + 0.5, 3, 0, 11, drw.c13)
    drw.pLine(ctx, x1 + 12 + 0.5, y1 + 2 + 0.5, 3, 0, 9, drw.c13)
    drw.pLine(ctx, x1 + 18 + 0.5, y1 + 2 + 0.5, 3, 0, 7, drw.c13)
    drw.pLine(ctx, x1 + 24 + 0.5, y1 + 2 + 0.5, 3, 0, 5, drw.c13)
    drw.pLine(ctx, x1 + 30 + 0.5, y1 + 2 + 0.5, 3, 0, 3, drw.c13)
    drw.pLine(ctx, x1 + 36 + 0.5, y1 + 2 + 0.5, 3, 0, 1, drw.c13)

    drw.pBox(ctx, x1 + 3.75, y1 + 4, 1, 48, drw.c13)
    drw.pBox(ctx, x1 + 40.75, y1 + 4, 1, 48, drw.c13)
}

//---------------------------------------------------------//

//ace
export function ace(ctx, x1, y1){
    cardBase(ctx, x1, y1, drw.c25)

    drw.pBox(ctx, 5 + x1, 10 + y1, 5, 20, drw.c09)
    drw.pBox(ctx, 10 + x1, 5 + y1, 0, 0, drw.c09)
    drw.pBox(ctx, 15 + x1, 10 + y1, 5, 20, drw.c09)
    drw.pBox(ctx, 10 + x1, 15 + y1, 0, 0, drw.c09)
    drw.tri(ctx, 15 + x1, 5 + y1, 5, 5, drw.c09)
    drw.tri(ctx, 10 + x1, 5 + y1, -5, 5, drw.c09)
}


export function two(ctx, x1, y1){
    cardBase(ctx, x1, y1, drw.c25)
    
    drw.pBox(ctx, x1 + 5, y1 + 5, 10, 0, drw.c09)
    drw.pBox(ctx, x1 + 10, y1 + 25, 10, 0, drw.c09)
    drw.pLine(ctx, x1 + 5, y1 + 20, 5, 1, 3, drw.c09 )
    drw.tri(ctx, x1+15, y1+ 5, 5, 5, drw.c09)
    drw.pBox(ctx, x1+10, y1+ 30, -5, -5, drw.c09)
    drw.tri(ctx, x1+15, y1+ 10, -5, 5, drw.c09)
    drw.tri(ctx, x1+15, y1+ 20, 5, -5, drw.c09)
    drw.tri(ctx, x1+10, y1+ 15, -5, 5, drw.c09)
    drw.tri(ctx, x1+10, y1+ 25, 5, -5, drw.c09)
}

export function three(ctx, x1, y1){
    cardBase(ctx, x1, y1, drw.c25)

    drw.pBox(ctx, 5 + x1, 5 + y1, 10, 5, drw.c09)
    drw.pBox(ctx, 5 + x1, 15 + y1, 10, 5, drw.c09)
    drw.pBox(ctx, 5 + x1, 25 + y1, 10, 5, drw.c09)
    drw.pBox(ctx, 15 + x1, 20 + y1, 5, 5, drw.c09)
    drw.pBox(ctx, 15 + x1, 10 + y1, 5, 5, drw.c09)

    drw.tri(ctx, x1+15, y1+ 5, 5, 5, drw.c09)
    drw.tri(ctx, x1+15, y1+ 30, 5, -5, drw.c09)
    //inverse tri
    drw.tri(ctx, x1+15, y1+ 17.5, 5, -2.5, drw.c09)
    drw.tri(ctx, x1+15, y1+ 17.5, 5, 2.5, drw.c09)
}