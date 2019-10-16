var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Set the canvas width and height according to the display size
ctx.canvas.width = window.innerWidth*0.9;
ctx.canvas.height = window.innerHeight/1.3;

// Draw the first horizontal line 
ctx.moveTo(0, ((ctx.canvas.width) / 13) * 0.6);
ctx.lineTo(window.innerWidth, ((ctx.canvas.width) / 13) * 0.6);
ctx.stroke();

// Divide each column and row equally
var newWidth = (ctx.canvas.width) / 13;
var newHeight = (ctx.canvas.height - ((ctx.canvas.width) / 13) * 0.6) / 5;

// Draw lines vertically
for (var i = 1; i < 13; i ++) {
    ctx.moveTo(newWidth * i, 0);
    ctx.lineTo(newWidth * i, ctx.canvas.height);
    ctx.stroke();
}

// Draw lines horizontally
for (var i = 1; i <= 5; i ++) {
    ctx.moveTo(0,newHeight * i + ((ctx.canvas.width) / 13) * 0.6);
    ctx.lineTo(ctx.canvas.width,newHeight * i + ((ctx.canvas.width) / 13) * 0.6);
    ctx.stroke();
}

