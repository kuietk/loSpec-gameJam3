// DRAWS A RESIZABLE BOX/PIXEL 
//
export function pBox(ctx, x1, y1, x2, y2, coloR){
    x1 = x1 || 0;
    y1 = y1 || 0;

    x2 = x2 || 5;
    y2 = y2 || 5;

    coloR = coloR || "yellow";

    ctx.beginPath();
    ctx.fillStyle = coloR;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1 + x2, y1);
    ctx.lineTo(x1 + x2, y1 + y2);
    ctx.lineTo(x1, y1 + y2)
    ctx.lineTo(x1, y1)
    ctx.fill();

}

// REPEATS AN INSTANCE OF pBox DIAGNOLLY
//
export function pLine(ctx, x1, y1, z1, rvrs, z2, coloR){
    x1 = x1 || 0
    y1 = y1 || 0

    z1 = z1 || 5
    z2 = z2 || 5
    rvrs = rvrs || 0

    coloR = coloR || "orange" ;
    let i = 0

    if(rvrs === 0){

    do {
            pBox(ctx, x1 + i * z1, y1 + i * z1, z1, z1, coloR)
            i++;
        }while (i < z2)
    }

    else{
        do {
            pBox(ctx, x1 + i * z1, y1 - i * z1, z1, z1, coloR)
            i++;
        }while (i < z2)
    }
}

export function tri(ctx, x1, y1, z1, z2, coloR){
    x1 = x1 || 0;
    y1 = y1 || 0;
    z1 = z1 || 10;
    z2 = z2 || 10;
    coloR = coloR || "blue"

    ctx.beginPath();
    ctx.fillStyle = coloR
    ctx.moveTo(x1, y1)
    ctx.lineTo(x1 + z1, y1 + z2)
    ctx.lineTo(x1, y1 + z2)
    ctx.fill()
}