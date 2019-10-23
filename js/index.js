let dayList = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

window.onload = function () {
    let hours;
    let days;
    let form = document.getElementById("form");
    let reloadBtn = document.getElementById("reloadBtn");
    //Creates grid when submit is pressed
    form.onsubmit = function () {
        hours = document.getElementById("hoursInput").value;
        days = document.getElementById("daysInput").value;
        let day = document.getElementById("daySelect");
        if (document.getElementById("firstColumn").childElementCount === 0) {
            console.log(day.value);
            Draw(days, hours, day.value);
        }
        return false;
    };
    // To reload the page press Reload button, otherwise it will not load another grid
    reloadBtn.addEventListener("click", function() {
        location.reload();
    })
};

function Draw(nrDays, nrHours, day) {
    let newBlock;
    let days = document.getElementById('firstColumn');
    let hours = document.getElementById('firstRow');
    let classes = document.getElementById('classes');
    let classHeight = (document.getElementById('content').clientHeight -
                        document.getElementById('content').clientHeight * 0.1) / nrDays;
    let hoursPx = (hours.clientWidth - hours.clientWidth * 0.1) / nrHours;
    let count = dayList.indexOf(day);
    console.log(count);
    // Any of the following "for" can be commented to better understand the code
    // Draw the rows where the day name will be written
    for (let i = 0; i < nrDays; i ++) {
        newBlock = document.createElement('div');
        newBlock.classList.add('days');
        newBlock.style.height = classHeight + 'px';
        newBlock.setAttribute("id", dayList[count]);
        newBlock.innerHTML = dayList[count];
        count ++;
        if (count > 6) {
            count = 0;
        }
        if (i === nrDays - 1) {
            newBlock.style.borderBottom = '0px';
        }
        days.appendChild(newBlock);
    }

    // Draw the columns where the hours will be written
    for (let i = 0; i < nrHours; i ++) {
        newBlock = document.createElement('div');
        newBlock.classList.add('hours');
        newBlock.style.width = hoursPx + 'px';
        if (i === nrHours - 1) {
            newBlock.style.borderRight = '0px';
        }
        hours.appendChild(newBlock);
    }

    // Draw the grid where the content(classes) will be written
    for (let i = 1 ; i <= nrHours * nrDays; i ++) {
        newBlock = document.createElement('div');
        newBlock.classList.add('classDetails');
        newBlock.style.width = hoursPx + 'px';
        newBlock.style.height = classHeight + 'px';
        if (i % nrHours === 0) {
            newBlock.style.borderRight = '0px';
        }
        if (i >= nrDays * nrHours - nrHours + 1) {
            newBlock.style.borderBottom = '0px';
        }
        classes.appendChild(newBlock);
    }
}
