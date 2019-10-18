let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let sbt = document.getElementById("submitButton");


// Set the canvas width and height according to the display size
ctx.canvas.width = window.innerWidth*0.9;
ctx.canvas.height = window.innerHeight/1.3;

Draw(5, 12);


// Clear canvas and draw schedule according to number of days and hours
sbt.addEventListener("click", function() {
    let days = document.getElementById("daysInput").value;
    let hours = document.getElementById("hoursInput").value;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    Draw(days, hours);
});


// Functions that draws the lines inside the canvas
function Draw(nrOfDays, nrOfHours) {
    // Draw the first horizontal line 
    ctx.moveTo(0, ((ctx.canvas.height) / nrOfDays) * 0.4);
    ctx.lineTo(window.innerWidth, ((ctx.canvas.height) / nrOfDays) * 0.4);
    ctx.stroke();

    // Draw the first vertical line
    ctx.moveTo(((ctx.canvas.width) / nrOfHours) * 0.7, 0);
    ctx.lineTo(((ctx.canvas.width) / nrOfHours) * 0.7, ctx.canvas.height);
    ctx.stroke();


    // Divide each column and row equally
    let newWidth = (ctx.canvas.width - ((ctx.canvas.width) / nrOfHours) * 0.7) / nrOfHours;
    let newHeight = (ctx.canvas.height - ((ctx.canvas.height) / nrOfDays) * 0.4) / nrOfDays;

    // Draw lines vertically
    for (let i = 1; i < nrOfHours; i ++) {
        ctx.moveTo(newWidth * i + ((ctx.canvas.width) / nrOfHours) * 0.7, 0);
        ctx.lineTo(newWidth * i + ((ctx.canvas.width) / nrOfHours) * 0.7, ctx.canvas.height);
        ctx.stroke();
    }

    // Draw lines horizontally
    for (let i = 1; i <= nrOfDays; i ++) {
        ctx.moveTo(0,newHeight * i + ((ctx.canvas.height) / nrOfDays) * 0.4);
        ctx.lineTo(ctx.canvas.width,newHeight * i + ((ctx.canvas.height) / nrOfDays) * 0.4);
        ctx.stroke();
    }

}
