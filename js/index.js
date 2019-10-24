let dayList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

window.onload = function () {
    let hours;
    let days;
    let submitBtn = document.getElementById("submitBtn");

    //Creates grid when submit is pressed
    submitBtn.addEventListener("click", function () {
        $("#classes").empty();
        $("#firstColumn").empty();
        $("#hours").empty();
        $("#firstRowColumn").empty();
        hours = document.getElementById("hoursInput").value;
        days = document.getElementById("daysInput").value;
        let day = document.getElementById("daySelect");
        if (document.getElementById("firstColumn").childElementCount === 0) {
            Draw(days, hours, day.value);
        }
    });
};

function Draw(nrDays, nrHours, day) {
    let newBlock;
    let days = document.getElementById('firstColumn');
    let hours = document.getElementById('hours');
    let classes = document.getElementById('classes');
    let classHeight = 100 / nrDays;
    let hoursPx = 100 / nrHours;
    let count = dayList.indexOf(day);

    // Any of the following "for" can be commented to better understand the code
    // Draw the rows where the day name will be written
    for (let i = 0; i < nrDays; i ++) {
        newBlock = document.createElement('div');
        newBlock.classList.add('days');
        newBlock.style.height = classHeight + '%';
        let block = document.createElement('div');
        block.innerHTML = dayList[count];
        block.classList.add('day');
        block.setAttribute("id", dayList[count]);

        // Set day name in middle of div
        block.style.marginTop = (days.clientHeight * (1 / nrDays) - 24) / 2 + 'px';
        count ++;
        if (count > 6) {
            count = 0;
        }
        if (i === nrDays - 1) {
            newBlock.style.borderBottom = '0px';
        }
        days.appendChild(newBlock);
        newBlock.appendChild(block);
    }

    // Draw the columns where the hours will be written
    for (let i = 0; i < nrHours; i ++) {
        newBlock = document.createElement('div');
        newBlock.classList.add('hour');
        newBlock.style.width = hoursPx + '%';
        if (i === nrHours - 1) {
            newBlock.style.borderRight = '0px';
        }
        hours.appendChild(newBlock);
    }

    // Draw the grid where the content(classes) will be written
    for (let i = 1 ; i <= nrHours * nrDays; i ++) {
        newBlock = document.createElement('div');
        newBlock.classList.add('classDetails');
        newBlock.style.width = hoursPx + '%';
        newBlock.style.height = classHeight + '%';
        if (i % nrHours === 0) {
            newBlock.style.borderRight = '0px';
        }
        if (i >= nrDays * nrHours - nrHours + 1) {
            newBlock.style.borderBottom = '0px';
        }
        classes.appendChild(newBlock);
    }
}
